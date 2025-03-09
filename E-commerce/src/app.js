const express = require('express');
const app = express();

const port = 9000 ;


app.get('/test',(req,res)=>{
    res.send("HI THERE !!!");
});


app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
})