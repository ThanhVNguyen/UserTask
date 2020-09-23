const Component = require('../model/Components');

const createComponent = async (req, res) => {
  try {
    const component = await new Component(req.body).save();
    res.status(200).json({
      message: 'Create success!',
      data: component,
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

const getListComponent = async (req, res) => {
  try {
    const component = await Component.find().limit(parseInt(req.query.limit, 10))
      .skip(parseInt(req.query.skip, 10));
    res.status(200).json({
      message: 'get success!',
      data: component,
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

const updateComponent = async (req, res) => {
  try {
    const component = await Component.findOneAndUpdate({ _id: req.params.id },
      { $set: req.body }, { new: true });
    res.status(200).json({
      message: 'update success!',
      data: component,
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

const deleteComponent = async (req, res) => {
  try {
    const component = await Component.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: 'delete success!',
      data: component,
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

const retrieveComponent = async (req, res) => {
  try {
    const component = await Component.findById(req.params.id).limit(parseInt(req.query.limit, 10))
      .skip(parseInt(req.query.skip, 10));
    res.status(200).json({
      message: 'retrieve success!',
      data: component,
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
  createComponent,
  getListComponent,
  updateComponent,
  deleteComponent,
  retrieveComponent,
};
