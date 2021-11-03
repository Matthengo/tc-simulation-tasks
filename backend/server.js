const express = require('express');
const connection = require('./db/connection');
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Connected to port: ${PORT}`);
  connection();
})