const express = require('express');

const router = express.Router();

const component = require('../controller/component');

router.post('/create', component.createComponent);
router.get('/getList', component.getListComponent);
router.patch('/update/:id', component.updateComponent);
router.delete('/delete/:id', component.deleteComponent);
router.get('/retrieve/:id', component.retrieveComponent);

module.exports = router;
