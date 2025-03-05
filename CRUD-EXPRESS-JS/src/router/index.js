const { productMiddleware, userMiddleware } = require('../middleware');
const productRouter = require('./productRouter');
const userRouter = require('./userRouter');


const configureRouter = (app)=>{

    //Check connection API
    app.get('/test', (req,res)=>{
    res.send("HI THERE");
    });

    app.use('/api/users',userMiddleware, userRouter);
    app.use('/api/products',productMiddleware, productRouter);
}

module.exports = {

    configureRouter,
} 