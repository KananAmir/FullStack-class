// strings are immutable in JavaScript

//string methods 

let str = "Hello, World!"

console.log(str.length); // 13

console.log(str.replace("World", "JavaScript")); // Hello, JavaScript!

console.log(str.toLowerCase()); // hello, world!
console.log(str.toUpperCase()); // HELLO, WORLD!


console.log("Samir".toUpperCase());
console.log("Samir".toLocaleUpperCase("az")); 


console.log(str.charAt(4)); // o
console.log(str.charCodeAt(4)); // 111 (ASCII code of 'o')

console.log(str.indexOf("W")); // 7
console.log(str.indexOf("ello")); // 1
console.log(str.indexOf("o")); // 4 (first occurrence)
console.log(str.indexOf("o", 5)); // 8 (searching from index 5)
console.log(str.indexOf("salam")); // -1 (not found)

console.log(str.lastIndexOf("o")); // 8 (last occurrence) 
console.log(str.includes("s")); // false
console.log(str.includes("o")); // true
console.log(str.includes("World")); // true

console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("H")); // true
console.log(str.startsWith("h")); // false
console.log(str.startsWith("World")); // false
console.log(str.endsWith("hello")); // false
console.log(str.endsWith("!")); // true
console.log(str.endsWith("World!")); // true
console.log(str.endsWith("JavaScript!")); // false

console.log(str.at(4)); // o
console.log(str.at(-1)); // ! (last character)
console.log(str.at(-3)); // l (third last character)

console.log(str.slice(3, 8)); // lo, W
console.log(str.slice(7)); // World!
console.log(str.slice(0, 5)); // Hello

console.log(str.slice(-6)); // World!
console.log(str.slice(-6, -1)); // World

console.log(str.substring(3, 8)); // lo, W
console.log(str.substring(7)); // World!
console.log(str.substring(0, 5)); // Hello

console.log("Kanan".concat(" ", "Amirov")); // Kanan Amirov

console.log("    Iphone 14    ".trimStart());
console.log("    Iphone 14    ".trimEnd());
console.log("    Iphone 14    ".trim());


console.log("hello".split()); // ["hello"]
console.log("hello".split("")); // ["h", "e", "l", "l", "o"]

console.log("Baku Ganja Sumqayıt".split(" ")); // ["Baku", "Ganja", "Sumqayıt"]
console.log("apple, banana, cherry".split(", ")); // ["apple", "banana", "cherry"]



console.log("hello".repeat(3)); // hellohellohello
console.log("ha".repeat(5)); // hahahahaha

console.log("hello".padStart(10, "*"));
console.log("hello".padEnd(10, "*"));

let cardNumber = "42424242424242424242";

console.log(cardNumber.slice(-4).padStart(16, "*")); // ************4242

let userName = "Mammad";

console.log(userName[0].padEnd(userName.length, "*")); // S****

const paragraph = "The quick brown fox jumps over the lazy dog. 12 It barked.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found); // ['T', 'I']


//search method
const text = "Hello, welcome to the world of JavaScript.";

console.log(text.search("welcome")); // 7



//replace all

const message = "The rain in SPAIN stays mainly in the plain";
const newMessage = message.replaceAll(/ain/gi, "XXX");


console.log(newMessage); // The rXXX in SPXXX stays mXXXly in the plXXX



