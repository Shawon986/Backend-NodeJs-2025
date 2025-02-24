const express = require('express');
const app = express();

const port = 8000;

const products = [
    {
    name: "Sony",
    model: "Xperia 1 vi",
    color: "Off white",
    price: "5600 rmb",
},
    {
        name: "Iphone",
        model: "16 pro max",
        color: "Purple",
        price: "9000 rmb",
    }
];

app.get('/', (req,res)=>{
    res.send("OK")
});


app.listen(port, ()=>{
    console.log(`I am running on port ${port}`);
})