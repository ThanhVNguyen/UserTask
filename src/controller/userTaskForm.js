const UserTaskForm = require('../model/UserTaskForms');

const createUserTask = async (req, res) => {
  try {
    const userTask = await new UserTaskForm(req.body).save();
    res.status(201).json({
      message: 'create success!',
      data: userTask,
    });
  } catch (e) {
    res.status(400).json({
      error: e.toString(),
      message: 'create not success!',
    });
  }
};

const retrieveUserTask = async (req, res) => {
  try {
    const userTaskForm = await UserTaskForm.find().limit(parseInt(req.query.limit, 10))
      .skip(parseInt(req.query.skip, 10));
    res.status(201).json({
      message: 'retrieve success!',
      data: userTaskForm,
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
    const userTaskForm = await UserTaskForm.findOneAndUpdate({ _id: req.params.id },
      { $set: req.body }, { new: true });
    res.status(201).json({
      message: 'update success!',
      data: userTaskForm,
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
    const userTaskForm = await UserTaskForm.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: 'delete success!',
      data: userTaskForm,
    });
  } catch (e) {
    res.status(404).json({
      error: e.toString(),
      message: 'delete not success!',
    });
  }
};

module.exports = {
  createUserTask,
  retrieveUserTask,
  updateUserTask,
  deleteUserTask,
};
