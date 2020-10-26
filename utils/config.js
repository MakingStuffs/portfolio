require("dotenv").config();

const PORT = process.env.PORT;
const SSL_KEY = process.env.SSL_KEY;
const SSL_CERT = process.env.SSL_CERT;
const RECAPTCHA_KEY = process.env.RECAPTCHA_KEY;
const RECAPTCHA_URL = process.env.RECAPTCHA_URL;
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET;
const MAILER_USER = process.env.MAILER_USER;
const MAILER_USER_PASS = process.env.MAILER_USER_PASS;
const MAILER_HOST = process.env.MAILER_HOST;
const MAILER_PORT = process.env.MAILER_PORT;
const MAILER_RECIPIENT = process.env.MAILER_RECIPIENT;


module.exports = {
  PORT,
  SSL_CERT,
  SSL_KEY,
  RECAPTCHA_KEY,
  RECAPTCHA_URL,
  RECAPTCHA_SECRET,
  MAILER_USER,
  MAILER_USER_PASS,
  MAILER_RECIPIENT,
  MAILER_PORT,
  MAILER_HOST
};
