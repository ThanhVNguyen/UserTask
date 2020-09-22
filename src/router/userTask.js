const express = require('express');

const router = express.Router();

const userTask = require('../controller/userTask');

router.post('/create', userTask.createUserTask);
router.get('/getList', userTask.getListUserTask);
router.patch('/update/:id', userTask.updateUserTask);
router.delete('/delete/:id', userTask.deleteUserTask);
router.get('/retrieve', userTask.retrieveUserTask);

module.exports = router;
