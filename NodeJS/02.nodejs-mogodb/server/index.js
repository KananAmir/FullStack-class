const express = require('express')
const mongoose = require('mongoose'); // odm - object data modeling
const { Schema } = mongoose;
const cors = require('cors');
const app = express()
require('dotenv').config()

const port = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;
const PASSWORD = process.env.PASSWORD;

app.use(express.json()); // middleware to parse json body
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
})) // to allow cross origin requests


//middleware

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url} ${new Date().toISOString()}`);
    next();
}

// app.use(logger);

// product schema and model
const ProductSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true }
}, {
    versionKey: false,
    timestamps: true
})

const Product = mongoose.model('Product', ProductSchema);

// get all products
app.get('/api/products', async (req, res) => {
    const { search, sortBy, order } = req.query;

    try {

        const filter = {}

        // if(search){
        //     filter.name = { $regex: search, $options: 'i' }
        // }


        if(search){
            filter.$or = [
                { name: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { category: { $regex: search, $options: 'i' } },
            ]
        }

        const products = await Product.find(filter).sort({
            [sortBy]: order === 'asc' ? 1 : -1
        })

        res.status(200).json({
            data: products,
            message: 'Products fetched successfully'
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

// get single product by id
app.get('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id)

        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            })
        }

        res.status(200).json({
            data: product,
            message: 'Product fetched successfully'
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

// delete product by id
app.delete('/api/products/:id', (req, res, next) => {
    const user = {
        name: 'John Doe',
        role: 'admin'
    }

    if (user.role !== 'admin') {
        return res.status(403).json({
            message: 'Forbidden: You do not have permission to perform this action'
        })
    }

    next();
}, async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id)

    if (!deletedProduct) {
        return res.status(404).json({
            message: 'Product not found'
        })
    }

    res.status(200).json({
        data: deletedProduct,
        message: 'Product deleted successfully'
    })
    try {

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})


const productValidationMiddleware = (req, res, next) => {
    const { name, price, description, category, image } = req.body;

    if (!name || !price || !description || !category || !image) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }

    next();
}
// create product
app.post('/api/products', productValidationMiddleware, async (req, res) => {
    const { name, price, description, category, image } = req.body;

    try {
        const newProduct = new Product({
            name,
            price,
            description,
            category,
            image
        })

        await newProduct.save();

        res.status(201).json({
            data: newProduct,
            message: 'Product created successfully'
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

// update product by id
app.put('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    const { name, price, description, category, image } = req.body;

    if (!name || !price || !description || !category || !image) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, {
            name, price, description, category, image
        }, { new: true })

        if (!updatedProduct) {
            return res.status(404).json({
                message: 'Product not found'
            })
        }

        res.status(200).json({
            data: updatedProduct,
            message: 'Product updated successfully'
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

// mongodb connection
mongoose.connect(DB_URL.replace('<db_password>', PASSWORD)).then(() => {
    console.log('DB connected!');
}).catch((err) => {
    console.log('DB connection error', err);
})



// database: sql, nosql
// sql - structured query language: mysql, postgresql, sqlite
// nosql - non structured query language: mongodb, firebase, couchdb

// username: amirovknn_db_user
// password: Salam123!


// mongodb+srv://amirovknn_db_user:Salam123!@cluster0.ba2hk36.mongodb.net/?appName=Cluster0