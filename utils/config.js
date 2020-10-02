require("dotenv").config();

const PORT = process.env.PORT;
const SSL_KEY = process.env.SSL_KEY;
const SSL_CERT = process.env.SSL_CERT;

module.exports = {
  PORT,
  SSL_CERT,
  SSL_KEY
};
