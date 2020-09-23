const express = require('express');
const mongoose = require('mongoose');
const bodyParer = require('body-parser');
const routes = require('./src/router');

const app = express();
app.use(bodyParer.json());
app.use('/component', routes.component);
app.use('/userTask', routes.userTask);
app.use('/form', routes.form);

const mongodb = 'mongodb://localhost:27017/UserTaskForm';
mongoose.connect(mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(8000, () => {
  process.stdout.write('Sever running is 8000:');
});
