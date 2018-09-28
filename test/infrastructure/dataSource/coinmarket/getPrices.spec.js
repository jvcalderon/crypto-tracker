'use strict'

const nock = require('nock')
const { getPrices } = require('../../../../src/infrastructure/dataSource')

const listingMock = require('./mock/listing')
const bitcoinMock = require('./mock/bitcoin')
const litecoinMock = require('./mock/litecoin')
const namecoinMock = require('./mock/namecoin')
const etherMock = require('./mock/ether')

const HOST = 'https://api.coinmarketcap.com'

nock(HOST).get('/v2/listings/').reply(200, listingMock)
nock(HOST).get('/v2/ticker/1/').reply(200, bitcoinMock)
nock(HOST).get('/v2/ticker/2/').reply(200, litecoinMock)
nock(HOST).get('/v2/ticker/3/').reply(200, namecoinMock)
nock(HOST).get('/v2/ticker/1027/').reply(200, etherMock)

describe('Coin market API client', function () {
  it('getPrices should get current price status for given currencies', async () => {
    const prices = await getPrices(['BTC', 'LTC', 'NMC', 'ETH'])
    expect(prices).toEqual([
        {"currency": "BTC", "price": 1},
        {"currency": "LTC", "price": 2},
        {"currency": "NMC", "price": 3},
        {"currency": "ETH", "price": 4}
      ]
    )
  })
})
