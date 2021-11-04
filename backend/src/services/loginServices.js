const Users = require('../models/Users')

const { hasCorrectPassword } = require('../validation/loginValidation')
const { INCORRECT_DATA } = require('../helpers/errorObjects');
const { dataIsRequired } = require('../helpers/errorFunctions');

const login = async (userData) => {
  const { email, password } = userData;

  if(!email) return dataIsRequired('email');
  if(!password) return dataIsRequired('password');

  const userFound = await Users.getUser(email);
  if (!userFound) return INCORRECT_DATA;

  if(!hasCorrectPassword(userFound.password, password)) return INCORRECT_DATA;

  return { ...userFound };
}

module.exports = { login }