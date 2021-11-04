const express = require('express');
const connection = require('../db/connection');
require('dotenv').config();

const userRouter = require('../routers/userRouter');

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`Connected to port: ${PORT}`);
  connection();
})
