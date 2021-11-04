const Tasks = require('../models/Tasks');
const { dataIsRequired } = require('../helpers/errorFunctions');
const { TASK_NOT_FOUND } = require('../helpers/errorObjects')

const createTask = async (taskData) => {
  const { taskName } = taskData;
  if(!taskName) return dataIsRequired('taskName');

  const { insertedId } = await Tasks.createTask(taskData);
  const foundTask = await Tasks.getTaskById(insertedId);

  return { ...foundTask };
}

const updateTask = async (taskData) => {
  const { id, taskName } = taskData;
  if(!taskName) return dataIsRequired('taskName');

  const foundTask = await Tasks.getTaskById(id);
  if(!foundTask) return TASK_NOT_FOUND;

  await Tasks.updateTask(taskData);

  return { message: 'Task updated' };
}

module.exports = {
  createTask,
  updateTask,
}