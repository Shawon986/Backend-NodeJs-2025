const express = require('express');
const { configureRouter } = require('./router');
const { logMiddleware } = require('./middleware');
const { errorHandler } = require('./middleware/errorHandler');
const { connectDb } = require('./db');
const config = require('./config/config');

const app = express();


connectDb();



app.use(express.json());
app.use(logMiddleware);

const port =  config.PORT;

configureRouter(app);

app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
});

