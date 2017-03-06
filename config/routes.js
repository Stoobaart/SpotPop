var express = require('express');
var router = express.Router();

var spotsController = require('../controllers/spots');
var usersController = require('../controllers/users');


// ========================USERS===========================
router.route('/users')
	.get(usersController.index)
  .post(usersController.create);

router.route('/users/:id')
  .get(usersController.show)
  .put(usersController.edit)
  .patch(usersController.friend)
  .delete(usersController.delete);
// ========================================================


// ========================SPOTS===========================
router.route('/spots')
  .get(spotsController.index)
  .post(spotsController.create);

router.route('spots/:id')
  .get(spotsController.show)
  .put(spotsController.update)
  .delete(spotsController.delete);

router.get('spots/:id/edit', spotsController.edit);

// ========================================================


// customs routes

router.route('/my-spots/:uid')
  .get(spotsController.getMySpots)

module.exports = router;