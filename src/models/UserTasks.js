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
    component: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Component',
    },
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  }],
},
{
  collection: 'UserTasks',
});
UserTaskSchema.index({ activityId: 1, definitionId: 1 }, { unique: true });
module.exports = mongoose.model('UserTask', UserTaskSchema);
