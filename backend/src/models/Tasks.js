const connection = require('../db/connection');

const createTask = (taskData) => {
  const date = new Date();
  connection().then((db) => db.collection('tasks').insertOne({
    ...taskData,
    timestamp: {
      created: date,
      updated: date,
    }
  }));
};

module.exports = {
  createTask,
}