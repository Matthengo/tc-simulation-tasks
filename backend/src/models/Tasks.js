const connection = require('../db/connection');
const { ObjectId } = require('mongodb');

const createTask = (taskData) => {
  const date = new Date();
  return connection().then((db) => db.collection('tasks').insertOne({
    ...taskData,
    createdAt: date,
    updatedAt: date,
    }
  ));
};

const getTaskById = (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  return connection()
    .then((db) => db.collection('tasks').findOne(new ObjectId(id)));
}

const updateTask = (taskData) => {
  const date = new Date();
  const { id, taskName } = taskData;
  return connection().then((db) => db.collection('tasks').updateOne(
    { _id:  ObjectId(id)},
    {
      $set: {
        taskName,
        updatedAt: date,
      },
    },
  ));
}

const deleteTask = (id) => 
  connection()
    .then((db) => db.collection('tasks').deleteOne(
      { _id: ObjectId(id) },
    ));

const getAllUserTasks = (userId) =>
  connection()
    .then((db) => db.collection('tasks').find({ userId: ObjectId(userId) }).toArray());
  
module.exports = {
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
  getAllUserTasks,
}