const Tasks = require('../models/Tasks');
const { dataIsRequired } = require('../helpers/errorFunctions');

const createTask = async (taskData) => {
  const { taskName } = taskData;
  if(!taskName) return dataIsRequired('taskName');

  const { insertedId } = await Tasks.createTask(taskData);
  const foundTask = await Tasks.getTaskById(insertedId);
  
  return { ...foundTask };
}

module.exports = {
  createTask,
}