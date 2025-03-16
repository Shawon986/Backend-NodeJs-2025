const express = require('express');
const { configureRouter } = require('./router');
const { logMiddleware } = require('./router/middleware');
const app = express();
const port = 9000 ;
app.use(express.json());


app.use(logMiddleware);
configureRouter(app);


app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
});

