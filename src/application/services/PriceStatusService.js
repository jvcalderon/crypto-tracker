'use strict'

const priceStatusDomain = require('../../domain/entity/entities/PriceStatusEntity')

module.exports = {
  create: data => priceStatusDomain.create(data),
  events: priceStatusDomain.events
}
