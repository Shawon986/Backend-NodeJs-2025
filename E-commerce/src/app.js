const express = require('express');
const configureRouter = require('./router');
const {logMiddleWare} = require('./Middleware');
const app = express();
app.use(express.json());
const port = 9000 ;


app.use(logMiddleWare);


configureRouter(app);


app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
});
