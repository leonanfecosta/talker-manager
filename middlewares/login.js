const generateToken = require('../helpers/generateToken');

const login = (_req, res, next) => {
  const token = generateToken();
  res.status(200).json(token);
  return next();
};

module.exports = login;
