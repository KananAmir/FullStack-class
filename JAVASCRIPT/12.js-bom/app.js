// dom - document object model
// bom - browser object model

console.log(window); // global object


console.log(window.location);


// window.location.href = 'test.html'

const copyBtn = document.querySelector("#copy")
const text = document.querySelector(".text")


copyBtn.addEventListener("click", () => {
    window.navigator.clipboard.writeText(text.textContent)
})

//timing functions

// setTimeout
// setInterval

let count = 0

const timeout = setTimeout(() => {
    console.log("hello");
}, 1500)


const interval = setInterval(() => {
    count++
    // console.log("fullstack"); 
    console.log("count: ", count);


    if (count === 100) {
        clearInterval(interval)
    } {
    }
}, 0)



const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const clearBtn = document.querySelector("#clear")
const result = document.querySelector(".result")


stopBtn.disabled = true
let counterInterval = null
let counter = 0
startBtn.addEventListener("click", (e) => {
    stopBtn.disabled = false
    e.target.disabled = true

    // clearInterval(counterInterval)

    counterInterval = setInterval(() => {
        counter++;
        result.textContent = counter;
    }, 500)
})
stopBtn.addEventListener("click", (e) => {
    startBtn.disabled = false
    e.target.disabled = true
    clearInterval(counterInterval)
})
clearBtn.addEventListener("click", () => {
    clearInterval(counterInterval)
    counter = 0
    result.textContent = counter
    startBtn.disabled = false
    stopBtn.disabled = true
})



