const express = require('express');

const userControllers = require('../controllers/userControllers');
const middlewareError = require('../middlewares/error');

const router = express.Router();

router
  .post('/', userControllers.createUser);

router.use(middlewareError);

module.exports = router;