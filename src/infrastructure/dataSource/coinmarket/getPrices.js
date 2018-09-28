'use strict'

const R = require('ramda')
const Request = require('request-promise-native')
const request = uri => Request({uri, json: true})

const COINMARKET_API = 'https://api.coinmarketcap.com/v2'
const LISTINGS_RESOURCE = `${COINMARKET_API}/listings/`
const TICKER_RESOURCE = `${COINMARKET_API}/ticker/`

const priceFactory = data => ({
  currency: R.path(['data', 'symbol'], data),
  price: R.path(['data', 'quotes', 'USD', 'price'], data)
})

const getPrices = factory => async symbols => {
  const currencyList = await request(LISTINGS_RESOURCE)
  const currPromises = R.compose(
    R.map(c => request(TICKER_RESOURCE + c.id + '/')),
    R.filter(c => R.contains(c.symbol, symbols)),
    R.prop('data'),
  )(currencyList)

  const prices = await Promise.all(currPromises)
  return prices.map(factory)
}

module.exports = getPrices(priceFactory)
