const express = require('express');
const app = express();

const port = 8000;
app.use(express.json());

const products = [
    {
        "name": "Sony",
        "model": "Xperia 1 vi",
        "color": "Off white",
        "price": "5600 rmb",
    },
    {
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
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json(newProduct);
});

app.listen(port, ()=>{
    console.log(`I am running on port ${port}`);
})