'use strict'

const moment = require('moment')

const config = require('../../../config').express
const persistence = require('../../persistence')
const PriceStatusModel = persistence.sequelizeModels.PriceStatus

const getDateSecondsAgo = sec => moment().subtract(sec, 'm').format()

module.exports = {
  list: async (req, res) => {
    const fromDate = getDateSecondsAgo(config.timelineSecondsWidth)
    const result = await PriceStatusModel.findAll({where: {createdAt: {$gte: fromDate}}})
    res.send(result)
  }
}
