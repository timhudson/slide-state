var ObservStruct = require('observ-struct')

module.exports = function() {
  var state = ObservStruct({
    page: 1,
    sub: 0
  })

  state.next = function() {
    var current = state()
    state.set({
      page: current.page + 1,
      sub: 0
    })
    return state
  }

  state.prev = function() {
    var current = state()
    if (current.page === 1) return

    state.set({
      page: current.page - 1,
      sub: 0
    })
    return state
  }

  state.nextSub = function() {
    var current = state()
    state.set({
      page: current.page,
      sub: current.sub + 1
    })
    return state
  }

  state.prevSub = function() {
    var current = state()
    if (current.sub === 0) return

    state.set({
      page: current.page,
      sub: current.sub - 1
    })
    return state
  }

  return state
}
