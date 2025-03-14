const productRouter = require('./productRouter');
const userRouter = require('./userRouter');

const configureRouter = (app) => {
  //Connection check API
app.get('/test',(req,res)=>{
    res.send("HI THERE !!!");
});

app.use('/api/products',productRouter);
app.use('/api/users',userRouter);
}

module.exports = {
    configureRouter,    
};  