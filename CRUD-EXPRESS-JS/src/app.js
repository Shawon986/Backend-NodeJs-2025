const express = require('express');
const app = express();
const port = 5000;
const {configureRouter} = require('./router');
const { logRequestMiddleware } = require('./middleware');
app.use(express.json());

app.use(logRequestMiddleware);

configureRouter(app);


app.listen(port,()=>{
    console.log("App is running on port: 5000");
});