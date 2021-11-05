const express = require('express');

const taskControllers = require('../controllers/taskControllers');
const middlewareError = require('../middlewares/error');

const JWTValidation = require('../middlewares/JWTValidation');
const checkUserAuthorization = require('../middlewares/checkUserAuthorization')

const router = express.Router();

router
  .post('/', JWTValidation, taskControllers.createTask)
  .get('/', JWTValidation, taskControllers.getAllUserTasks)
  .put('/:id', JWTValidation, checkUserAuthorization, taskControllers.updateTask)
  .delete('/:id', JWTValidation, checkUserAuthorization, taskControllers.deleteTask);

router.use(middlewareError);

module.exports = router;