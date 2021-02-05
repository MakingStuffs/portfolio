const indexRouter = require('express').Router()

indexRouter.get('/', (req, res) => {
  res.render('index.ejs')
})

module.exports = indexRouter
