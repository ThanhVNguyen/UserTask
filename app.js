const express = require('express');
const mongoose = require('mongoose');
const bodyParer = require('body-parser');
const routes = require('./src/router');

const app = express();
app.use(bodyParer.json());
app.use('/userTaskForm', routes.userTaskForm);

const mongodb = 'mongodb://localhost:27017/UserTaskForm';
mongoose.connect(mongodb, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false,
},
() => {
});

app.listen(8000, () => {
  console.log('Sever running is 8000:');
});
