const compression = require('compression')
const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require('helmet')
const path = require('path')
const favicon = require('serve-favicon')
const indexRouter = require('./controllers/index')
const pageRouter = require('./controllers/page')
const contactRouter = require('./controllers/contact')
const middleware = require('./utils/middleware')
const config = require('./utils/config')
const crypto = require('crypto')

app.locals.recaptcha_key = config.RECAPTCHA_KEY
app.locals.nonce = crypto.randomBytes(8).toString('hex')

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, './public/'))

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        'script-src-elem': [
          "'unsafe-inline'",
          "'self'",
          'https://www.google.com',
          () => `'nonce-${app.locals.nonce}'`,
        ],
        'default-src': ["'self'", 'https://www.google.com'],
        'base-uri': ["'self'"],
        'block-all-mixed-content': [],
        'font-src': ["'self'", 'https:', 'data:'],
        'frame-ancestors': ["'self'"],
        'img-src': ["'self'", 'data:'],
        'object-src': ['none'],
        'script-src': ["'unsafe-eval'", "'self'", 'https://www.google.com'],
        'frame-src': ["'self'", 'https://www.google.com'],
        'script-src-attr': ['none'],
        'style-src': ["'self'", 'https:', "'unsafe-inline'"],
      },
    },
  })
)

app.use(cors())
app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')))
app.use(favicon(path.join(__dirname, 'public', 'assets', 'img', 'favicon.ico')))
app.use(middleware.requestLogger)
app.use(compression({ filter: middleware.shouldCompress }))
app.use(express.json())

app.use(indexRouter)
app.use('/page', pageRouter)
app.use('/contact', contactRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
