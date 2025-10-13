
// let a = 3;
// let b = 5;

// let sum = a + b;

// DRY - Don't Repeat Yourself

// functions are  reusable blocks of code

// function declearation or regular function
// function expression
// arrow function

function sayHello() {
    console.log("Hello!");
}

// function call
sayHello();

//parameters and arguments

// function with parameter
function greet(username) {
    console.log(`Hello, ${username}`);
}

// function with default value
function greet(username = "Guest") {
    console.log(`Hello, ${username}`);
}

greet("Jhon")
// Jhon is argument
// username is parameter

greet("Mahir")
greet("Ayan")
greet("Samir")
greet("Nuray")
greet() // Hello, Guest

//sum of two numbers


// function sum(a, b){
//     let result = a + b
//     console.log(result);
// }

function sum(a = 0, b = 0) {
    let result = a + b
    console.log(result);
}

// sum(3, 5) // 8
// sum(10, 20) // 30
// sum(100, 200) // 300
// sum(7, 15) // 22

// sum()
// sum(2)
// sum(2, 3)
// sum(10, 20, 30, 40, 50) // only first two arguments will be considered

// unlimited number of arguments

function sumOfAllDigits(...numbers) {
    // console.log(numbers);
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]
    }
    console.log(sum);
}

sumOfAllDigits(1, 2, 3)
sumOfAllDigits(1, 2, 3, 4, 5)
sumOfAllDigits(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)

//return keyword

// hoists to the top
console.log(square(5)); // 25

function square(num){
    let result = num ** 2
    console.log("salam1");
    return result
    console.log("salam2"); // unreachable code
}

console.log(square(10)); // 100


// anonimous function

// function(){}

// ()=>{}

// function expression

// sayHi() // error:  Cannot access 'sayHi' before initialization

const sayHi = function(){
    console.log("Hi!");
}

sayHi()

// arrow function

const sayWelcome = () => {
    console.log("Welcome!");
}

sayWelcome()


// const add = (first, second)=> {
//     return first + second
// }


// console.log(add(2,3)); // error:  Cannot access 'add' before initialization
const add = (first, second) => first + second

const cube = num => num ** 3

console.log(cube(3));

console.log(add(1, 2)); // 3

// IIFE - Immediately Invoked Function Expression

// (function(){
//     console.log("I am IIFE");
// })()

// (()=>{
//     console.log("I am IIFE arrow function");
// })()


((a, b)=>{
    console.log(a + b);
})(3, 4)


function test(){}

console.log(test()); // undefined


function salamlama(username){
    console.log(`Hello, ${username}`);
}

salamlama("Ayan")

function sumOfArrayElements(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}

console.log(sumOfArrayElements([1,2,3])); // 6
console.log(sumOfArrayElements([1,2,3,4])); // 10
console.log(sumOfArrayElements([1,2,3,4,5])); // 15


// callback function


// higher order function
function mainFunction(cb){
    cb()
}


// callback function
function callbackFunction(){
    console.log("I am callback function");
}

mainFunction(callbackFunction) // I am callback function

mainFunction(function(){
    console.log("I am callback function 2");
})

mainFunction(()=>{
    console.log("I am callback function 3");
})

function processUserInput(callback){
    let name = "Gunay"
    callback(name)
}

processUserInput(function(name){
    console.log(`Hello, ${name}`);
})