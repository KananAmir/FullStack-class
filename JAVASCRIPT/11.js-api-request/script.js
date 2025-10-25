//fetch api - making a get request to an api endpoint

// const url = 'https://northwind.vercel.app/api/categories'

const BASE_URL = 'https://northwind.vercel.app/api/'

// fetch("https://northwind.vercel.app/api/categories").then((res) => {
//     if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//     }
//     // console.log(res.json());
    
//     return res.json()
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log('Fetch error: ', err);
// });

// fetch("https://northwind.vercel.app/api/customers").then((res) => {
//     if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//     }
//     // console.log(res.json());
    
//     return res.json()
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log('Fetch error: ', err);
// });



// http status codes
// 200 - ok
// 201 - created

// 400 - bad request
// 401 - unauthorized
// 403 - forbidden
// 404 - not found

// 500 - internal server error


//normal function

// const sum = (a, b) => {
//     return a + b;
// }

// console.log(sum(1,2));
// console.log(sum(112,223));



//asychronous function with async/await

// const sum = async (a, b) => {
//     return a + b;
// }


async function sum (a, b) {
    return a + b;
}

// console.log(sum(1,7)); 

// sum(1,7).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log('Error: ', err);
// });



// async await

const fetchCategories = async () => {
    try {
        const response = await fetch(`${BASE_URL}categories`);
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.log('Fetch error: ', error);
    }
}

// fetchCategories();



const fetchData = async (endpoint) => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`);
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log('Fetch error: ', error);
    }
}


// fetchData('products');
// fetchData('customers');
// fetchData('categories');


// const showData = async () => {
//     const products = await fetchData('products');
//     const categories = await fetchData('categories');
//     const customers = await fetchData('customers');
//     console.log('Products: ', products);
//     console.log('Categories: ', categories);
//     console.log('Customers: ', customers);
// }

// showData();


Promise.all([
    fetchData('products'),
    fetchData('categories'),
    fetchData('customers')
]).then(([products, categories, customers]) => {
    console.log('Products: ', products);    
    console.log('Categories: ', categories);
    console.log('Customers: ', customers);
}).catch((error) => {
    console.log('Fetch error: ', error);
});

// CRUD: create, read, update, delete
// HTTP request methods: GET, POST, PUT, DELETE, PATCH