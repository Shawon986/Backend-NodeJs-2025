const errorHandler = (err,req,res,next)=>{
    console.error(err);
    res.status(500).send("Internal server error !!!")
    next();
};

module.exports = {
    errorHandler,
}