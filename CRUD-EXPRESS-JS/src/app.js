const express = require('express');
const app = express();
const port = 5000;
const {configureRouter} = require('./router');
app.use(express.json());


configureRouter(app);


app.listen(port,()=>{
    console.log("App is running on port: 5000");
});