const contactRouter = require('express').Router()
const logger = require('../utils/logger')
const middleware = require('../utils/middleware')
const multer = require('multer')
const nodemailer = require('nodemailer')
const config = require('../utils/config')

contactRouter.post(
  '/submit',
  multer().none(),
  middleware.validateRecaptcha,
  middleware.validateInput,
  (req, res) => {
    try {
      const transporter = nodemailer.createTransport({
        host: config.MAILER_HOST,
        port: config.MAILER_PORT,
        secure: true,
        auth: {
          user: config.MAILER_USER,
          pass: config.MAILER_USER_PASS,
        },
      })

      const mailerInfo = middleware.getMailerInfo(req.body)

      logger.info('Attempting to send message')

      transporter.sendMail(mailerInfo, (err, info) => {
        if (err) {
          logger.info(err)
          res.status(403).json({
            success: false,
            message: err.message,
            id: info.messageId,
          })
        } else {
          logger.info('Message sent')
          res.status(200).json({
            success: true,
            message: 'Message sent successfully',
            id: info.messageId,
          })
        }
      })
    } catch (error) {
      console.error(error)
    }
  }
)

module.exports = contactRouter
