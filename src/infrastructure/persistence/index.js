'use strict'

const conn = require('./sequelize/connection')

const persistence = {
  sequelizeModels: {
    PriceStatus: require('./sequelize/models/PriceStatus')(conn)
  },
  sequelize: conn
}

conn.sync()

module.exports = persistence
