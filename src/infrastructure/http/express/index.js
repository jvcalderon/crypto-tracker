'use strict'

const config = require('../../../config').express

const app = require('express')()

const http = require('http').Server(app)
const io = require('socket.io')(http)
const controller = require('./controller')

app.get('/', controller.index)
app.get('/api', controller.list)

io.on('connection', () => console.log('User connected!'))

http.listen(config.port, () => console.log(`Listening on port ${config.port}!`))

module.exports = { app, io }
