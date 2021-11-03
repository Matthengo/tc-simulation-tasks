const { dataIsRequired, dataLengthMustBe } = require('../helpers/errorFunctions')
const { EMAIL_MUST_VALID } = require('../helpers/errorObjects')

const validateEmail = (email) => {
  if (!email) return dataIsRequired('email')

  const emailRegex = new RegExp(/^[\w.]+@[a-z]+.\w{2,3}$/g);
  if (!emailRegex.test(email)) return EMAIL_MUST_VALID;
};

const validatePassword = (password) => {
  if (!password) return dataIsRequired('password');
  
  const PASSWORD_LENGTH = 6;
  if (password.length < PASSWORD_LENGTH) return dataLengthMustBe('password', PASSWORD_LENGTH);
}

const validateName = (name) => {
  if(!name) return dataIsRequired('name');

  const NAME_LENGTH = 3;
  if(name < NAME_LENGTH) return dataLengthMustBe('name', NAME_LENGTH);
}

module.exports = {
  validateEmail,
  validateName,
  validatePassword,
}