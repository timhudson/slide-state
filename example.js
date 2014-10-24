var slideState = require('./')

var state = slideState()

console.log(state())
// {page: 1, sub: 0}

state.next()
console.log(state())
// {page: 2, sub: 0}

state.nextSub()
console.log(state())
// {page: 2, sub: 1}

state.prev()
console.log(state())
// {page: 1, sub: 0}
