const userServices = require('../services/userServices');

const createUser = async (req, res, next) => {
  try {
    const { username, email, error } = await userServices.createUser(req.body);
    if(error) next(error);
    res.status(201).json({ username, email })
  } catch (error) {
    console.log(error);
    next(500);
  }
};

module.exports = {
  createUser,
};