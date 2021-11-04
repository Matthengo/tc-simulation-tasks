const Tasks = require('../models/Tasks');
const { dataIsRequired } = require('../helpers/errorFunctions');

const createTask = async (taskData) => {
  const { taskName } = taskData;
  if(!taskName) return dataIsRequired('taskName');

  const { insertedId } = await Tasks.createTask(taskData);
  // TODO
  // const foundTask = await Tasks.getTaskById(insertedId);
  // Change to foundTask
  return { ...taskData };
}

module.exports = {
  createTask,
}