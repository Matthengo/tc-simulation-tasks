const connection = require('../db/connection');

const createUser = (userData) => 
  connection()
    .then((db) => db.collection('users').insertOne({ ...userData }));


module.exports = {
  createUser,
};