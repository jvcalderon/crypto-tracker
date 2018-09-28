'use strict'

const Emit = require('../utils').emit

const literals = {
  CREATED: 'price-status:created'
}

module.exports = eventEmitter => {
  const emit = Emit(eventEmitter)
  return {
    ...literals,
    ...{
      emit: {
        CREATED: emit(literals.CREATED),
      },
      emitter: eventEmitter,
    }
  }
}
