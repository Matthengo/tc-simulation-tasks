const connection = require('../db/connection');
const { ObjectId } = require('mongodb');

const createTask = (taskData) => {
  const date = new Date();
  return connection().then((db) => db.collection('tasks').insertOne({
    ...taskData,
    timestamp: {
      created: date,
      updated: date,
    }
  }));
};

const getTaskById = (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  return connection()
    .then((db) => db.collection('tasks').findOne(new ObjectId(id)));
}

module.exports = {
  createTask,
  getTaskById,
}