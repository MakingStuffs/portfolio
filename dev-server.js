const express = require("express");
const path = require("path");
const app = express();
const webpack = require("webpack");
const WebpackDevMiddleware = require("webpack-dev-middleware");
const webpackConfig = require("./webpack.config");
const favicon = require("serve-favicon");
const webpackCompiler = webpack(webpackConfig);

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./public/"));

app.use(
  WebpackDevMiddleware(webpackCompiler, {
    writeToDisk: true,
    publicPath: webpackConfig.output.publicPath,
  })
);
app.use("assets", express.static(path.join(__dirname, "./public", "/assets")));
app.use(favicon(path.join(__dirname, "public", "assets", "img", "favicon.ico")));

app.get("/", (request, response) => {
  response.render("index.ejs");
});
app.get("/page/:page_name", (request, response, next) => {
  response.render("page.ejs", {
    page: request.params.page_name,
  });
});

app.get('*', (request, response) => {
  return response.status(404).render("404.ejs");
});

app.listen(8088 || PORT);
