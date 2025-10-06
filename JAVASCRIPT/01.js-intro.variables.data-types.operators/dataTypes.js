console.log("Data Types");

// primitive data types vs reference data types

// primitive data types: string, number, boolean, null, undefined, symbol, bigint

let username = "John Doe"; // string literal
let age = 30; // number literal
let isMarried = false; // boolean literal
let address = null; // null literal
let phone; // undefined literal
let id = Symbol("id"); // symbol literal
let bigNumber = 9007199254741991n; // size of number is larger than 2^53-1 

// referance data types: object, array, function


const sayHi = function() {
    console.log("Hello!");
}

const person = {
    name: "John Doe",
    age: 30,
    isMarried: false
}

const notebook = {
    brand: "Dell",
    model: "XPS 13",
    year: 2020,
    price: 999.99
}

const students = ["John", "Jane", "Jim", "Jill"];
const numbers = [1, 2, 3, 4, 5];

console.log(typeof username); // string
console.log(typeof age); // number
console.log(typeof notebook); // object
console.log(typeof students); // object
console.log(typeof sayHi); // function

console.log(typeof typeof 15); // string

console.log(typeof Infinity); // number
console.log(typeof null); // object (this is a bug in JavaScript, null is not an object)

// NaN - Not a Number
console.log(typeof NaN); // number

