const cors = require('cors')
const express = require("express")
const productRepository = require('./product-repository')

const corsOptions = {
    origin: 'http://localhost:4200', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
};
  
const app = express()
app.use(express.json())
app.use(cors(corsOptions))

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Headers", '*')
    next();
})

const wordsBlockList = ['maconha', 'cocaina', 'lanca perfume']

///////////// INIT API //////////////////////////

app.post('/products/validate', (req, res) => {
    const product = req.body

    if (!product) {
        return res.status(200).json({isValid: false, message: 'produto deve ser informado'})
    }

    if (wordsBlockList.some(item => product.name.toLowerCase().includes(item))) {
        return res.status(200).json({isValid: false, message: 'o produto contem uma palavra proibida'})
    }

    return res.status(200).json({isValid: true, message: 'produto é válido'})
})

app.get('/products/:id', (req, res) => {
    const productId = req.params.id

    const productFound = productRepository.get(productId)

    if (!productFound) {
        return res.status(404).json({ message: 'product not found' })
    }

    res.status(200).json(productFound)
})

app.delete('/products/:id', (req, res) => {
    const productId = req.params.id
    productRepository.remove(productId)
    res.status(200).json({ message: 'Product has been deleted' })
})

app.get('/products', (req, res) => {
    const filterObj = {}

    const name = req.query.name
    const category = req.query.category

    if (!!name) {
        filterObj.name = name
    }

    if (!!category) {
        filterObj.category = category
    }
 
    const filteredProducts = productRepository.filter(filterObj)

    res.status(200).json(filteredProducts)
})

app.post('/products', (req, res) => {
    const product = req.body

    if (!product) {
        return res.status(400).json({ message: 'Body is required'})
    }

    const productSaved = productRepository.add(product)

    res.status(201).json(productSaved)
})

app.put('/products', (req, res) => {
    
    try {
        const product = req.body

        if (!product) {
            return res.status(400).json({ message: 'Body is required'})
        }

        const productUpdated = productRepository.update(product)

        res.status(200).json(productUpdated)

    } catch (error) {
        
        res.status(400).json({ message: error.message })

    }
    
})


app.get('/products/categories/list', (req, res) => {
    res.status(200).json([
        { id: 1, description: 'Gaming'},
        { id: 2, description: 'Eletronic'},
        { id: 3, description: 'Office'},
        { id: 4, description: 'Home'},
        { id: 5, description: 'Food'}
      ])
})
///////////// END API //////////////////////////


// start server
const port = process.env.PORT || 3030
app.listen(port, () => {
    console.log('products API is working on port: ', port)
})
