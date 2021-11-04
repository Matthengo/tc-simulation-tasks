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

const INCORRECT_DATA = {
  error: {
    status: 401,
    message: 'Wrong username or email'
  }
}

const TASK_NOT_FOUND = {
  error: {
    status: 404,
    message: 'Task not found'
  }
}
module.exports = {
  EMAIL_MUST_VALID,
  EMAIL_MUST_UNIQUE,
  INCORRECT_DATA,
  TASK_NOT_FOUND,
};