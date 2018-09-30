'use strict'

module.exports =
  {
    "coinmarket": {
      "currencies": [
        "BTC",
        "LTC",
        "NMC",
        "ETH"
      ],
      "interval": 60000
    },
    "sequelize": [
      process.env.DB || "crypto_db",
      process.env.DB_USER || "crypto_usr",
      process.env.DB_PWD || "crypto_pwd",
      {
        "host": process.env.DB_HOST || 'localhost',
        "port": process.env.DB_PORT || 5432,
        "dialect": process.env.DB_DIALECT || 'postgres'
      }
    ],
    "mailer": {
      "transporter": {
        "service": process.env.MAIL_SERVICE || 'gmail',
        "auth": {
          "user": process.env.MAIL_USER,
          "pass": process.env.MAIL_PWD
        }
      },
      "mailOptions": {
        "from": process.env.MAIL_FROM,
        "to": process.env.MAIL_TO,
        "subject": "Crypto currencies status"
      },
      "interval": 3600000
    },
    "express": {
      "timelineSecondsWidth": 6000,
      "port": process.env.PORT || 3000,
      "channel": "prices",
      "swagger": {
        "apiVersion": "1.0",
        "swaggerVersion": "1.0",
        "swaggerURL": "/swagger",
        "swaggerJSON": "/api-docs",
        "swaggerUI": "./src/infrastructure/http/swagger/public/",
        "basePath": `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`,
        "apis": ["./src/infrastructure/http/swagger/api.yml"]
      }
    }
  }
