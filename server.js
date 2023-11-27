// server.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import superUserModel from './server/models/superUserModel.js';
import clientModel from './server/models/clientModel.js';
import consultantModel from './server/models/consultantModel.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/meetual-projectDB').then(() => {
  console.log('Connected to MongoDB');
}).then(() => {
  console.log('Server is running at http://localhost:3000');
})

app.get('/super-user', async (req, res) => {
  try {
    const response = await superUserModel.find();
    console.log(response);
    res.json(response);
  } catch (error) {
    console.error(error);
  }
});

app.post("/register-client", async (req, res) => {
  try {
    console.log(req.body);
    const response = await clientModel.create(req.body);
    console.log(response);
    res.json(response);
  } catch (error) {
    console.error(error);
  }
})

app.post("/register-consultant", async (req, res) => {
  try {
    console.log(req.body);
    const response = await consultantModel.create(req.body);
    console.log(response);
    res.json(response);
  } catch (error) {
    console.error(error);
  }
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
