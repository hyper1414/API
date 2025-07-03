const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express()

app.use(express.json());


app.listen(3000, () => {
    console.log('server is running on port 3000');
});

app.post('/api/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch(error) {
    res.status(500).json({message: error.message});
  };
  
});

app.get('/', (req, res) => {
    res.send("Hello Godwin");
});

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);    
    } catch (error) {
        res.status(500).json({message: error,message});
    }
});

// app.delete('api/products')


mongoose.connect
("mongodb+srv://godwinanorue:Master234@cluster0.wfuwfsf.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("connected to database!");
})
.catch(() => {
    console.log("connection failed!");

});