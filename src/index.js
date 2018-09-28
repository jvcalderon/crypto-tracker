'use strict'

const R = require('ramda')

const config = require('./config')
const getPrices = require('./infrastructure/dataSource/coinmarket/getPrices')
const persistence = require('./infrastructure/persistence')

const {PriceStatus} = require('./domain/entity')
const PriceStatusModel = persistence.sequelizeModels.PriceStatus

const priceStatusService = require('./application/services/PriceStatusService')
const { CREATED, emitter } = priceStatusService.events

// Creates new price status every N seconds
setInterval(
  async () => R.compose(console.log, R.map(PriceStatus.create))(await getPrices(config.coinmarket.currencies)),
  config.coinmarket.interval
)

// Http
const {io} = require('./infrastructure/http/express')

// Listeners
emitter.on(CREATED, async priceInfo => {
  const price = await PriceStatusModel.create(priceInfo)
  io.emit(config.express.channel, price)
})
