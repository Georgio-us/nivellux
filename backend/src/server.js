import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import pg from 'pg';

const { Pool } = pg;

const PORT = Number(process.env.PORT || 3000);
const DATABASE_URL = process.env.DATABASE_URL;
const MAIL_TO = process.env.MAIL_TO || 'fahrengheit1@gmail.com';
const MAIL_FROM = process.env.MAIL_FROM || process.env.SMTP_USER;
const ALLOWED_ORIGINS = String(process.env.CORS_ORIGIN || '*')
  .split(',')
  .map((v) => v.trim())
  .filter(Boolean);

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL is required');
}
if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
  throw new Error('SMTP_HOST, SMTP_USER and SMTP_PASS are required');
}
if (!MAIL_FROM) {
  throw new Error('MAIL_FROM (or SMTP_USER) is required');
}

const shouldUseSSL =
  process.env.PG_SSL === 'true' ||
  (!process.env.PG_SSL && !/localhost|127\.0\.0\.1/.test(DATABASE_URL));

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: shouldUseSSL ? { rejectUnauthorized: false } : false
});

const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpSecure =
  process.env.SMTP_SECURE === 'true' ||
  (process.env.SMTP_SECURE !== 'false' && smtpPort === 465);

const mailer = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: smtpPort,
  secure: smtpSecure,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
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

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function fieldsToText(fields) {
  return Object.entries(fields)
    .map(([k, v]) => `- ${k}: ${Array.isArray(v) ? v.join(', ') : v}`)
    .join('\n');
}

function fieldsToHtml(fields) {
  const rows = Object.entries(fields)
    .map(([k, v]) => {
      const value = Array.isArray(v) ? v.join(', ') : String(v);
      return `<tr><td style="padding:8px;border:1px solid #ddd;"><b>${escapeHtml(k)}</b></td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(value)}</td></tr>`;
    })
    .join('');
  return `<table style="border-collapse:collapse;min-width:480px;">${rows}</table>`;
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
    const subject = `Nivellux lead #${lead.id}: ${source}`;
    const text = [
      `Lead ID: ${lead.id}`,
      `Source: ${source}`,
      `Page: ${pageUrl || '-'}`,
      `Language: ${language || '-'}`,
      `Submitted at: ${submittedAt.toISOString()}`,
      `Created at: ${new Date(lead.created_at).toISOString()}`,
      '',
      'Fields:',
      fieldsToText(fields)
    ].join('\n');

    const html = `
      <h2 style="font-family:Arial,sans-serif;">New Nivellux lead #${lead.id}</h2>
      <p style="font-family:Arial,sans-serif;">
        <b>Source:</b> ${escapeHtml(source)}<br>
        <b>Page:</b> ${escapeHtml(pageUrl || '-')}<br>
        <b>Language:</b> ${escapeHtml(language || '-')}<br>
        <b>Submitted at:</b> ${escapeHtml(submittedAt.toISOString())}<br>
        <b>Created at:</b> ${escapeHtml(new Date(lead.created_at).toISOString())}
      </p>
      ${fieldsToHtml(fields)}
    `;

    await mailer.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      subject,
      text,
      html
    });

    return res.json({ ok: true, id: lead.id });
  } catch (err) {
    console.error('[Lead API] Failed to process lead', err);
    return res.status(500).json({ ok: false, error: 'Failed to process lead' });
  }
});

await ensureSchema();
await mailer.verify();

app.listen(PORT, () => {
  console.log(`[Lead API] Listening on port ${PORT}`);
});
