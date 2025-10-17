// rest vs spread
// desctructuring 


const users = ["Alice", "Bob", "Charlie"];

const usersCopy = [...users]

console.log(usersCopy);

const nums = [1, 2, 3, 4, 5];
const nums2 = [6, 7, 8, 9, 10];

// const combinedNums = nums.concat(nums2);
const combinedNums = [...nums, ...nums2];

console.log(combinedNums);


function sum(a, b, c, d) {
    return a + b + c + d;
}

const numbers = [1, 2, 3, 4];
// console.log(sum(1,2,3,4));
console.log(sum(...numbers));


// rest operator

function multiply(factor, ...args) {
    // console.log(args);
    
    return args.map(num => num * factor);
}

console.log(multiply(2, 1, 2, 3, 4, 5)); // [2, 4, 6, 8, 10]


// unlimited number of arguments

function sumOfAll(...args) {
    console.log(args);
}

sumOfAll(1, 2, 3);
sumOfAll(4, 5, 6, 7, 8);
sumOfAll(9, 10);


// destructuring with rest


const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

//before destructuring

// const firstFruit = fruits[0];
// const secondFruit = fruits[1];
// const remainingFruits = fruits.slice(2);

// console.log(firstFruit);
// console.log(secondFruit);
// console.log(remainingFruits);

let fName = "Samir"

const [firstFruit, _, thirdFruit, ...restFruits] = fruits;
console.log(firstFruit);
console.log(thirdFruit);
console.log(restFruits);

const person = {
    fName: "Kanan",
    lName: "Amirov",
    age: 28,
    address: {
        city: "Baku",
        country: "Azerbaijan",
        street: "123 Main St"
    },
    hobbies: ["reading", "traveling", "coding"]
}

//before destructuring

// const firstName = person.fName;
// const age = person.age;
// const address = person.address;
// const country = person.address.country;

// const {fName: firstName, lName, address} = person
const {fName: firstName, lName, address: { country, city, street }} = person

console.log(fName);
console.log(firstName);
console.log(lName);
console.log(country);
console.log(city);
console.log(street);


// const user = {
//     username: "john_doe",
//     email: "",
//     password: "securepassword",
//     isAdmin: false,
//     lastLogin: "2023-10-01T10:00:00Z"
// }

// const {username, password, isAdmin, email, lastLogin} = user;


//shallow vs deep copy


const countries = ["Azerbaijan", "Turkey", "Germany", "France", "Italy", "Spain"];

// const countriesCopy = countries // shallow copy
const countriesCopy = [...countries] 

countriesCopy.push("Portugal");
countries.shift()

console.log("countries", countries);
console.log("countriesCopy", countriesCopy);


const products = [
  { id: 1, name: "iPhone 15", category: "Electronics", price: 2100, stock: 15 },
  { id: 2, name: "Nike Air Max", category: "Shoes", price: 180, stock: 30 },
  { id: 3, name: "MacBook Pro", category: "Electronics", price: 3500, stock: 5 },
  { id: 4, name: "T-shirt", category: "Clothing", price: 25, stock: 60 },
  { id: 5, name: "Coffee Maker", category: "Home Appliances", price: 120, stock: 10 },
  { id: 6, name: "Samsung Galaxy S24", category: "Electronics", price: 1900, stock: 20 }
];

const productsCopy = [...products];

productsCopy[0].name = "iPhone 15 Pro";

// console.log(productsCopy);
console.log(products);




const student = {
    name: 'John',
    age: 30,
    isEmployed: true,
    hobbies: ['reading', 'traveling', 'swimming'],
}
// const studentCopy = student; // shallow copy
// const studentCopy = {...student};

// studentCopy.name = "Jane";
// studentCopy.hobbies.push("coding");

// console.log(student);
// console.log(studentCopy);


// To create a deep copy, we can use structuredClone (modern browsers) or JSON methods


const deepCopiedStudent = structuredClone(student);

deepCopiedStudent.name = "Jane";
deepCopiedStudent.hobbies.push("coding");

console.log(student);
console.log(deepCopiedStudent);

const deepCopiedProducts = JSON.parse(JSON.stringify(products))

deepCopiedProducts[0].name = "iPhone 15 Ultra";

console.log(products);
console.log(deepCopiedProducts);