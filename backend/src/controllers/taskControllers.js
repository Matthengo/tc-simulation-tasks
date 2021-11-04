const taskServices = require('../services/taskServices');

const createTask = async (req, res, next) => {
  try {
    const TASK_STATUS = 'pending';
    const taskData = req.body;
    const { _id } = req.user;

    taskData.status = TASK_STATUS;
    taskData.userId = _id;

    const newTask = await taskServices.createTask(taskData);
    if(newTask.error) return next(newTask.error);

    res.status(201).json(newTask);

  } catch (error) {
    console.log(error);
    next(500)
  }
}

module.exports = {
  createTask,
}