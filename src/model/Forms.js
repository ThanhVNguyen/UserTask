const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  components: [{
    componentInfo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Component',
    },
    grid: {
      x: {
        type: Number,
        required: true,
      },
      y: {
        type: Number,
        required: true,
      },
      w: {
        type: Number,
        required: true,
      },
      h: {
        type: Number,
        required: true,
      },
    },
  }],
},
{
  collection: 'Forms',
});
module.exports = mongoose.model('Form', FormSchema);
