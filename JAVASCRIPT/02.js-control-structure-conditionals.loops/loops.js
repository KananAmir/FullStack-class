// console.log("Loops");

// for, while, do...while, for...in, for...of


// for(start; condition; step) {

// }

// for (let i = 0; i < 5; i = i + 1) {
//     console.log(i);
// } 

// 0, 1, 2, 3, 4

// for (let i = 5; i > 0; i = i - 1) {
//     console.log(i);
// }

// 5, 4, 3, 2, 1

// for (let i = 1; i <= 10; i = i + 1) {
//     if (i % 2 === 0) {
//         console.log(i); //2, 4, 6, 8, 10
//     }
// }

// for(let i = 1; i <= 10; i = i + 1) {
//     if(i % 2 !== 0) {
//         console.log(i); //1, 3, 5, 7, 9
//     }
// }

// for (let i = 1; i <= 10; i = i + 2) {
//     console.log(i); //1, 3, 5, 7, 9
// }


// infinite loop
// for( ; ; ){
//     console.log("Hello");
// }


// let count = 0;

// for (; ;) {
//     count++;
//     console.log(count);
//     if (count === 100) {
//         break;
//     }
// }

console.log("---");

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        continue;
    }

    console.log(i);

}

console.log("---");

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 1) {
        continue;
    }
    console.log(i);
}

// while

// while (condition) {
//     // code to be executed
// }


// while(true){
//     console.log("Hello");
// }

let n = 0;

while (n < 5){
    n++;
    console.log(n);
}
// 1, 2, 3, 4, 5

console.log("---");

// do ... while 

// do {
//     // code to be executed
// } while (condition);


let m = 0;

do {
    m++;
    console.log(m);
} while (m < 5);

// 