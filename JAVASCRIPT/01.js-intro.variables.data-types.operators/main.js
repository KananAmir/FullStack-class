// console.log("Hello, World!");
// console.log("Welcome to JavaScript programming.");


// console.log("We are learning 'JavaScript'");
// console.log('We are learning "JavaScript"');
// console.log(`We are learning JavaScript`);

// window.alert("Hello, World!");

// document.writeln(`
//         <h1>Hello, World!</h1>
//         <p>We are learning JavaScript</p>
//         <p>This is my first program</p>
//     `);

// js variables, data types, operators

// js variables
// var, let, const

// let username = "John Doe"; // variable declaration and initialization
let username; // variable declaration
username = "John Doe"; // variable initialization

username = "Jane Smith"; // variable value update

console.log(username);




const pi = 3.14; // constant variable declaration and initialization
// pi = 3.15; // This will cause an error  


// block scope variables: let, const

// function  scope variable: var

{
    let age = 25;
    const country = "USA";
    var city = "New York";
}

// console.log(age); // This will cause an error
// console.log(country); // This will cause an error
console.log(city); // This will work



function test(){
    var testVar = "I am a function scope variable";
    console.log(testVar);
}

test();
// console.log(testVar); // This will cause an error



let firstName = "Samir";
// let firstName = "Mahir" // Cannot redeclare block-scoped variable 'firstName'.ts(2451)

firstName = "Mahir" // This will work

var a = 15

var a = 20


console.log(a); //20


user = "Kanan Amirov" // global variable declaration without var, let, const

console.log(user); 


// console.log(email); // Error:  Cannot access 'email' before initialization
// let email = "jhon@gmail.com";

let email; // variable declaration

console.log(email); // undefined

//hoisting
console.log(phone); // undefined
var phone = "1234567890";


// camelCase: firstName
// PasCalCase: FirstName
// snake_case: first_name
// kebab-case: first-name

