# Nivellux Leads API (Railway + Postgres)

## Что делает
- Принимает заявки `POST /api/leads`
- Сохраняет в Postgres (`leads`)
- Отправляет email-уведомление на `MAIL_TO`

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
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`
   - `MAIL_FROM`, `MAIL_TO=fahrengheit1@gmail.com`
5. Railway сам запустит `npm start`.

## Подключение фронта
В любой HTML перед `script.js` добавь:
```html
<script>
  window.NIVELLUX_LEADS_API_URL = 'https://<your-railway-domain>/api/leads';
</script>
```

Если API недоступен, фронт использует fallback `mailto`.
