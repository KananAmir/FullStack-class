// api - application programming interface

//promise - an object that may produce a single value some time in the future: either a resolved value or a reason that it's not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending.


// promise states: pending, fulfilled, rejected

const promise = new Promise((resolve, reject) => {
    const error = false;

    if (!error) {
        resolve("Promise resolved successfully");
    }
    else {
        reject("Promise rejected");
    }
});

// console.log(promise);

// then 
// catch
// finally

// promise.then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("Promise has been handled");
// });


const myPromise = new Promise((resolve, reject) => {
    const students = ["Samir", "Mahir", "Sever", "Anaxanim"]

    // students.length = 0;

    if (students.length > 0) {
        resolve(students);
    } else {
        reject("No students found");
    }
})


//promise chaining

console.log(myPromise);

myPromise.then((res) => {
    res.pop()
    return res;
}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})


console.log(1);
console.log(2);
console.log(3);
;
