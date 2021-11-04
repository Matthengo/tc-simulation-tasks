const dataIsRequired = (data) => {
  return {
    error: {
      status: 400,
      message: `"${data}" is required`,
    },
  };
};

const dataLengthMustBe = (data, length) => {
  return {
    error: {
      status: 400,
      message: `"${data}" length must be ${length} characters long`,
    },
  };
};

module.exports = {
  dataIsRequired,
  dataLengthMustBe,
};