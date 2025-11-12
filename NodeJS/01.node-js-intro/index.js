const express = require('express')
const products = require('./data.js')

const app = express()
const port = 3000

app.get('/', (req, res) => {
      res.send('Hello, Node JS!')
})

app.get('/message', (req, res)=>{
    res.json({
        message: "Hello, this is a message from the server",
        status: "success"
    })
})


app.get('/api/products', (req, res)=>{
    res.status(200).json({
        data: products,
        message: "Products fetched successfully",
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
