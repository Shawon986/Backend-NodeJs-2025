const { productMiddleware, userMiddleware } = require('../middleware');
const productRouter = require('./productRouter');
const userRouter = require('./userRouter');

const configureRouter = (app) => {
  //Connection check API
app.get('/test',(req,res)=>{
    res.send("HI THERE !!!");
});

app.use('/api/products',productMiddleware, productRouter);
app.use('/api/users',userMiddleware, userRouter);
}

module.exports = {
    configureRouter,    
};  