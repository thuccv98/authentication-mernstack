const express = require('express');
const notes = require('./data/notes');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRouter = require('./routers/userRouter');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const app = express();
dotenv.config();

connectDB();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('api is running..');
});

app.get('/api/data', (req, res) => {
  res.json(notes);
});

app.use('/api/users', userRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server start on PORT ${PORT}`));
