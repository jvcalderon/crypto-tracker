'use strict'

const EventEmitter = require('events').EventEmitter
const eventEmitter = new EventEmitter()

module.exports = {
  PriceStatus: require('./events/PriceStatusEvent')(eventEmitter)
}
