# Nivellux Leads API (Railway + Postgres)

## Что делает
- Принимает заявки `POST /api/leads`
- Сохраняет в Postgres (`leads`)
- Отправляет заявку в Telegram-бота (`sendMessage`)

## Локальный запуск
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Проверка:
- `GET http://localhost:3000/health`
- `POST http://localhost:3000/api/leads`

## Railway
1. Создай новый service из этого репозитория.
2. В настройках service укажи `Root Directory = backend`.
3. Добавь PostgreSQL plugin/service и скопируй `DATABASE_URL` в переменные.
4. Добавь env:
   - `CORS_ORIGIN=https://nivellux.com,https://www.nivellux.com`
   - `TELEGRAM_BOT_TOKEN=<token от BotFather>`
   - `TELEGRAM_CHAT_ID=<chat id получателя>`
5. Railway сам запустит `npm start`.

## Telegram настройка
1. Создай бота в `@BotFather` (`/newbot`) и скопируй токен в `TELEGRAM_BOT_TOKEN`.
2. Определи `TELEGRAM_CHAT_ID`:
   - Личка: напиши боту любое сообщение, затем открой  
     `https://api.telegram.org/bot<TOKEN>/getUpdates` и возьми `message.chat.id`.
   - Группа: добавь бота в группу, отправь сообщение в группу, затем посмотри `message.chat.id` (обычно отрицательный, например `-100...`).

## Подключение фронта
В любой HTML перед `script.js` добавь:
```html
<script>
  window.NIVELLUX_LEADS_API_URL = 'https://<your-railway-domain>/api/leads';
</script>
```
