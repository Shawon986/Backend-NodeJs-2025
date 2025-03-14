const express = require('express');
const { productRouter } = require('./router');
const app = express();
const port = 9000 ;
app.use(express.json());



//Connection check API
app.get('/test',(req,res)=>{
    res.send("HI THERE !!!");
});

app.use(productRouter);



app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
});

