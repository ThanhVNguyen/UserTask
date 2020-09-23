const express = require('express');

const router = express.Router();

const component = require('../controller/component');

router.post('/', component.createComponent);
router.get('/', component.getListComponent);
router.patch('/:id', component.updateComponent);
router.delete('/:id', component.deleteComponent);
router.get('/:id', component.retrieveComponent);

module.exports = router;
