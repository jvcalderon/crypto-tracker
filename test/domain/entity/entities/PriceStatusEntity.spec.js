'use strict'

const { PriceStatus } = require('../../../../src/domain/entity')

describe('Price status domain', function () {
  it('Creates a valid price from given data', async () => {
    const priceStatus = PriceStatus.create({invalid1: '1', invalid2: '2', price: 1.2, currency: 'BTC'})
    expect(priceStatus).toEqual({price: 1.2, currency: 'BTC'})
  })
})
