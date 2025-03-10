
const { productRouteMiddleware } = require('../Middleware');
const productRouter = require('./productRouter');

const configureRouter = (app) => {
    //Connection check API
    app.get('/test',(req,res)=>{
    res.send("HI THERE !!!");
});

app.use('/api/products',productRouteMiddleware, productRouter);

};

module.exports = configureRouter;