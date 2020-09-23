const Form = require('../model/Forms');

const createForm = async (req, res) => {
  try {
    const form = await new Form(req.body).save();
    res.status(200).json({
      message: 'create success!',
      data: form,
      status: 201,
    });
  } catch (e) {
    res.status(200).json({
      error: e.toString(),
      message: 'Create not success!',
      status: 500,
    });
  }
};

const getListForm = async (req, res) => {
  try {
    const form = await Form.find().limit(parseInt(req.query.limit, 10))
      .skip(parseInt(req.query.skip, 10))
      .populate({ path: 'components.component' });
    res.status(200).json({
      message: 'get success!',
      data: form,
      status: 200,
    });
  } catch (e) {
    res.status(200).json({
      error: e.toString(),
      message: 'retrieve not success!',
      status: 500,
    });
  }
};

const updateForm = async (req, res) => {
  try {
    const form = await Form.findOneAndUpdate({ _id: req.params.id },
      { $set: req.body }, { new: true });
    res.status(200).json({
      message: 'update success!',
      data: form,
      status: 202,
    });
  } catch (e) {
    res.status(200).json({
      error: e.toString(),
      message: 'update not success!',
      status: 500,
    });
  }
};

const deleteForm = async (req, res) => {
  try {
    const form = await Form.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: 'delete success!',
      data: form,
      status: 204,
    });
  } catch (e) {
    res.status(200).json({
      error: e.toString(),
      message: 'delete not success!',
      status: 500,
    });
  }
};

const retrieveForm = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id).limit(parseInt(req.query.limit, 10))
      .skip(parseInt(req.query.skip, 10))
      .populate({ path: 'components.component' });
    res.status(200).json({
      message: 'retrieve success!',
      data: form,
      status: 200,
    });
  } catch (e) {
    res.status(200).json({
      error: e.toString(),
      message: 'retrieve not success!',
      status: 500,
    });
  }
};
module.exports = {
  createForm,
  getListForm,
  updateForm,
  deleteForm,
  retrieveForm,
};
