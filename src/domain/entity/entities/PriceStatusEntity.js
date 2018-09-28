'use strict'

const events = require('../../event').PriceStatus
const R = require('ramda')

const priceStatusFactory = R.pick(['price', 'currency'])

module.exports = {
  create: R.compose(R.tap(events.emit.CREATED), priceStatusFactory),
  events
}
