const EMAIL_MUST_VALID = {
  error: {
    status: 400,
    message: '"email" must be valid'
  }
};

const EMAIL_MUST_UNIQUE = {
  error: {
    status: 409,
    message: 'Email already registered'
  }
}

module.exports = {
  EMAIL_MUST_VALID,
  EMAIL_MUST_UNIQUE,
};