const authorize = (req, res, next) => {
  const user = req.query;
  if (user.name == 'john') {
    req.user = { name: 'john', id: 4 };
    console.log('authorize');
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

module.exports = authorize;
