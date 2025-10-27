import { BASE_URL } from "./constant.js";

// const BASE_URL = 'https://book-store-api-liard-three.vercel.app/';

const addBookForm = document.querySelector('#addBookForm');


addBookForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const price = document.querySelector('#price').value;
    const coverImageURL = document.querySelector('#coverImageURL').value;


    const newBook = {
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

        const response = await fetch(`${BASE_URL}books`, {
            method: "POST",
            body: JSON.stringify(newBook),
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