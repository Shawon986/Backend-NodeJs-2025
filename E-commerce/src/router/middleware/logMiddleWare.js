const logRequestMiddleware = (req, res, next) => {
  console.log(` Request Path : ${req.path} Request URL: ${req.url}`);
  next();
}

module.exports = logRequestMiddleware;