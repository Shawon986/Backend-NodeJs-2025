const productsRouter = require('./productsRouter');
const userRoute = require('./users');

const configureRouter =(app)=>{
        productsRouter.get('/status', (req,res)=>{
        res.send("OK")
    });

    
    app.use(productsRouter);
    app.use(userRoute);
}

module.exports = configureRouter;
