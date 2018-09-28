'use strict'

const Sequelize = require('sequelize')
const config = require('../../../config').sequelize

module.exports = new Sequelize(...config)
