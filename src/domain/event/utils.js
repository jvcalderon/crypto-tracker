'use strict'

module.exports = {
  emit: eventEmitter => name => body => eventEmitter.emit(name, body)
}
