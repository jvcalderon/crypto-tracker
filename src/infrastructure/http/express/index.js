'use strict'

const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const config = require('../../../config').express
const controller = require('./controller')
app.get('/', controller.list)

io.on('connection', () => console.log('User connected!'))

app.listen(config.port, () => console.log(`Listening on port ${config.port}!`))

module.exports = { app, io }
