const express = require('express');

const router = express.Router();

const userTaskForm = require('../controller/userTaskForm');

router.post('/create', userTaskForm.createUserTask);
router.get('/retrieve', userTaskForm.retrieveUserTask);
router.put('/update/:id', userTaskForm.updateUserTask);
router.delete('/delete/:id', userTaskForm.deleteUserTask);

module.exports = router;
