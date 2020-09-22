const UserTask = require('../model/UserTasks');

const createUserTask = async (req, res) => {
  try {
    const userTask = await new UserTask(req.body).save();
    res.status(201).json({
      message: 'Create success!',
      data: userTask,
    });
  } catch (e) {
    res.status(400).json({
      error: e.toString(),
      message: 'Create not success!',
    });
  }
};

const getListUserTask = async (req, res) => {
  try {
    const userTask = await UserTask.find().limit(parseInt(req.query.limit, 10))
      .skip(parseInt(req.query.skip, 10))
      .populate({ path: 'form' })
      .populate({ path: 'values.componentInfo' });
    res.status(201).json({
      message: 'get success!',
      data: userTask,
    });
  } catch (e) {
    res.status(404).json({
      error: e.toString(),
      message: 'retrieve not success!',
    });
  }
};

const updateUserTask = async (req, res) => {
  try {
    const userTask = await UserTask.findOneAndUpdate({ _id: req.params.id },
      { $set: req.body }, { new: true });
    res.status(201).json({
      message: 'update success!',
      data: userTask,
    });
  } catch (e) {
    res.status(404).json({
      error: e.toString(),
      message: 'update not success!',
    });
  }
};

const deleteUserTask = async (req, res) => {
  try {
    const userTask = await UserTask.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: 'delete success!',
      data: userTask,
    });
  } catch (e) {
    res.status(404).json({
      error: e.toString(),
      message: 'delete not success!',
    });
  }
};

const retrieveUserTask = async (req, res) => {
  try {
    const userTask = await UserTask.find(req.params.id).limit(parseInt(req.query.limit, 10))
      .skip(parseInt(req.query.skip, 10))
      .populate({ path: 'form' })
      .populate({ path: 'values.componentInfo' });
    res.status(201).json({
      message: 'get success!',
      data: userTask,
    });
  } catch (e) {
    res.status(404).json({
      error: e.toString(),
      message: 'retrieve not success!',
    });
  }
};

module.exports = {
  createUserTask,
  getListUserTask,
  updateUserTask,
  deleteUserTask,
  retrieveUserTask,
};
