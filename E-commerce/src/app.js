const express = require('express');
const { productRouter, userRouter } = require('./router');
const app = express();
const port = 9000 ;
app.use(express.json());



//Connection check API
app.get('/test',(req,res)=>{
    res.send("HI THERE !!!");
});

app.use('/api/products',productRouter);
app.use('/api/users',userRouter);


app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
});

