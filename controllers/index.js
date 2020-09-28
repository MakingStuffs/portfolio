const indexRouter = require("express").Router();

indexRouter.get("/", (req, res, next) => {
  res.render("index.ejs");
});

module.exports = indexRouter;
