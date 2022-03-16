const x = 1
let y = 5

console.log(x, y) // 1, 5 es impreso
y += 10
console.log(x, y) // 1, 15 es impreso
y = 'sometext'
console.log(x, y) // 1, sometext es impreso
x = 4 // provoca un error
