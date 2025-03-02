const userRouter = require('./userRouter');


const configureRouter = (app)=>{

    //Check connection API
    app.get('/test', (req,res)=>{
    res.send("HI THERE");
    });

    app.use('/api/users', userRouter);
}

module.exports = {

    configureRouter,
}