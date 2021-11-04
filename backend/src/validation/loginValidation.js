const hasCorrectPassword = (userPassword, inputedPassword) => 
  ( userPassword === inputedPassword ) ? true : false;

module.exports = { hasCorrectPassword };