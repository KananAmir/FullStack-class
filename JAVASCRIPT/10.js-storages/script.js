//web storages

const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

//localStorage

console.log(localStorage);

addBtn.addEventListener("click", () => {
    localStorage.setItem("name", "John Doe");
});

removeBtn.addEventListener("click", () => {
    localStorage.removeItem("name");
});


// To clear all items from localStorage
// localStorage.clear();

let name = localStorage.getItem("name");


console.log(name);

console.log(localStorage.length);

console.log(localStorage.key(0));


localStorage.setItem("age", 30);
localStorage.setItem("isAdmin", true);


console.log(typeof localStorage.getItem("age"));
console.log(typeof localStorage.getItem("isAdmin"));

//sessionStorage


// sessionStorage.setItem("sessionId", "JS12345");


//use cases of localStorage
// saving user preferences
// saving shopping cart items
// saving form data temporarily
// saving theme settings (dark mode/light mode)

//use cases of sessionStorage
// saving temporary data during a session
// saving multi-step form data
// saving user authentication tokens during a session


// setting non primitive data in localStorage

const user = {
    name: "Alice",
    age: 25,
    isMember: true
}


const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 }
];



const students = ["Bob", "Charlie", "David"];
// incorrect way
// localStorage.setItem("user", user)

// localStorage.setItem("students", students)

// correct way

localStorage.setItem("user", JSON.stringify(user));
localStorage.setItem("products", JSON.stringify(products));
localStorage.setItem("students", JSON.stringify(students));

// const localUser = localStorage.getItem("user");
// const localProducts = localStorage.getItem("products");
const localProducts = JSON.parse(localStorage.getItem("products"));
const localUser = JSON.parse(localStorage.getItem("user"));


console.log(localProducts);
console.log(localUser);

