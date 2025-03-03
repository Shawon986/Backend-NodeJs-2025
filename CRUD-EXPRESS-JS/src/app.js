const express = require('express');
const app = express();
const port = 5000;
const {configureRouter} = require('./router');
app.use(express.json());

app.use((req,res,next)=>{
    console.log(`Time :`, Date.now());
    next();
})

configureRouter(app);


app.listen(port,()=>{
    console.log("App is running on port: 5000");
});