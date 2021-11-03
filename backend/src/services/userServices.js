const Users = require('../models/Users');
const {
  validateEmail,
  validatePassword,
  validateName,
} = require('../validation/userValidation');

const createUser = (userData) => {
  const { username, password, email } = userData;

  const invalidEmail = validateEmail(email);
  if (invalidEmail.error) return invalidEmail;

  const invalidPassword = validatePassword(password);
  if (invalidPassword.error) return invalidPassword;

  const invalidName = validateName(username);
  if(invalidName.error) return invalidName;

  const newUser = Users.createUser(userData);
  return { newUser };
};

module.exports = {
  createUser,
}