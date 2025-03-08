
const express = require('express');
const {configureRouter} = require('./router');
const { logRequestMiddleware, errorHandler } = require('./middleware');
const connectDB = require('./db');
const config = require('./config');


const port = config.PORT;
const app = express();

connectDB();


app.use(express.json());
app.use(logRequestMiddleware);

configureRouter(app);

app.use(errorHandler);

app.listen(port,()=>{ 
    console.log("App is running on port: 5000"); 
}); 

      