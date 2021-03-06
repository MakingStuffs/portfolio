require('dotenv').config()

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractCSSChunks = require('extract-css-chunks-webpack-plugin')
const PreloadWebpackPlugin = require('preload-webpack-plugin')
const PurgeCssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob')

const fs = require('fs')
const path = require('path')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, 'src'),
}

const config = {
  entry: {
    base: ['./src/js/main.js', './src/sass/style.scss'],
    home: [
      './src/js/modules/intersection-observer.js',
      './src/js/modules/modals.js',
    ],
    page: ['./src/js/modules/intersection-observer.js'],
  },
  output: {
    filename: 'assets/js/[name].[hash].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  mode: process.env.NODE_ENV,
  optimization: {
    splitChunks: {
      cacheGroups: {
        js: {
          test: /\.js$/,
          chunks: 'all',
        },
        styles: {
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
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
              hot: () =>
                process.env.NODE_ENV === 'development' ? true : false,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['postcss-import', {}],
                  [
                    'postcss-preset-env',
                    {
                      browsers: '> .5%, last 2 versions',
                    },
                  ],
                ],
              },
            },
          },
          { loader: 'sass-loader' },
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
        test: /\.(jpg|png|jpeg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: path.resolve(__dirname, '/assets/img/'),
              outputPath: 'assets/img',
              name: '[name].[hash].[ext]',
              esModule: false,
            },
          },
          {
            loader: 'img-loader',
            options: {
              plugins: [
                require('imagemin-gifsicle')({
                  interlaced: false,
                }),
                require('imagemin-mozjpeg')({
                  progressive: true,
                  arithmetic: false,
                  quality: 85,
                }),
                require('imagemin-pngquant')({
                  floyd: 0.5,
                  speed: 2,
                }),
                require('imagemin-svgo')({
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
            loader: 'file-loader',
            options: {
              publicPath: path.resolve(__dirname, '/assets/img/'),
              outputPath: 'assets/img',
              name: '[name].[ext]',
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'raw-loader!./src/views/index.ejs',
      filename: 'index.ejs',
      scriptLoading: 'defer',
      excludeChunks: ['page'],
    }),
    new HtmlWebpackPlugin({
      template: 'raw-loader!./src/views/page.ejs',
      filename: 'page.ejs',
      scriptLoading: 'defer',
      excludeChunks: ['home'],
    }),
    new HtmlWebpackPlugin({
      template: 'raw-loader!./src/views/404.ejs',
      filename: '404.ejs',
      scriptLoading: 'defer',
      excludeChunks: ['home'],
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      include: 'allAssets',
      fileBlacklist: [/\.(png|jpg|jpeg|ico|js|ejs|svg)$/],
      as(entry) {
        if (/\.(woff|ttf)$/.test(entry)) return 'font'
        if (/\.(css)$/.test(entry)) return 'style'
        return 'script'
      },
    }),
    new ExtractCSSChunks({
      filename: 'assets/css/[name].[hash].css',
    }),
    new PurgeCssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
  ],
}

const ejsPartialsLoader = (filePath, outputPath, loader, config) => {
  const addPartials = (filePath, outputPath) => {
    let usePath = loader ? `${loader}!${filePath}` : filePath
    let partials = fs.readdirSync(filePath)

    partials.forEach((partial) => {
      if (!/\.ejs$/.test(partial)) {
        if (!fs.existsSync(`${config.output.path}/${outputPath}${partial}`)) {
          fs.mkdirSync(`${config.output.path}/${outputPath}${partial}`, {
            recursive: true,
          })
        }

        addPartials(`${filePath}${partial}/`, `${outputPath}${partial}/`)
      } else {
        config.plugins.push(
          new HtmlWebpackPlugin({
            template: usePath + partial,
            filename: outputPath + partial,
            excludeChunks: ['home', 'base', 'page'],
          })
        )
      }
    })
  }

  return addPartials(filePath, outputPath)
}

if ( process.env.NODE_ENV === 'development' ) {
  config.plugins.push(new BrowserSyncPlugin({
    files: ['**/*.ejs', '**/*.scss'],
    proxy: 'https://localhost:3000/'
  }))
}


ejsPartialsLoader('./src/views/partials/', 'partials/', null, config)

module.exports = config
