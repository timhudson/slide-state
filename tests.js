var test = require('tape')
var slideState = require('./')

test('next', function(t) {
  t.plan(2)
  var state = slideState()

  state.next()
  state.nextSub()
  t.deepEqual(state(), {page: 2, sub: 1})

  state.next()
  t.deepEqual(state(), {page: 3, sub: 0})
})

test('prev', function(t) {
  t.plan(2)
  var state = slideState()

  state.next()
  state.nextSub()
  t.deepEqual(state(), {page: 2, sub: 1})

  state.prev()
  t.deepEqual(state(), {page: 1, sub: 0})
})

test('nextSub', function(t) {
  t.plan(1)
  var state = slideState()

  state.nextSub()
  t.deepEqual(state(), {page: 1, sub: 1})
})

test('prevSub', function(t) {
  t.plan(2)
  var state = slideState()

  state.nextSub()
  t.deepEqual(state(), {page: 1, sub: 1})
  state.prevSub()
  t.deepEqual(state(), {page: 1, sub: 0})
})
