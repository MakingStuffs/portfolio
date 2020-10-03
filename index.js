const app = require("./app");
const logger = require('./utils/logger');
const config = require("./utils/config");
const spdy = require('spdy');
const fs = require('fs');

const secureServer = spdy.createServer({
  key: fs.readFileSync(config.SSL_KEY),
  cert: fs.readFileSync(config.SSL_CERT)
}, app);

secureServer.listen(0, () => {
  logger.info(`Connected on port ${secureServer.address().port}`);
});
