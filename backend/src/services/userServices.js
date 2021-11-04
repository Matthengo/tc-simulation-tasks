const Users = require('../models/Users');
const {
  validateEmail,
  validatePassword,
  validateName,
} = require('../validation/userValidation');

const createUser = async (userData) => {
  const { username, password, email } = userData;

  const invalidEmail = validateEmail(email);
  if (invalidEmail.error) return invalidEmail;

  const invalidName = validateName(username);
  if(invalidName.error) return invalidName;

  const invalidPassword = validatePassword(password);
  if (invalidPassword.error) return invalidPassword;

  const newUser = await Users.createUser(userData);

  return { };
};

module.exports = {
  createUser,
}