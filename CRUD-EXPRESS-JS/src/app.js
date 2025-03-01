const express = require('express');
const configureRouter = require('./router');


const app = express();
const port = 8000;
app.use(express.json());


app.listen(port, ()=>{
    console.log(`I am running on port ${port}`);
});

configureRouter(app);