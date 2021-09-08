const express = require('express');
const notes = require('./data/notes');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const app = express();
dotenv.config();

connectDB();

app.get('/', (req, res) => {
  res.send('api is running..');
});

app.get('/api/data', (req, res) => {
  res.json(notes);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server start on PORT ${PORT}`));
