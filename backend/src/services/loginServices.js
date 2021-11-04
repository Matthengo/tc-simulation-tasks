const Users = require('../models/Users')

const { hasCorrectPassword } = require('../validation/loginValidation')
const { INCORRECT_DATA } = require('../helpers/errorObjects');

const login = async (userData) => {
  const { email, password } = userData;

  const userFound = await Users.getUser(email);
  if (!userFound) return INCORRECT_DATA;

  if(!hasCorrectPassword(userFound.password, password)) return INCORRECT_DATA;

  return { message: 'Logging In' };
}