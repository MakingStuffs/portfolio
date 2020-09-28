const HtmlWebpackPlugin = require("html-webpack-plugin");
const BrowserSync = require("browser-sync-webpack-plugin");
const ExtractCSSChunks = require("extract-css-chunks-webpack-plugin");
const PreloadWebpackPlugin = require("preload-webpack-plugin");
const PurgeCssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob");

const fs = require("fs");
const path = require("path");

const config = {
  entry: {
    main: "./src/js/main.js",
  },
  output: {
    filename: "assets/js/[name].[hash].js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
  },
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  target: "web",
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
          plugins: [],
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: ExtractCSSChunks.loader,
            options: {
              hot: false,
            },
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  ["postcss-import", {}],
                  [
                    "postcss-preset-env",
                    {
                      browsers: "> .5%, last 2 versions",
                    },
                  ],
                ],
              },
            },
          },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.(svg|eot|ttf|woff)$/,
        loader: "file-loader",
        options: {
          publicPath: path.resolve(__dirname, "/assets/fonts/"),
          outputPath: "assets/fonts",
          name: "[name].[hash].[ext]",
          esModule: false,
        },
      },
      {
        test: /\.(jpg|png|jpeg|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: path.resolve(__dirname, "/assets/img/"),
              outputPath: "assets/img",
              name: "[name].[hash].[ext]",
              esModule: false,
            },
          },
          {
            loader: "img-loader",
            options: {
              plugins: [
                require("imagemin-gifsicle")({
                  interlaced: false,
                }),
                require("imagemin-mozjpeg")({
                  progressive: true,
                  arithmetic: false,
                  quality: 85
                }),
                require("imagemin-pngquant")({
                  floyd: 0.5,
                  speed: 2,
                }),
                require("imagemin-svgo")({
                  plugins: [{ removeTitle: true }, { convertPathData: false }],
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.ico$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: path.resolve(__dirname, "/assets/img/"),
              outputPath: "assets/img",
              name: "[name].[ext]",
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "raw-loader!./src/views/index.ejs",
      filename: "index.ejs",
      blocking: "defer"
    }),
    new HtmlWebpackPlugin({
      template: "raw-loader!./src/views/page.ejs",
      filename: "page.ejs",
      blocking: "defer"
    }),
    new HtmlWebpackPlugin({
      template: "raw-loader!./src/views/404.ejs",
      filename: "404.ejs",
      blocking: "defer"
    }),
    new PreloadWebpackPlugin({
      rel:"preload",
      include: "allAssets",
      fileBlacklist: [/\.(png|jpg|jpeg)$/],
      as(entry) {
        if (/\.css$/.test(entry)) return 'style';
        if (/\.(woff|ttf)$/.test(entry)) return 'font';
        return 'script';
      }
    }),
    new ExtractCSSChunks({
      filename: "assets/css/[name].[hash].css",
    }),
    new PurgeCssPlugin({
      paths: glob.sync(`${path.join(__dirname, "src")}/**/*`, { nodir: true }),
    }),
  ],
};

const ejsPartialsLoader = (filePath, outputPath, loader, config) => {
  const addPartials = (filePath, outputPath) => {
    let usePath = loader ? `${loader}!${filePath}` : filePath;
    let partials = fs.readdirSync(filePath);

    partials.forEach((partial) => {
      if (!/\.ejs$/.test(partial)) {
        if (!fs.existsSync(`${config.output.path}/${outputPath}${partial}`)) {
          fs.mkdirSync(`${config.output.path}/${outputPath}${partial}`, {
            recursive: true,
          });
        }

        addPartials(`${filePath}${partial}/`, `${outputPath}${partial}/`);
      } else {
        config.plugins.push(
          new HtmlWebpackPlugin({
            template: usePath + partial,
            filename: outputPath + partial,
            excludeChunks: ["main"],
          })
        );
      }
    });
  };

  return addPartials(filePath, outputPath);
};

ejsPartialsLoader("./src/views/partials/", "partials/", null, config);

module.exports = config;
