const generateToken = require('../helpers/generateToken');

const login = (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const token = generateToken();
  return res.status(200).json(token);
};

module.exports = login;