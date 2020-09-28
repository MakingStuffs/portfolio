const { response } = require("express");
const logger = require("./logger");

const requestLogger = (req, res, next) => {
  logger.info(`Method: ${req.method}`);
  logger.info(`Path: ${req.path}`);
  logger.info(`Body: ${req.body}`);
  next();
};

const unknownEndpoint = (req, res, next) => {
  res.status(404).render("404.ejs");
};

const errorHandler = (error, req, res, next) => {
  logger.error(error.message);
  response.status(400).json({ error: error.message });
  next(error);
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
};
