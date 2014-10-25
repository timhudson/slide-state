# slide-state

State controller for slide presentations

[![build status](http://img.shields.io/travis/timhudson/slide-state.svg?style=flat)](http://travis-ci.org/timhudson/slide-state)

[![browser support](https://ci.testling.com/timhudson/slide-state.png)
](https://ci.testling.com/timhudson/slide-state)

## Example

``` js
var slideState = require('slide-state')
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
```

## License

MIT
