const logRequestMiddleware = (req,res,next)=>{
    console.log(`Request Method: ${req.method}, URL: ${req.url}`);
    next();
}

module.exports = {
    logRequestMiddleware,
}

