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

const updateTask = async (req, res, next) => {
  try {
    const taskData = {
      ...req.body,
      ...req.params,
    };

    const updatedTask = await taskServices.updateTask(taskData);
    if(updatedTask.error) return next(updatedTask.error);

    res.status(200).json(updatedTask);
  } catch (error) {
    console.log(error);
    next(500);
  }
}

const deleteTask = async (req, res, next) => {
  try {
    await taskServices.deleteTask(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.log(error);
    next(500);
  }
}

const getAllUserTasks = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const allTasks = await taskServices.getAllUserTasks(_id);
    res.status(200).json(allTasks);
  } catch (error) {
    console.log(error);
    next(500)
  }
}

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  getAllUserTasks,
}