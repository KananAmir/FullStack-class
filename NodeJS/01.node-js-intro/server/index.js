const express = require('express')
const { nanoid } = require('nanoid')
const cors = require('cors')
const products = require('./data.js')

const app = express()
const port = 3000

// middleware to parse json body
app.use(express.json()) // to parse json body

app.use(cors())
app.get('/', (req, res) => {
      res.send('Hello, Node JS!')
})

app.get('/message', (req, res)=>{
    res.json({
        message: "Hello, this is a message from the server",
        status: "success"
    })
})


// get all products 
app.get('/api/products', (req, res)=>{
    const { search, sortBy, order, page, limit } = req.query
    
    // console.log(search);

    // filtering
    let filteredProducts = [...products];

    // sorting
    if(sortBy){
        filteredProducts.sort((a, b)=>{
           if(order === 'desc'){
             if(typeof a[sortBy] === 'string'){
                return b[sortBy].localeCompare(a[sortBy])
             }else{
                return b[sortBy] - a[sortBy]
             }
           }
           if(order === 'asc'){
            if(typeof a[sortBy] === 'string'){
                return a[sortBy].localeCompare(b[sortBy])
             }else{
                return a[sortBy] - b[sortBy]
             }
           }
        })
    }


    if(search){
        filteredProducts = products.filter((p)=>p.title.toLowerCase().includes(search.toLowerCase()))
    }

    // pagination

    if(page && limit){
        const pageNumber = parseInt(page) || 1
        const limitNumber = parseInt(limit) || 10
        const startIndex = (limitNumber * (pageNumber - 1)) 
        const endIndex = startIndex + limitNumber
        filteredProducts = filteredProducts.slice(startIndex, endIndex)
    }
    
    res.status(200).json({
        data: filteredProducts,
        message: "Products fetched successfully",
        status: "success",
        totalProductCount: products.length,
        currentPage: parseInt(page),
        pageSize: parseInt(limit),
        totalPages: Math.ceil(products.length / (parseInt(limit)))
    })
})

// get single product
app.get('/api/products/:id', (req, res)=>{
    // const id = req.params.id
    const { id } = req.params

    const product = products.find((p) => p.id == id)

    if(!product){
        return res.status(404).json({
            message: `Product with id '${id}' not found`,
            status: "error"
        })
    }

    res.status(200).json({
        data: product,
        message: "Product fetched successfully",
        status: "success"
    })
    
})

// delete a product
app.delete('/api/products/:id', (req, res)=>{
    const { id } = req.params
    const idx = products.findIndex((p) => p.id == id)

    // console.log("idx", idx);

    if (idx === -1) {
        return res.status(404).json({
            message: `Product with id '${id}' not found`,
            status: "error"
        })
    }

    products.splice(idx, 1);

    res.status(200).json({
        message: 'Product deleted successfully',
        status: "success"
    })
    
})

// add new product
app.post('/api/products', (req, res)=>{
    // console.log(req.body); 
    const { title, price, description, category, image } = req.body

    if(!title || !price || !description || !category || !image){
        return res.status(400).json({
            message: "All fields are required: title, price, description, category, image",
            status: "error"
        })
    }

    const newProduct = {
        title,
        price,
        description,
        category,
        image,
        id: nanoid(8) 
    }

    // console.log(newProduct);

    products.push(newProduct);

    res.status(201).json({
        data: newProduct,
        message: "Product added successfully",
        status: "success"
    })
    
})

// update a product

app.put('/api/products/:id', (req, res)=>{
    const { id } = req.params
    const { title, price, description, category, image } = req.body

    if(!title || !price || !description || !category || !image){
        return res.status(400).json({
            message: "All fields are required: title, price, description, category, image",
            status: "error"
        })
    }
    const product = products.find((p) => p.id == id)

    if(!product){
        return res.status(404).json({
            message: `Product with id '${id}' not found`,
            status: "error"
        })
    }

    const updatedProduct = {
        title,
        price,
        description,
        category,
        image,
        id 
    }
    const idx = products.findIndex((p) => p.id == id)

    products[idx] = updatedProduct;

    res.status(200).json({
        data: updatedProduct,
        message: "Product updated successfully",
        status: "success"
    })


})
// global variables: __dirname, __filename, module, require, exports, process

// console.log(__dirname);
// console.log(__filename);

app.get('/home', (req, res)=>{
    res.sendFile(__dirname + '/view/index.html')
})

app.get('/about', (req, res)=>{
    res.sendFile(__dirname + '/view/about.html')
})

app.use((req, res)=>{
    res.status(404).sendFile(__dirname + '/view/404.html')
})

//middleware: function which has access to request and response objects

// request is a object which contains all the info about the request made by the client

// response is an object which contains all the info about the response sent by the server

// http request methods: get, post, put, delete, patch

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

