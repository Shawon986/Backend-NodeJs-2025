const express = require('express');


const configureRouter = require('./router');
const {logMiddleWare, errorHandler} = require('./Middleware');
const { connectDB } = require('./db');
const config  = require('./Config');


const port = config.PORT;

const app = express();



connectDB();

app.use(express.json());
app.use(logMiddleWare);

configureRouter(app);

app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
});
