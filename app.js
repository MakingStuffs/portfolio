const config = require("./utils/config");
const compression = require("compression"); 
const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const favicon = require("serve-favicon");
const indexRouter = require("./controllers/index");
const pageRouter = require("./controllers/page");
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./public/"));

app.use("/assets", express.static(path.join(__dirname, "public", "assets")));
app.use(favicon(path.join(__dirname, "public", "assets", "img", "favicon.ico")));
app.use(helmet());
app.use(cors());
app.use(middleware.requestLogger);
app.use(compression({ filter: shouldCompress }))

function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }

  // fallback to standard filter function
  return compression.filter(req, res)
}

app.use(indexRouter);
app.use("/page", pageRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
