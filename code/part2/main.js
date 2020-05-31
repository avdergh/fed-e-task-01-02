const fp = require('lodash/fp')
const { Maybe, Container } = require('./support')

let maybe = Maybe.of([5,6,1])

// 练习1
let ex1 = function (n) {
    return maybe.map(fp.map(fp.add(n)))
}
console.log(ex1(1)) // Maybe { _value: [ 6, 7, 2 ] }

// 练习2
let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])

let ex2 = xs.map(fp.first)

console.log(ex2) // Container { _value: 'do' }

// 练习3
let safeProp = fp.curry(function (x, o) {
    return Maybe.of(o[x])
})
let user = { id: 2, name: "Albert" }

let ex3 = safeProp('name', user).map(fp.first)

console.log(ex3) // Maybe {_value: 'A }

// 练习4
let ex4 = function (n) {
    return Maybe.of(n).map(parseInt)
}

console.log(ex4(null)) // Maybe { _value: null }
console.log(ex4('4')) // Maybe { _value: 4 }