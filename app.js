const express = require('express');
const mongoose = require('mongoose');
const bodyParer = require('body-parser');
const routes = require('./src/router');
const mongodbConfigs = require('./configs/mongodb');
const serverConfigs = require('./configs/server');

const app = express();
app.use(bodyParer.json());
app.use('/component', routes.component);
app.use('/userTask', routes.userTask);
app.use('/form', routes.form);

mongoose.connect(mongodbConfigs.CONNECTION_STR, mongodbConfigs.OPTIONS, (err) => {
  if (err) return process.stdout.write(`Mongodb server is down due to: ${err}\n`);
  return process.stdout.write(`Mongodb server #${mongodbConfigs.CONNECTION_STR} is connected\n`);
});

app.listen(serverConfigs.PORT, () => {
  process.stdout.write('Sever running on port 8000\n');
});
