var slideState = require('./')
var state = slideState()

state(function(current) {
  console.log(current)
})

console.log(state())
// {page: 1, sub: 0}

state.next()
// {page: 2, sub: 0}

state.nextSub()
// {page: 2, sub: 1}

state.prev()
// {page: 1, sub: 0}
