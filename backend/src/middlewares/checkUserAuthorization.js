const Tasks = require('../models/Tasks');
const { TASK_NOT_FOUND } = require('../helpers/errorObjects');

module.exports = async (req, res, next) => {
  const {
    user: { _id: tokenUserId },
    params: { id: paramsId },
  } = req;

  const foundTask = await Tasks.getTaskById(paramsId);
  if (!foundTask) next(TASK_NOT_FOUND.error);

  if (!tokenUserId.equals(foundTask.userId)) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  next();
};