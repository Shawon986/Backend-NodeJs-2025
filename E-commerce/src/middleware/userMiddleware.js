const userRequestMiddleware = (req, res, next) => {
  console.log(` Someone requested this user method : ${req.method}`);
  next();
};

module.exports = userRequestMiddleware;