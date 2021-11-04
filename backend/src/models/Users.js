const connection = require('../db/connection');

const createUser = (userData) => 
  connection().then((db) => db.collection('users').insertOne({ ...userData }));

const getUser = (userEmail) =>
  connection().then((db) => db.collection('users').findOne({ email: userEmail }));

module.exports = {
  createUser,
  getUser,
};