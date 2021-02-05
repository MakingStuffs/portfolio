const HtmlWebpackPlugin = require('html-webpack-plugin')
const BrowserSync = require('browser-sync-webpack-plugin')
const ExtractCSSChunks = require('extract-css-chunks-webpack-plugin')
const fs = require('fs')
const path = require('path')

const config = {
  entry: {
    main: './src/js/main.js',
  },
  output: {
    filename: 'assets/js/[name].[hash].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  mode: 'development',
  target: 'web',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [],
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: ExtractCSSChunks.loader,
            options: {
              hot: true,
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(svg|eot|ttf|woff)$/,
        loader: 'file-loader',
        options: {
          publicPath: path.resolve(__dirname, '/assets/fonts/'),
          outputPath: 'assets/fonts',
          name: '[name].[hash].[ext]',
          esModule: false,
        },
      },
      {
        test: /\.(jpg|png|jpeg|svg|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: path.resolve(__dirname, '/assets/img/'),
              outputPath: 'assets/img',
              name: '[name].[ext]',
              esModule: false,
            },
          },
        ],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'raw-loader!./src/views/index.ejs',
      filename: 'index.ejs',
    }),
    new HtmlWebpackPlugin({
      template: 'raw-loader!./src/views/page.ejs',
      filename: 'page.ejs',
    }),
    new HtmlWebpackPlugin({
      template: 'raw-loader!./src/views/404.ejs',
      filename: '404.ejs',
    }),
    new BrowserSync({
      files: '*/**.ejs',
      proxy: 'http://localhost:8088',
    }),
    new ExtractCSSChunks({
      filename: 'assets/css/[name].css',
    }),
  ],
}

const ejsPartialsLoader = (filePath, outputPath, loader, config) => {

  const addPartials = (filePath, outputPath) => {
    let usePath = loader ? loader + filePath : filePath
    let partials = fs.readdirSync(filePath)

    partials.forEach((partial) => {

      if(!/\.ejs$/.test(partial)) {

        if(!fs.existsSync(`${config.output.path}/${outputPath}${partial}`)) {
          fs.mkdirSync(`${config.output.path}/${outputPath}${partial}`)
        }

        addPartials(`${filePath}${partial}/`, `${outputPath}${partial}/`)

      } else {
        config.plugins.push(
          new HtmlWebpackPlugin({
            template: usePath + partial,
            filename: outputPath + partial,
            excludeChunks: ['main'],
          })
        )
      }
    })
  }

  return addPartials(filePath, outputPath)
}

ejsPartialsLoader('./src/views/partials/', 'partials/', null, config)

module.exports = config
