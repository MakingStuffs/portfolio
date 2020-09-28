const pageRouter = require("express").Router();

pageRouter.get("/privacy-policy", (req, res, next) => {
  res.render("page.ejs", {
    page: "privacy-policy",
  });
});

pageRouter.get("/terms-of-service", (req, res, next) => {
  res.render("page.ejs", {
    page: "terms-of-service",
  });
});

module.exports = pageRouter;
