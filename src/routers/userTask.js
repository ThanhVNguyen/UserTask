const express = require('express');

const router = express.Router();

const userTask = require('../controllers/userTask');

router.post('/', userTask.createUserTask);
router.get('/', userTask.getListUserTask);
router.patch('/:id', userTask.updateUserTask);
router.delete('/:id', userTask.deleteUserTask);
router.get('/:id', userTask.retrieveUserTask);

module.exports = router;
