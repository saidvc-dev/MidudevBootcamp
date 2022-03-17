//Variables
const x = 1
let y = 5

console.log(x, y) // 1, 5 es impreso
y += 10
console.log(x, y) // 1, 15 es impreso
y = 'sometext'
console.log(x, y) // 1, sometext es impreso
x = 4 // provoca un error

//Array
const t = [1, -1, 3]

t.push(5)

console.log(t.length) // Se imprime 4
console.log(t[1]) // -1 es impreso

t.forEach((value) => {
  console.log(valor) // se imprimen los números 1, -1, 3, 5, cada uno en la línea propia
})

const t2 = t.concat(5)

console.log(t)  // [1, -1, 3] es impreso
console.log(t2) // [1, -1, 3, 5, 5] es impreso

const m1 = t.map(value => value * 2) 
console.log(m1) // [2, 1, 6, 10, 10] es impreso

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)  
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] es impreso

const t3 = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // 1, 2 es impreso
console.log(rest)          // [3, 4 ,5] es impreso

//Object
const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
}

const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const object3 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}

console.log(object1.name)         // se imprime Arto Hellas
const fieldName = 'age' 
console.log(object1[fieldName])    // 35 es impreso

object1.address = 'Helsinki'
object1['secret number'] = 12341

//Functions 
const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
} 

const result = sum(1, 5)
console.log(result)

const square = (p) => {
  console.log(p)
  return p * p
}
//const square = (p) => p * p

const t4 = [1, 2, 3]
const tSquared = t.map(p => p * p)
// tSquared es ahora [1, 4, 9]

// Function delcaration
function product(a, b) {
  return a * b
}
const result1 = product(2, 6)
// result is now 12

// Function expression
const average = function(a, b) {
  return (a + b) / 2
}

const result2 = average(2, 5)
// result is now 3.5