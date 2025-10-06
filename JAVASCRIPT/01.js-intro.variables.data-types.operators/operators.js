let a = 3
let b = 5

// Arithmetic operators
// console.log(a + b) // addition
// console.log(a - b) // subtraction
// console.log(a * b) // multiplication
// console.log(a / b) // division
// console.log(a % b) // modulus (remainder)
// console.log(a ** b) // exponentiation
console.log(`${a} + ${b} = ${a + b}`) // addition
console.log(`${a} - ${b} = ${a - b}`) // subtraction
console.log(`${a} * ${b} = ${a * b}`) // multiplication
console.log(`${a} / ${b} = ${a / b}`) // division
console.log(`${a} % ${b} = ${a % b}`) // modulus (remainder)
console.log(`${a} ** ${b} = ${a ** b}`) // exponentiation

console.log('------------------');
// Assignment operators
let c = 12

// c = c + 1 // c += 1
c += 1
console.log(c) // 13
c -= 1
console.log(c) // 12
c *= 2
console.log(c) // 24
c /= 2
console.log(c) // 12
c %= 5
console.log(c) // 2
c **= 3
console.log(c) // 8

let  d = 3
d++ // d = d + 1

console.log(d) // 4
d-- // d = d - 1
console.log(d) // 3

// Comparison operators

console.log(a == b) // false
console.log(a != b) // true
console.log(a > b) // false
console.log(a < b) // true;
console.log(a >= b) // false
console.log(a <= b) // true

let e = '3' // string
let f = 3 // number

console.log(e == f) // true (value comparison);
console.log(e === f) // false (value + type comparison); strict equality

console.log("------------------");

// Logical operators

// &&, ||, !



// js falthy values: 0, -0, '', "", ``, null, undefined, NaN, false

console.log(3>1 && 5>3) // true && true => true
console.log(3>1 && 5<3) // true && false => false
console.log(3>1 && null && 5>3) // null
console.log(3>1 && 15 && "hello") // "hello"
console.log(3>1 && 0 && "hello") // 0

console.log(3>1 || 5>3) // true 
 
console.log(null || 0 || "hello"); //hello
console.log(NaN || 0 || null); // null
console.log(127 || 0 || "hello"); // 127
console.log("hello" || 0 || 12); // hello
console.log(undefined|| NaN || 19); //19

console.log(!false) // true;
console.log(!true) // false;
console.log(!(3>1)) // false;
console.log(!null) // true;
console.log(!"") // true;
console.log(!"hello") // false;


// Ternary operator

let price = 150;

let discount = price > 100 ? 20 : 0;

console.log(`Discount: ${discount}`); // Discount: 20

