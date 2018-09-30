'use strict'

const config = require('../../config').mailer
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(config.transporter)
const getContent = data => ({
  html: "<h1>Crypto currencies status / Estado cripto monedas</h1>" +
  data.map(x => `<p>${x.currency}: ${x.price} ($USD) </p>`)
})

module.exports = {
  sendStatus: data => transporter.sendMail(
    {...config.mailOptions, ...getContent(data)},
    (err, info) => err ? err : info
    )
}
