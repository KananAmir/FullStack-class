// javascipt conditionals and loops

// if, if else, switch case

// if(condition){
//     // code to be executed if condition is true
// }

let age = 26;

if (age >= 18) {
    console.log("You are eligible to vote");
}

let number = 0;

if (number > 0) {
    console.log(`${number} is a positive number`);
} else if (number < 0) {
    console.log(`${number} is a negative number`);
} else {
    console.log(`${number} is zero`);
}


// enter exam score to get grade

let score = 150

if (90 < score && score <= 100) {
    console.log("A");
} else if (80 < score && score <= 90) {
    console.log("B");
} else if (70 < score && score <= 80) {
    console.log("C");
} else if (60 < score && score <= 70) {
    console.log("D");
} else if (50 < score && score <= 60) {
    console.log("E");
} else if (0 <= score && score <= 50) {
    console.log("F");
} else {
    console.log("Invalid score");
}


// truthy and falsy values

// falsy values: false, 0, "", null, undefined, NaN
// truthy values: true, any number (positive or negative), any non-empty string, any object, any array

// if("salam"){
//     console.log("This will be printed");
// }

// if(0){
//     console.log("This will not be printed");
// }
// if(undefined){
//     console.log("This will not be printed");
// }
// if(""){
//     console.log("This will not be printed");
// }
// if(" "){
//     console.log("This will be printed");
// }

// if(14){
//     console.log("This will be printed");
// }


let n = 15

// odd or even
if (typeof n !== "number") {
    console.log(`${n} is not a number`);
} else if (n % 2 === 0) {
    console.log(`${n} is an even number`);
} else if (n % 2 !== 0) {
    console.log(`${n} is an odd number`);
} else {
    console.log(`${n} is not a number`);
}


const isRaining = true;

//ternary operator
// let weather = isRaining ? "rainy" : "sunny";

// let weather;
// if (isRaining === true) {
//     weather = "rainy";
// } else {
//     weather = "sunny";
// }


//switch case

let day = 4;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 0:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

let orderStatus = "pending";

switch (orderStatus) {
    case "pending":
        console.log("Your order is pending");
        break;
    case "shipped":
        console.log("Your order has been shipped");
        break;
    case "delivered":
        console.log("Your order has been delivered");
        break;
    default:
        console.log("Invalid order status");
        break;
}
