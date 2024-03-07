'use strict'

const message = 'Hello World!'
console.log(message)

let sum = 0
for (let i = 0; i < 9; i++) {
  sum += 1
}
console.log(sum)
if (sum % 2 === 0) console.log('Sum is even')
else console.log('Sum is odd')

const add = function (a, b) { return a + b }

const result = add(2, 3) // execute the function
console.log(result)
const anotherAdd = add
console.log(anotherAdd(12, 4)) // execute it again
