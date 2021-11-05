const Tasks = require('../models/Tasks');
const { dataIsRequired } = require('../helpers/errorFunctions');

const createTask = async (taskData) => {
  const { taskName } = taskData;
  if(!taskName) return dataIsRequired('taskName');

  const { insertedId } = await Tasks.createTask(taskData);
  const foundTask = await Tasks.getTaskById(insertedId);

  return { ...foundTask };
}

const updateTask = async (taskData) => {
  const { taskName } = taskData;
  if(!taskName) return dataIsRequired('taskName');

  await Tasks.updateTask(taskData);

  return { message: 'Task updated' };
}

const deleteTask = async (id) => {
  await Tasks.deleteTask(id);
}

const getAllUserTasks = async (userId) => {
  const allTasks = await Tasks.getAllUserTasks(userId);
  return allTasks
}

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  getAllUserTasks,
}