const app = require("./app");
const logger = require('./utils/logger');
const config = require("./utils/config");
const http = require("http");

const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`Connected on port ${config.PORT}`);
});
