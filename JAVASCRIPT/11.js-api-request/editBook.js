import { BASE_URL } from "./constant.js";
const editBookForm = document.querySelector('#editBookForm');

const url = new URLSearchParams(window.location.search)
const id = url.get("id")


if(!id){
    window.location.href = "template.html"
}


async function getBookById() {
    try {
        const resp = await fetch(`${BASE_URL}books/${id}`)
        const data = await resp.json()
        // console.log(data);
        fillForm(data)

    } catch (error) {
        console.log(error);
    }
}




editBookForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const price = document.querySelector('#price').value;
    const coverImageURL = document.querySelector('#coverImageURL').value;


    const editedBook = {
        title: title,
        author: author,
        price: parseFloat(price),
        coverImageURL: coverImageURL
    }

    if(!title || !author || !price || !coverImageURL){
        alert('Please fill in all fields');
        return;
    }

    try {

        const response = await fetch(`${BASE_URL}books/${id}`, {
            method: "PUT",
            body: JSON.stringify(editedBook),
            headers: {
                "Content-type": "application/json"
            }
        })


        // if(response.status >= 200 && response.status < 300){
        //     window.location.href = 'index.html'
        // }

        setTimeout(()=>{
            window.location.href = 'template.html'
        }, 1500)

        
    } catch (error) {
        console.log(error);
        
    }
    
});


function fillForm(book){
    const title = document.querySelector('#title')
    const author = document.querySelector('#author')
    const price = document.querySelector('#price')
    const coverImageURL = document.querySelector('#coverImageURL')

    title.value = book.title
    author.value = book.author
    price.value = book.price
    coverImageURL.value = book.coverImageURL
}

getBookById()