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

export function createTelegramNotifier({ botToken, chatId }) {
  if (!botToken) throw new Error('TELEGRAM_BOT_TOKEN is required');
  if (!chatId) throw new Error('TELEGRAM_CHAT_ID is required');

  return {
    async sendLead(data) {
      const messageText = buildTelegramLeadMessage(data);
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: messageText
        })
      });

      const payload = await response.json().catch(() => ({}));
      if (!response.ok || !payload.ok) {
        throw new Error(`Telegram send failed (${response.status}): ${payload.description || 'unknown error'}`);
      }
    }
  };
}

