const UserTask = require('../models/UserTasks');
const { reformatUserTasks } = require('../helpers/reformatUserTasks');

const createUserTask = async (req, res) => {
  try {
    const userTask = await new UserTask(req.body).save();
    res.status(200).json({
      message: 'Create success!',
      data: userTask,
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

const getListUserTask = async (req, res) => {
  try {
    const userTask = await UserTask.find().limit(parseInt(req.query.limit, 10))
      .skip(parseInt(req.query.skip, 10))
      .populate({ path: 'form' })
      .populate({ path: 'form.components.component' })
      .populate({ path: 'values.component' })
      .lean();
    res.status(200).json({
      message: 'get success!',
      data: reformatUserTasks(userTask),
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

const updateUserTask = async (req, res) => {
  try {
    const userTask = await UserTask.findOneAndUpdate({ _id: req.params.id },
      { $set: req.body }, { new: true });
    res.status(200).json({
      message: 'update success!',
      data: userTask,
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

const deleteUserTask = async (req, res) => {
  try {
    const userTask = await UserTask.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: 'delete success!',
      data: userTask,
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

const retrieveUserTask = async (req, res) => {
  try {
    const userTask = await UserTask.findById(req.params.id).limit(parseInt(req.query.limit, 10))
      .skip(parseInt(req.query.skip, 10))
      .populate({ path: 'form' })
      .populate({ path: 'values.component' })
      .lean();
    res.status(200).json({
      message: 'get success!',
      data: reformatUserTasks([userTask]),
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
  createUserTask,
  getListUserTask,
  updateUserTask,
  deleteUserTask,
  retrieveUserTask,
};
