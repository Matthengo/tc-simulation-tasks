const express = require('express');
const connection = require('../db/connection');
require('dotenv').config();

const userRouter = require('../routers/userRouter');
const loginRouter = require('../routers/loginRouter');
const taskRouter = require('../routers/taskRouter');

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/task', taskRouter);

app.listen(PORT, () => {
  console.log(`Connected to port: ${PORT}`);
  connection();
})
