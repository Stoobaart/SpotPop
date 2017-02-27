var express = require('express');
var router = express.Router();

var spotsController = require('../controllers/spots');
var usersController = require('../controllers/users');

// ========================USERS===========================
router.route('/users')
  .post(usersController.create);

router.get('/users/new', usersController.new);

router.route('/users/:id')
  .get(usersController.show)
  .put(usersController.edit)
  .delete(usersController.delete);
// ========================================================


// ========================SPOTS===========================
router.route('/')
  .get(spotsController.index)
  .post(spotsController.create);

router.get('/new', spotsController.new);

router.route('/:id')
  .get(spotsController.show)
  .put(spotsController.update)
  .delete(spotsController.delete);

router.get('/:id/edit', spotsController.edit);

// ========================================================





module.exports = router;