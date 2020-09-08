const express = require('express');
const TodoController = require('../controllers/TodoController');
const router = express.Router();

router.get('/', TodoController.index);
router.post('/', TodoController.new);
router.put('/:id', TodoController.update);
router.delete('/:id', TodoController.delete);
router.get('/:id', TodoController.getById);

module.exports.router = router;