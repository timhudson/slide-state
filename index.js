module.exports = function() {
  var state = {page: 1, sub: 0}

  function slideState() {
    return state
  }

  slideState.next = function() {
    state.page = state.page + 1
    state.sub = 0
    return state
  }

  slideState.prev = function() {
    state.page = state.page - 1
    state.sub = 0
    return state
  }

  slideState.nextSub = function() {
    state.sub = state.sub + 1
    return state
  }

  slideState.prevSub = function() {
    state.sub = state.sub - 1
    return state
  }

  return slideState
}
