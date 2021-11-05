import axios from 'axios';
require('dotenv').config();

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL
});

export const registerUser = (userData) => 
  api.post( '/user', userData)
    .then(({ data, status }) => ({ data, status }))
    .catch(({response: { data, status }}) => ({ data, status }));