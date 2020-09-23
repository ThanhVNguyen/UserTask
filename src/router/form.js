const express = require('express');

const router = express.Router();

const form = require('../controller/form');

router.post('/', form.createForm);
router.get('/', form.getListForm);
router.patch('/:id', form.updateForm);
router.delete('/:id', form.deleteForm);
router.get('/:id', form.retrieveForm);

module.exports = router;
