const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');
const connectDB = require('./db/connection');
require('dotenv').config();

// middleware
app.use(express.json());
app.use(express.static('./public'));

// routes
app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandler);
const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('Connection to MongoDB was successfully established');
    app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
