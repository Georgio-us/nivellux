import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pg from 'pg';

const { Pool } = pg;

const PORT = Number(process.env.PORT || 3000);
const DATABASE_URL = process.env.DATABASE_URL;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const ALLOWED_ORIGINS = String(process.env.CORS_ORIGIN || '*')
  .split(',')
  .map((v) => v.trim())
  .filter(Boolean);

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL is required');
}
if (!TELEGRAM_BOT_TOKEN) {
  throw new Error('TELEGRAM_BOT_TOKEN is required');
}
if (!TELEGRAM_CHAT_ID) {
  throw new Error('TELEGRAM_CHAT_ID is required');
}

const shouldUseSSL =
  process.env.PG_SSL === 'true' ||
  (!process.env.PG_SSL && !/localhost|127\.0\.0\.1/.test(DATABASE_URL));

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: shouldUseSSL ? { rejectUnauthorized: false } : false
});

async function ensureSchema() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS leads (
      id BIGSERIAL PRIMARY KEY,
      source TEXT NOT NULL,
      page_url TEXT,
      language VARCHAR(16),
      submitted_at TIMESTAMPTZ,
      fields JSONB NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);
}

function validateLead(body) {
  if (!body || typeof body !== 'object') return 'Invalid JSON body';
  if (!body.source || typeof body.source !== 'string') return 'source is required';
  if (!body.fields || typeof body.fields !== 'object' || Array.isArray(body.fields)) {
    return 'fields must be an object';
  }
  return null;
}

function formatFieldValue(value) {
  if (Array.isArray(value)) return value.join(', ');
  if (value === null || value === undefined) return '-';
  return String(value);
}

function buildTelegramLeadMessage({ leadId, source, pageUrl, language, submittedAt, createdAt, fields }) {
  const lines = [
    `New lead #${leadId}`,
    `Source: ${source}`,
    `Language: ${language || '-'}`,
    `Page: ${pageUrl || '-'}`,
    `Submitted: ${submittedAt.toISOString()}`,
    `Saved: ${createdAt.toISOString()}`,
    '',
    'Fields:'
  ];

  for (const [key, value] of Object.entries(fields)) {
    lines.push(`- ${key}: ${formatFieldValue(value)}`);
  }

  const text = lines.join('\n');
  return text.length > 3800 ? `${text.slice(0, 3800)}\n…` : text;
}

async function sendLeadToTelegram(messageText) {
  const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: messageText
    })
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok || !payload.ok) {
    throw new Error(`Telegram send failed (${response.status}): ${payload.description || 'unknown error'}`);
  }
}

const app = express();
app.use(express.json({ limit: '1mb' }));
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || ALLOWED_ORIGINS.includes('*') || ALLOWED_ORIGINS.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error('CORS origin denied'));
    }
  })
);

app.get('/health', async (_req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.post('/api/leads', async (req, res) => {
  const error = validateLead(req.body);
  if (error) {
    return res.status(400).json({ ok: false, error });
  }

  const source = String(req.body.source || '').trim();
  const pageUrl = req.body.pageUrl ? String(req.body.pageUrl).trim() : null;
  const language = req.body.language ? String(req.body.language).trim() : null;
  const submittedAt = req.body.submittedAt ? new Date(req.body.submittedAt) : new Date();
  const fields = req.body.fields;

  try {
    const insert = await pool.query(
      `
      INSERT INTO leads (source, page_url, language, submitted_at, fields)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, created_at
      `,
      [source, pageUrl, language, submittedAt, fields]
    );

    const lead = insert.rows[0];
    const telegramMessage = buildTelegramLeadMessage({
      leadId: lead.id,
      source,
      pageUrl,
      language,
      submittedAt,
      createdAt: new Date(lead.created_at),
      fields
    });
    await sendLeadToTelegram(telegramMessage);

    return res.json({ ok: true, id: lead.id });
  } catch (err) {
    console.error('[Lead API] Failed to process lead', err);
    return res.status(500).json({ ok: false, error: 'Failed to process lead' });
  }
});

await ensureSchema();

app.listen(PORT, () => {
  console.log(`[Lead API] Listening on port ${PORT}`);
});
