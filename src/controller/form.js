const Form = require('../model/Forms');

const createForm = async (req, res) => {
  try {
    const form = await new Form(req.body).save();
    res.status(201).json({
      message: 'create success!',
      data: form,
    });
  } catch (e) {
    res.status(400).json({
      error: e.toString(),
      message: 'Create not success!',
    });
  }
};

const getListForm = async (req, res) => {
  try {
    const form = await Form.find().limit(parseInt(req.query.limit, 10))
      .skip(parseInt(req.query.skip, 10))
      .populate({ path: 'component.componentInfo' });
    res.status(201).json({
      message: 'get success!',
      data: form,
    });
  } catch (e) {
    res.status(404).json({
      error: e.toString(),
      message: 'retrieve not success!',
    });
  }
};

const updateForm = async (req, res) => {
  try {
    const form = await Form.findOneAndUpdate({ _id: req.params.id },
      { $set: req.body }, { new: true });
    res.status(201).json({
      message: 'update success!',
      data: form,
    });
  } catch (e) {
    res.status(404).json({
      error: e.toString(),
      message: 'update not success!',
    });
  }
};

const deleteForm = async (req, res) => {
  try {
    const form = await Form.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: 'delete success!',
      data: form,
    });
  } catch (e) {
    res.status(404).json({
      error: e.toString(),
      message: 'delete not success!',
    });
  }
};

const retrieveForm = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id).limit(parseInt(req.query.limit, 10))
      .skip(parseInt(req.query.skip, 10))
      .populate({ path: 'component.componentInfo' });
    res.status(201).json({
      message: 'retrieve success!',
      data: form,
    });
  } catch (e) {
    res.status(404).json({
      error: e.toString(),
      message: 'retrieve not success!',
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
