

// const students = [
//   { name: "Alice", score: 87 },
//   { name: "Bob", score: 72 },
//   { name: "Clara", score: 95 },
//   { name: "David", score: 64 },
//   { name: "Evelyn", score: 91 },
//   { name: "Frank", score: 78 },
//   { name: "Grace", score: 88 },
//   { name: "Hannah", score: 67 },
//   { name: "Ian", score: 83 },
//   { name: "Julia", score: 59 }
// ];

const scores = [87, 72, 95, 64, 91, 78, 88, 67, 83, 59];

const cities = ["Baku", "Ganja", "Sumqayit", "Mingachevir"];


//array methods

// push, pop, shift, unshift

// cities.push("Naxcivan");
// cities.unshift("Lankaran");
// cities.pop();

// cities.shift();
// console.log(cities);


// console.log(cities.length);



const students = [
    "Alice",
    "Bob",
    "Clara",
    "David",
    "Evelyn",
    "Frank",
    "Grace",
    "Bob",
    "Ian",
    "Julia"
];

// students.reverse()
// console.log(students);

// console.log(students.at(4)); // Evelyn
// console.log(students.indexOf("Bob")); // 1
// console.log(students.indexOf("Bob", 3)); // 7
// console.log(students.indexOf("Samir")); // -1
// console.log(students.lastIndexOf("Bob")); // 7




// console.log(cities.includes("Baku")); // true
// console.log(cities.includes("Agdash")); // false
// console.log(cities.includes("baku")); // false


// console.log(cities.toString());
// console.log(cities.join("-"));

// console.log([1,2,3].concat([4,5]));


let nums1 = [1, 2, 3];
let nums2 = [4, 5];
// let allNums = nums1.concat(nums2);
let allNums = [...nums1, ...nums2]

// console.log(allNums);


// console.log(students.join(", "));
// console.log(students.join("#"));

// console.log(students.slice(0));
// console.log(students.slice(5));
// console.log(students.slice(0, 5));
// console.log(students.slice(3, 7));
// console.log(students.slice(-3));
// console.log(students.slice(-5, -2));


const countries = ["Azerbaijan", "Turkey", "Germany", "France", "Italy", "Spain"];

//splice


// countries.splice(3, 1)
// countries.splice(2, 3)
// countries.splice(1, 2, "Georgia", "Russia")

countries.splice(4, 0, "Norway", "Sweden", "Denmark")

// console.log(countries);

// array methods with callback

// iteration methods: forEach, map, findIndex, find, filter, reduce, some, every

// sorting methods: sort, reverse 
// searching methods: indexOf, lastIndexOf, includes
// mutating methods: push, pop, shift, unshift, splice, fill, copyWithin
// accessor methods: slice, concat, join




const cars = ["Toyota", "Honda", "Ford", "BMW", "Mercedes", "Audi"];

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }


// cars.forEach((item, index, array) => {
//     console.log(index, item, array);  
// })

// cars.forEach(function(item, index, array){
//     console.log(index, item, array);  
// });


const numbers = [3, 19, 12, 7, 21, 5];

let sum = 0;
numbers.forEach((number) => {
    sum += number;
});

console.log(sum); // 67

// map

const doubledNumbers = numbers.map((number) => {
    return number * 2;
})

console.log(doubledNumbers);


// console.log(numbers.map((n)=>{
//   return n**2
// }));

console.log(numbers.map((n) => n ** 2));


console.log(countries);

//abbreviations
const countriesAbbreviations = countries.map((country) => country.toUpperCase().slice(0, 3))
console.log(countriesAbbreviations);


//find

const mixedNumbers = [3, -4, 7, -12, 19, 22, -5, 8];

// const idx = mixedNumbers.findIndex((number) => number < 0) // 1
// const idx = mixedNumbers.findIndex((number) => number === 19) // 4
const idx = mixedNumbers.findIndex((number) => number === 28) // -1
console.log(idx);

const firstNegativeNumber = mixedNumbers.find((number) => number < 0) // -4
console.log(firstNegativeNumber);

const allNegativeNumbers = mixedNumbers.filter((number) => number < 0) // [-4, -12, -5]
const allPositiveNumbers = mixedNumbers.filter((number) => number > 0) // [3, 7, 19, 22, 8]
console.log(allNegativeNumbers)
console.log(allPositiveNumbers)


console.log(mixedNumbers.every((n) => n > 0)); // false,  if all elements satisfy the condition 
console.log(mixedNumbers.some((n) => n > 0)); // true, if at least one element satisfies the condition
console.log(mixedNumbers.some((n) => n > 25)); // false
console.log(mixedNumbers.every((n) => n < 25)); // true


// reduce

let nums = [5, 7, 3];

// let total = nums.reduce((accumulator, current, index, array) => {}, 0)

let total = nums.reduce((sum, item) => {
    return sum + item
}, 0)

console.log(total); // 15

// sort method

const numbersArr = [1, 23, 100, 36, 200, 150]
console.log(countries.sort());
console.log(numbersArr.sort()); //  [ 1, 100, 150, 200, 23, 36 ]


// console.log(countries);

// number value
console.log(numbersArr.toSorted((a, b) => a - b)); // [ 1, 23, 36, 100, 150, 200 ]
console.log(numbersArr.toSorted((a, b) => b - a)); // [ 200, 150, 100, 36, 23, 1 ]

// string value
console.log(countries.sort((a, b) => a.localeCompare(b))); // ascending
console.log(countries.sort((a, b) => b.localeCompare(a))); // descending


const employees = [
    { id: 1, name: 'Laura', age: 34, position: 'HR Specialist', department: 'HR', salary: 4823 },
    { id: 2, name: 'Bob', age: 27, position: 'DevOps Engineer', department: 'Development', salary: 6198 },
    { id: 3, name: 'Oliver', age: 25, position: 'Project Manager', department: 'Product', salary: 4511 },
    { id: 4, name: 'Grace', age: 38, position: 'Frontend Developer', department: 'Development', salary: 5802 },
    { id: 5, name: 'Frank', age: 29, position: 'Support Engineer', department: 'Support', salary: 3677 },
    { id: 6, name: 'Julia', age: 23, position: 'HR Specialist', department: 'HR', salary: 4090 },
    { id: 7, name: 'Michael', age: 41, position: 'Product Owner', department: 'Management', salary: 6475 },
    { id: 8, name: 'Hannah', age: 36, position: 'Marketing Manager', department: 'Marketing', salary: 5591 },
    { id: 9, name: 'Evelyn', age: 32, position: 'Backend Developer', department: 'Development', salary: 5362 },
    { id: 10, name: 'David', age: 26, position: 'HR Specialist', department: 'HR', salary: 3711 }
]

//show all employee names
// employees.forEach((employee) => {
//     console.log(employee.name);
// })


// Sort employees by age in ascending order
console.log(employees.toSorted((a, b) => a.age - b.age));

// Sort employees by age in descending order
console.log(employees.toSorted((a, b) => b.age - a.age));

// Sort employees by name in ascending order
console.log(employees.toSorted((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())));

// Sort employees by name in descending order                            
console.log(employees.toSorted((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase())));

// find all employees whose age is greater than 30
console.log(employees.filter((employee) => employee.age >= 30));

// first employee whose salary  is greater than 5000
console.log(employees.find((employee) => employee.salary > 5000));


// find all employees in the HR department
console.log(employees.filter((employee) => employee.department === 'HR'));

// find all employees in the HR department and salary greater than 4000

console.log(employees.filter((employee) => employee.department === "HR" && employee.salary > 4000));


//check if all employees are older than 18
console.log(employees.every((employee) => employee.age > 18)); // true

//check if all employees have salary greater than 4000
console.log(employees.every((employee) => employee.salary > 4000)); // false

// check if there is at least one employee with salary greater than 7000
console.log(employees.some((employee) => employee.salary > 7000)); // false


// let employeeArr = employees.map((employee) => {
//     return {
//         name: employee.name,
//         salary: employee.salary
//     }
// })

let employeeArr = employees.map((employee) => ({
    name: employee.name,
    salary: employee.salary
}))

console.log(employeeArr);


// find the total salary of all employees

let totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0)
console.log(totalSalary);
let avgSalary = totalSalary / employees.length
console.log(avgSalary);

// find smallest employee 

// console.log(employees.toSorted((a, b) => a.age - b.age)[0]);

let smallestEmployee = employees.reduce((smallest, employee) => {
    return (smallest.age < employee.age) ? smallest : employee
})

console.log(smallestEmployee);
