const mongoose = require('mongoose');

const ComponentSchema = new mongoose.Schema({
  fieldName: {
    type: String,
    required: true,
  },
  cssValue: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    enum: ['input', 'text_area', 'option', 'checkbox', 'button'],
    required: true,
  },
},
{
  collection: 'Components',
});
module.exports = mongoose.model('Component', ComponentSchema);
