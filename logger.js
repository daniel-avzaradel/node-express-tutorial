const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);

  // VERY IMPORTANT - When using a middleware we MUST pass a next or terminate by using res.send
  next();
};

module.exports = logger;
