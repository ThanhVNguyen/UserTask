const mongoose = require('mongoose');

const userTaskFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  definitionId: {
    type: String,
    required: true,
  },
  activityId: {
    type: String,
    required: true,
  },
  form: [
    {
      fieldName: {
        type: String,
        required: true,
      },
      cssValue: {
        type: String,
        required: true,
      },
      defaultValue: [{
        type: String,
        required: true,
      },
      ],
      type: {
        type: String,
        enum: ['input', 'text_area', 'option', 'checkbox', 'button'],
        required: true,
      },
    },
  ],
},
{
  collection: 'UserTaskForms',
  timestamps: true,
});
module.exports = mongoose.model('UserTaskForm', userTaskFormSchema);
