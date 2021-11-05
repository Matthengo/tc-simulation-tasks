const userServices = require('../services/userServices');

const createUser = async (req, res, next) => {
  try {
    const { error } = await userServices.createUser(req.body);
    if(error) return next(error);
    res.status(201).json({})
  } catch (error) {
    console.log(error);
    next(500);
  }
};

module.exports = {
  createUser,
};