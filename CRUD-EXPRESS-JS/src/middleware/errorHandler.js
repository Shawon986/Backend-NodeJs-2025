const errorHandler = (err,req,res,next)=>{
    console.error(err);
    if(err.message === "Product not found" || err.message === "User not found"){
        return res.status(400).send(err.message);
    }
    res.status(500).send("Internal server error !!!")
    next();
};

module.exports = {
    errorHandler,
} 