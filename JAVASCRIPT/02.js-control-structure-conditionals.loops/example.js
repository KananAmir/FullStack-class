// sum of numbers from 1 to 10 is: 55

let sum = 0

for(let i = 1; i <= 10; i++) {
    // console.log(i);
    sum = sum + i
}

console.log("sum of numbers from 1 to 10 is: " + sum);


// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15
// 15 + 6 = 21
// 21 + 7 = 28
// 28 + 8 = 36
// 36 + 9 = 45
// 45 + 10 = 55

// multiplication of numbers from 1 to 10 is: 3628800

let product = 1

for(let i = 1; i <= 10; i++) {
    // product = product * i
    product *= i
}

console.log("multiplication of numbers from 1 to 10 is: " + product);   


let str = "Hello";

// console.log(str.length); // 5
// console.log(str[0]); // H
// console.log(str[str.length - 1]); // o


for(let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

let a = "samir"

for(let i = a.length - 1; i >= 0; i--) {
    console.log(a[i]);
}

//polidrom strings: madam, civic, level, rotor, racecar, redder, refer 

let word = "salam"
let reversedWord = "" // m + a + l + a + s = "malas"


for(let i = word.length-1; i >= 0; i--) {
    reversedWord = reversedWord + word[i]
}

if(word === reversedWord) {
    console.log(`${word} is a palindrome`);
}else {
    console.log(`${word} is not a palindrome`);
}


let sampleText = "I am learning JavaScript, JavaScript is fun. I love JavaScript.";

let countOfA = 0;

for(let i = 0; i < sampleText.length; i++) {
    if(sampleText[i] === "a" || sampleText[i] === "A") {
        countOfA++;
        console.log(sampleText[i]);
        
    }
}

let countOfWords = 1;

for(let i = 0; i < sampleText.length; i++) {
    if(sampleText[i] === " ") {
        countOfWords++;        
    }
}

console.log(`Count of a/A in the sampleText is: ${countOfA}`);
console.log(`Count of words in the sampleText is: ${countOfWords}`);


