const mongoose = require('mongoose');

const UserTaskSchema = mongoose.Schema({
  activityId: {
    type: String,
    require: true,
  },
  definitionId: {
    type: String,
    required: true,
  },
  form: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Form',
  },
  values: [{
    componentInfo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Component',
    },
    value: {
      type: String,
      required: true,
    },
  }],
},
{
  collection: 'UserTasks',
});

module.exports = mongoose.model('UserTask', UserTaskSchema);
