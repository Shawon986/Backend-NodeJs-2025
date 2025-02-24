const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

const port = 8000;
app.use(express.json());

const products = [
    {   
        "_id": uuidv4(),
        "name": "Sony",
        "model": "Xperia 1 vi",
        "color": "Off white",
        "price": "5600 rmb",
    },
    {   
        "_id": uuidv4(),
        "name": "Iphone",
        "model": "16 pro max",
        "color": "Purple",
        "price": "9000 rmb",
    },
];

app.get('/status', (req,res)=>{
    res.send("OK")
});

app.get('/api/products', (req,res)=>{
    res.send(products);
});

app.post('/api/products', (req,res)=>{
    const newProductData = req.body;
    const newProduct = {_id: uuidv4(),...newProductData}; 
    products.push(newProduct);
    res.status(201).json(newProduct);
});


app.listen(port, ()=>{
    console.log(`I am running on port ${port}`);
})