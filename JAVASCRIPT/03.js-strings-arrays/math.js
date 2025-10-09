let number = 14.289

console.log(Math.round(number)); // 14
console.log(Math.trunc(number)); // 14
console.log(Math.floor(number)); // 14
console.log(Math.ceil(number)); // 15
console.log(Math.abs(-17)); // 17

console.log(Math.pow(3, 2));// 9
console.log(3**2); // 9

console.log(Math.sqrt(9)); // 3
console.log(Math.cbrt(27)); // 3


console.log(Math.max(3, 6, 2, 8, 1)); // 8
console.log(Math.min(3, 6, 2, 8, 1)); // 1


const nums = [34, 4, 72, 91, 12, 235, 45, 6788, 89];

//spread operator
console.log(Math.min(...nums)); // 4
console.log(Math.max(...nums)); // 6788


console.log(Math.random()); // 0 - 0.999999

console.log(Math.floor(Math.random() * 10)); // 0 - 9

// random between min and max (20 - 50)

// Math.random() * (max - min) + min

// Math.random() * (50 - 20) + 20

console.log(Math.round(Math.random() * 30 + 20)); // 20 - 50

// generate otp code (1000 - 9999)

console.log(Math.floor(Math.random() * 9000 + 1000)); // 1000 - 9999
