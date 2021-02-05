const pageRouter = require('express').Router()

pageRouter.get('/privacy-policy', (req, res) => {
  res.render('page.ejs', {
    page: 'privacy-policy',
  })
})

pageRouter.get('/terms-of-service', (req, res) => {
  res.render('page.ejs', {
    page: 'terms-of-service',
  })
})

module.exports = pageRouter
