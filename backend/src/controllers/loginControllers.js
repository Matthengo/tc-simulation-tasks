const jwt = require('jsonwebtoken');
require('dotenv')

const loginServices = require('../services/loginServices');

const login = async (req, res, next) => {
  try {
    const userFound = await loginServices.login(req.body);
    if(userFound.error) return next(userFound.error);

    const jwtConfig = {
      expiresIn: '12h',
      algorithm: 'HS256',
    };
  
    const token = jwt.sign({ data: userFound }, process.env.JWT_SECRET, jwtConfig);

    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    next(500);
  }
}

module.exports = {
  login
}