const jwt = require('jsonwebtoken');
const Users = require('../models/Users');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'missing auth token' });

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    const user = await Users.getUser(decode.data.email);

    if (!user) return res.status(401).json({ message: 'Token\'s user not found' });

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
};