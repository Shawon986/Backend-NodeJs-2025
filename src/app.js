const express = require('express');
const app = express();

const port = 8000;

app.get('/', (req,res)=>{
    res.send("OK")
});

app.listen(port, ()=>{
    console.log(`I am running on port ${port}`);
})