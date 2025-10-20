const wrapperElem = document.querySelector('.wrapper')

const headingElem = document.createElement('h2')

headingElem.textContent = 'This is a dynamically created heading'

// wrapperElem.appendChild(headingElem)
// wrapperElem.append(headingElem, ' - Appended using append method')
wrapperElem.prepend(headingElem)
console.log(headingElem);



const allTexts = document.querySelectorAll('.content .text') // nodeList
const allParags = document.getElementsByClassName('text') // HTMLCollection


const textElem = document.createElement('p')

textElem.textContent = 'This is a new paragraph added using prepend method'

textElem.classList.add('text')

console.log(textElem);


const contentElem = document.querySelector('.content')

contentElem.append(textElem)



console.log(allTexts);
console.log(allParags);



const products = [
    { id: 1, name: "iPhone 15", category: "Electronics", price: 2100, stock: 15 },
    { id: 2, name: "Nike Air Max", category: "Shoes", price: 180, stock: 30 },
    { id: 3, name: "MacBook Pro", category: "Electronics", price: 3500, stock: 5 },
    { id: 4, name: "T-shirt", category: "Clothing", price: 25, stock: 60 },
    { id: 5, name: "Coffee Maker", category: "Home Appliances", price: 120, stock: 10 },
    { id: 6, name: "Samsung Galaxy S24", category: "Electronics", price: 1900, stock: 20 }
];

const productsListElem = document.querySelector('.product-list')

//events: click, change, input, submit, mouseover, mouseout, keydown, keyup
const clearBtn = document.querySelector('.clear')
const createBtn = document.querySelector('.create')

clearBtn.addEventListener('click', (e) => {
    // alert('Button was clicked!')
    productsListElem.innerHTML = ''
    e.target.disabled = true
})

createBtn.addEventListener('click', () => {
    products.forEach((product) => {
        const listItemElem = document.createElement('li')
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        const content = document.createElement('span')
        content.textContent = `${product.name} - $${product.price} (${product.stock} in stock)`

        deleteBtn.addEventListener('click', (e) => {
            //    console.log(e.target.parentElement);
            e.target.parentElement.remove();
        })
        listItemElem.append(content, ' ', deleteBtn)
        productsListElem.appendChild(listItemElem)
    })

    clearBtn.removeAttribute('disabled')

})

const linkElem = document.createElement("a")
linkElem.textContent = 'Go to Github'
linkElem.setAttribute('href', 'https://github.com')
linkElem.setAttribute('target', '_blank')
linkElem.setAttribute('title', 'GitHub Homepage')

console.log(linkElem.hasAttribute("class")); // false
console.log(linkElem.hasAttribute("href")); // true

console.log(linkElem.getAttribute("href")); // https://github.com
console.log(linkElem.getAttribute("id"));



document.body.prepend(linkElem)


// style property

linkElem.style.color = 'red'
linkElem.style.backgroundColor = 'lightblue'
linkElem.style.padding = '5px 10px'
linkElem.style.textDecoration = 'none'
linkElem.style.borderRadius = '5px'
linkElem.style.fontFamily = 'Arial, sans-serif'
linkElem.style.border = '2px solid blue'

linkElem.setAttribute("class", 'link')



const card = document.querySelector('.card')

const showBtn = document.querySelector('#show')
const hideBtn = document.querySelector('#hide')
const toggleBtn = document.querySelector('#toggle')


showBtn.addEventListener('click', () => {
    card.classList.add('show')
})

hideBtn.addEventListener('click', () => {
    card.classList.remove('show')

})

toggleBtn.addEventListener('click', () => {
    card.classList.toggle('show')
})


console.log(card.classList.contains('show'));



console.log(card.classList);
console.log(card.className);

// card.className = 'test'


