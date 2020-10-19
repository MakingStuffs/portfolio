const { response } = require("express");
const logger = require("./logger");
const compression = require("compression");

const requestLogger = (req, res, next) => {
  logger.info(`Method: ${req.method}`);
  logger.info(`Path: ${req.path}`);
  logger.info(`Body: ${req.body}`);
  next();
};

const unknownEndpoint = (req, res, next) => {
  res.status(404).render("404.ejs");
};

const errorHandler = (error, req, res, next) => {
  logger.error(error.message);
  response.status(400).json({ error: error.message });
  next(error);
};

const shouldCompress = (req, res) => {
  if (req.headers["x-no-compression"]) {
    // don't compress responses with this request header
    return false;
  }
  // fallback to standard filter function
  return compression.filter(req, res);
};

const validateRecaptcha = (req, res, next) => {
  try {
    const reply = await fetch(config.RECAPTCHA_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${config.RECAPTCHA_SECRET}&response=${req.body.token}`,
    });

    const data = await reply.json();

    return data.success !== true
      ? res.status(422).json({
          bot: true,
          msg:
            "Google seems to think you're a bot. Please resubmit the form and verify that you are not.",
        })
      : next();
  } catch (error) {
    next(error);
  }
};

const validateInput = (req, res, next) => {
  try {
    const validations = [
      body('first').isAlpha().isLength( { min: 3 }),
      body('last').isAlpha().isLength( { min: 3 }),
      body('email').isEmail(),
      body('subject').isAlphanumeric().isLength({ min: 5 }),
      body('message').isAlphanumeric().isLength({ min: 5 }),
    ];
    await Promise.all(validations.map((validation) => validation.run(req)));
    const errors = validationResult(req);
    return errors.isEmpty()
      ? next()
      : res.status(422).json({ errors: errors.array() });
  } catch (error) {
    next(error);
  }
};

const getMailerInfo = (data) => {
  return {
    from: `Resinfusion.co.uk <${config.MAILER_USER}>`,
    to: config.MAILER_RECIPIENT,
    replyTo: data.email,
    subject: `Message from ${data.first} ${data.last} Regarding: ${data.subject}`,
    text: `Name: ${data.first} ${data.last}
    Email: ${data.email}
    Message: ${data.message}`,
    html: `
    <div style="display:block">
      Name: ${data.first} ${data.last}
    </div>
    <div style="display:block">
      Email: ${data.email}
    </div>
    <div style="display:block">
      Message: ${data.message}
    </div>`,
  };
}

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
  shouldCompress,
  validateRecaptcha,
  validateInput,
  getMailerInfo
};
