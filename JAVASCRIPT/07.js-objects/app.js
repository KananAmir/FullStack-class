// Js Object

// key: value

// object literal syntax
const obj = {} // empty object
const person = {
    name: 'John',
    age: 30,
    isEmployed: true,
    hobbies: ['reading', 'traveling', 'swimming'],
}


//function that creates a person object
function makePerson(name, age, isEmployed, hobbies) {
    return {
        name: name,
        age: age,
        isEmployed: isEmployed,
        hobbies: hobbies,
    }
}

const person2 = makePerson("Samir", 25, false, ['gaming', 'coding'])

console.log(person2)


//global object: window in browser, global in nodejs

console.log(this);

const student = {
    firstName: "Surayya", 
    lastName: "Huseynova",
    age: 26,
    courses: ['html', 'css', 'js'],
    scores: [90, 80, 80, 70], 
    address: {
        city: "Baku",
        country: "Azerbaijan",
        street: "Nizami",
    },
    "full name": "Surayya Huseynova",
    isEmployed: false,
    greet: function(){
        console.log("Hello");
        // console.log("this:", this);
        
    },
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    },
    getFullNameArrow: () => `${this.firstName} ${this.lastName}`,
    // arrow function does not have its own this
    addCourse: function(courseName){
        this.courses.push(courseName)
    },
    addScore: function(score){
        this.scores.push(score)
    },
    calcAverageScore: function(){
        const sum = this.scores.reduce((sum, score) => sum + score, 0)
        return sum / this.scores.length;
    }
}

console.log(student)

// accessing object properties

console.log(student.lastName);
console.log(student['lastName']);
// console.log(student.full name); // error
console.log(student['full name']);
console.log(student.address?.city); // optional chaining


console.log(student.courseNumber); // undefined

student.courseNumber = 3; // adding new property

student.age = 27; // updating existing property

delete student.isEmployed; // deleting property

console.log(student);


// object methods
//this keyword


function sum(a, b) {
    return a + b;
}

student.greet(); // calling method

console.log(student.getFullName());
console.log(student.getFullNameArrow());

student.addCourse('react');
console.log(student);

console.log(student.calcAverageScore());


student.addScore(100);
console.log(student.calcAverageScore());



// object methods: key, value, entries, freeze, assign

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

console.log(Object.hasOwn(student, 'age'));// true
console.log(Object.hasOwn(student, 'uniName'));// false


// Object.freeze(student); // makes the object immutable
// student.age = 30; // will not update
// student.isEmployed = true; // will not add
// console.log(student);

// Object.seal(student); // prevents adding new properties, but allows updating existing ones
// student.age = 30; // will update
// student.isEmployed = true;  // will not add
// console.log(student);

Object.assign(student, {uniName: "BSU", graduationYear: 2022}); // adds new properties
console.log(student);

const studentCopy = Object.assign({}, student); // creates a shallow copy of the object


//object constructor syntax

// const newObj = new Object();
const newObj = new Object({
    name: "New Object",
    type: "Custom",
    id: 1,
});


newObj.name = "Test";

console.log(newObj);

// const user = {

// }
// let propertyName = window.prompt("Enter your name: "); // city
// let propertyNameValue = window.prompt("Enter your value: "); // Baku

// // console.log(propertyName);




// user[propertyName] = propertyNameValue;

// console.log(user);


const webTechnologies = [ "HTML", "CSS", "JS", "React" ];

// for of, for in loops

// webTechnologies.forEach((tech, i, arr) => console.log(tech));

for(let item of webTechnologies){
    console.log(item);
}

// for(let index in webTechnologies){
//     console.log(index, webTechnologies[index]);
// }


for(let key in student){
    console.log(key);
}

for(let key in student){
    console.log(student[key]);
}

for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}