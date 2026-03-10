DROP INDEX IF EXISTS idx_note_share_note;
DROP INDEX IF EXISTS idx_note_user_updated;
DROP INDEX IF EXISTS idx_verification_identifier;
DROP INDEX IF EXISTS idx_account_userId;
DROP INDEX IF EXISTS idx_session_userId;

DROP TABLE IF EXISTS note_share;
DROP TABLE IF EXISTS note;
DROP TABLE IF EXISTS verification;
DROP TABLE IF EXISTS account;
DROP TABLE IF EXISTS session;
DROP TABLE IF EXISTS "user";
