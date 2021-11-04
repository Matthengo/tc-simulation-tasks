const express = require('express');

const taskControllers = require('../controllers/taskControllers');
const middlewareError = require('../middlewares/error');

const router = express.Router();

router
  .post('/', taskControllers.createTask);

router.use(middlewareError);

module.exports = router;