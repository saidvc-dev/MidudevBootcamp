//variables and types
let name = 'Miguel'
const number = 4
var isDeveloper = true // ver is not recommended
const list = []
const anotherList = list.concat(09)

const person = {
  name: 'Miguel',
  twitter: '@miguel',
  age: 28,
  isDeveloper: true,
  links: ['http://miguel.com', 'http://twitter/miguel.com'],
}

//function expression
const add = (a, b) => {
  return a + b
}

let result = add(4, 8)
console.log(result)

//function declaration
function substract(a, b) {
  return a - b
}
