'use strict'

const express = require('express')
const app = express()

const config = require('../../../config').express
const controller = require('./controller')
app.get('/', controller.list)

app.listen(config.port, () => console.log(`Listening on port ${config.port}!`))
