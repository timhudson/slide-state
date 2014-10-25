# slide-state

State controller for slide presentations

[![build status](http://img.shields.io/travis/timhudson/slide-state.svg?style=flat)](http://travis-ci.org/timhudson/slide-state)

[![browser support](https://ci.testling.com/timhudson/slide-state.png)
](https://ci.testling.com/timhudson/slide-state)

## Example

``` js
var slideState = require('slide-state')

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
```

## License

MIT
