CREATE TABLE IF NOT EXISTS leads (
  id BIGSERIAL PRIMARY KEY,
  source TEXT NOT NULL,
  page_url TEXT,
  language VARCHAR(16),
  submitted_at TIMESTAMPTZ,
  fields JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
