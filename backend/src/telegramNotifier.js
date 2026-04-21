const SOURCE_LABELS = {
  'estimate-form': 'Калькулятор сметы',
  'consultation-form': 'Консультация',
  'complex-form': 'Комплексный ремонт',
  'commercial-form': 'Коммерческая недвижимость',
  'licenses-form': 'Лицензии и документы'
};

const LANGUAGE_LABELS = {
  ru: 'Русский',
  uk: 'Украинский',
  es: 'Испанский'
};

const FIELD_LABELS = {
  object_type: 'Тип объекта',
  object_area: 'Площадь',
  works: 'Виды работ',
  'Ваше имя': 'Имя',
  'Su nombre': 'Имя',
  "Ваше ім'я": 'Имя',
  '+34': 'Телефон'
};

const FIELD_VALUE_LABELS = {
  apartment: 'Квартира',
  house: 'Дом',
  commercial: 'Коммерция',
  demolition: 'Демонтаж',
  electro: 'Электрика',
  plumbing: 'Сантехника',
  plastering: 'Отделка',
  turnkey: 'Под ключ'
};

function formatLeadDate(value) {
  return new Intl.DateTimeFormat('ru-RU', {
    timeZone: 'Europe/Madrid',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(value);
}

function humanizeValue(value) {
  if (value === null || value === undefined) return '-';
  const raw = String(value).trim();
  return FIELD_VALUE_LABELS[raw] || raw;
}

function formatFieldValue(value) {
  if (Array.isArray(value)) return value.map(humanizeValue).join(', ');
  return humanizeValue(value);
}

function getSourceLabel(source) {
  return SOURCE_LABELS[source] || source || 'Неизвестный источник';
}

function getLanguageLabel(language) {
  return LANGUAGE_LABELS[language] || language || '-';
}

function getFieldLabel(key) {
  return FIELD_LABELS[key] || key;
}

function buildTelegramLeadMessage({ leadId, source, pageUrl, language, submittedAt, createdAt, fields }) {
  const lines = [
    `📥 Новая заявка #${leadId}`,
    `🧩 Тип заявки: ${getSourceLabel(source)}`,
    `🌐 Язык сайта: ${getLanguageLabel(language)}`,
    `🔗 Страница: ${pageUrl || '-'}`,
    `🕒 Время отправки: ${formatLeadDate(submittedAt)}`,
    `💾 Время сохранения: ${formatLeadDate(createdAt)}`,
    '',
    '📋 Данные клиента:'
  ];

  for (const [key, value] of Object.entries(fields)) {
    const label = getFieldLabel(key);
    const icon = label === 'Телефон' ? '📞' : label === 'Имя' ? '👤' : '▪️';
    lines.push(`${icon} ${label}: ${formatFieldValue(value)}`);
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
