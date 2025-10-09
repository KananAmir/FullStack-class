let str = "javascript";

// console.log(str[0]);
// console.log(str[1]);
// console.log(str.length); // 10

// console.log(str[str.length - 1]); // t

// strings are immutable

str[0] = "J"; // does not work

// console.log(str);

// let guestList = `Guests:
//  * John
//  * Pete
//  * Mary
// `;

// console.log(guestList);


// javascript arrays

const numbers = [34, 4, 72, 91, 12, 235, 45, 67, 89];

const students = ["Samir", "Kamran", "Fuad", "Nicat", "Aysel", "Nigar"];

// console.log(numbers);
// console.log(typeof numbers);
// console.log(numbers.length);

// console.log(students[0]); // Samir
// console.log(students[3]); // Nicat
// console.log(students[students.length - 1]); // Nigar


const emptyArray = []
const newArr = new Array(5); // [ <5 empty items> ]

console.log(newArr);

// students.length = 0
students[1] = "Gunel"
console.log(students);


const scores = [90, 78, 45, 23, 67, 89];

let sum = 0;

for (let i = 0; i < scores.length; i++) {
    // console.log(scores[i]);
    sum = sum + scores[i]
}

console.log("Sum: ", sum);
const avg = sum / scores.length
console.log("Average: ", avg);

console.log("------------------");

//find max and min number in array

const nums = [34, 4, 72, 91, 12, 235, 45, 6788, 89];

let max = nums[0]
for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
        max = nums[i]
    }
}

console.log("Max: ", max);

let min = nums[0]
for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
        min = nums[i]
    }
}

console.log("Min: ", min);


// Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.
//find all divisors of a number

let n = 120;

// for(let i = 1; i <= n; i++){
//     if(n % i === 0){
//         console.log(i);
//     }
// }


const fruits = ["alma", "banannnnn", "qarpız", " portağal", "ananas", "nar"];

// array daxilindəki ən uzun sözü tapan alqoritm yazın

let longest = fruits[0]

for (let i = 1; i < fruits.length; i++) {
    if (fruits[i].length > longest.length) {
        longest = fruits[i]
    }
}

console.log("Longest word: ", longest);


console.log("------------------");

//array of objects
const products = [
    {
        id: 1,
        title: "Smartphone",
        description: "A high-end smartphone with the latest features.",
        price: 799.99,
    },
    {
        id: 2,
        title: "Laptop",
        description: "Powerful laptop with a large screen and fast processor.",
        price: 1299.99,
    },
    {
        id: 3,
        title: "Coffee Maker",
        description: "An automatic coffee maker with a built-in grinder.",
        price: 99.99,
    },
    {
        id: 4,
        title: "Headphones",
        description: "Wireless over-ear headphones with noise-cancellation.",
        price: 199.99,
    },
    {
        id: 5,
        title: "Smart TV",
        description: "55-inch 4K Smart TV with streaming apps built-in.",
        price: 699.99,
    },
];


const student = {
    id: 1,
    name: "Samir",
    age: 23,
    courses: ["html", "css", "javascript"]
}

// console.log(student.name);
console.log(student["name"]);


console.log(student.courses);

let totalPrice = 0
for (let i = 0; i < products.length; i++) {
    // console.log(products[i].title);
    totalPrice += products[i].price
}

console.log("Total price: ", totalPrice);
const averagePrice = totalPrice / products.length;
console.log("Average price: ", averagePrice);


// const productList = document.querySelector(".product-list");

// for(let i = 0; i < products.length; i++){
//     const liElem = document.createElement("li")
//     liElem.textContent = `${products[i].title} - $${products[i].price}`
//     productList.appendChild(liElem)
// }

//push, pop, shift, unshift


const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux'] // array of web technologies


console.log(webTechs);

// webTechs.push("Node.js"); // adds to the end
// console.log(webTechs);

// webTechs.pop() // removes from the end

// console.log(webTechs);


// webTechs.shift() // removes from the beginning
// console.log(webTechs);

webTechs.unshift("TypeScript") // adds to the beginning

console.log(webTechs);



const mixedNumbers = [3, -7, 0, 12, 45, -2, 8, -15];
// filter positive numbers
const positiveNumbers = [];
const negativeNumbers = [];
for (let i = 0; i < mixedNumbers.length; i++) {
    if (mixedNumbers[i] !== 0) continue;
    if (mixedNumbers[i] > 0) {
        positiveNumbers.push(mixedNumbers[i])
    } else {
        negativeNumbers.push(mixedNumbers[i])
    }
}

console.log(positiveNumbers);
console.log(negativeNumbers);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']


// add 'Meat' in the beginning of your shopping
// add Sugar at the end of you shopping cart
// modify Tea to 'Green Tea'


shoppingCart.unshift("Meat")
shoppingCart.push("Sugar")

shoppingCart[3] = "Green Tea"
console.log(shoppingCart);

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         console.log(i, j);
//     }
// }

// 00 01 02 03 04
// 10 11 12 13 14
// 20 21 22 23 24
// 30 31 32 33 34
// 40 41 42 43 44


const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]


const result = []

for(let i = 0; i < countries.length; i++){
    // console.log(countries[i]);
    let count = 0
    for(let j = 0; j < countries[i].length; j++){
        // console.log(countries[i][j]);
        if(countries[i][j] === "a" || countries[i][j] === "A"){
            count++
        }
    }

    if(count >=2 ){
        result.push(countries[i])
    }
}

console.log(result);
