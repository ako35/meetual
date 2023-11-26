// server.js
import express from 'express';
import cors from 'cors';
import mongoose  from 'mongoose';
import superUserModel from './server/models/superUserModel.js';

// const express = require('express');
const app = express();
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/meetual-projectDB').then(() => {
  console.log('Connected to MongoDB');
}).then(() => {
  console.log('Server is running at http://localhost:3000');
})

app.use(cors());

app.get('/super-user', async (req, res) => {
  
  try{
    const response = await superUserModel.find();
    console.log(response);
    res.send(response);
    // if (response.length === 0) {
    //   res.send('Hello from Express in Vite!');
    // }
  } catch (error) {
    console.error(error);
  }
});

app.get('/restaurants', async (req, res) => {
  try{
    const response = await restaurantModel.find();
    console.log(response);
    res.send(response);
  } catch (error) {
    console.error(error);
  }
})

// Diğer Express rotalarını burada tanımlayabilirsiniz...

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
