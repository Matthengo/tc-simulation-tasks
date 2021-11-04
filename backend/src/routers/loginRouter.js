const express = require('express');

const loginControllers = require('../controllers/loginControllers');
const middlewareError = require('../middlewares/error');

const router = express.Router();

router
  .post('/', loginControllers.login);

router.use(middlewareError);

module.exports = router;