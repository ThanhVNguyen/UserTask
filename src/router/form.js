const express = require('express');

const router = express.Router();

const form = require('../controller/form');

router.post('/create', form.createForm);
router.get('/getList', form.getListForm);
router.patch('/update/:id', form.updateForm);
router.delete('/delete/:id', form.deleteForm);
router.get('/retrieve/:id', form.retrieveForm);

module.exports = router;
