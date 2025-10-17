// DOM - document object model

console.log(window); // global object

console.log(window.document); 

console.log(document.head);
console.log(document.body);


// Selecting elements

const heading = document.getElementById('main-title');

console.log(heading);


const parags = document.getElementsByClassName('text');

console.log(parags);


const rateInputs = document.getElementsByName('rate');

console.log(rateInputs);

//type error, because HTMLCollection is not iterable

// parags.forEach(p => {
//     console.log(p);
// })

Array.from(parags).forEach(p => {
    console.log(p);
})

// for (let p of parags) {
//     console.log(p);
// }


rateInputs.forEach(input => {
    console.log(input);
});


// const allTexts = document.getElementsByTagName('p');

// console.log(allTexts);

const allTexts = document.querySelectorAll('p');

console.log(allTexts);

const paragElem = document.querySelector('.text');

console.log(paragElem);

console.log("//////////////");


const note = document.querySelector('.note');

console.log(note.parentElement);
console.log(note.parentElement.parentElement);

const mainDiv = document.querySelector('#main');

console.log(mainDiv.children);
console.log(mainDiv.children[0]);
console.log(mainDiv.childNodes);

console.log(note.nextSibling);
console.log(note.nextElementSibling);

note.textContent = "This is the UPDATED note!";
console.log(note.textContent);


//textContent vs innerText vs innerHTML

const div = document.querySelector('#main');

console.log(div.textContent);
console.log(div.innerText);
console.log(div.innerHTML);


const techList = document.querySelector('#tech-list');

console.log(techList.innerText);
console.log(techList.textContent);

console.log(techList.innerHTML);


// techList.textContent = "<li>Node.js</li><li>Express.js</li>";
techList.innerHTML = "<li>Node.js</li><li>Express.js</li>";