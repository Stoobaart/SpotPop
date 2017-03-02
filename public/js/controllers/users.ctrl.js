angular
	.module('SpotPop')
	.controller('UsersController', UsersController)

function UsersController (User, $stateParams, $state, Auth) {
	var self = this;

	// self.email = {}

	self.getUser = function () {

		var uid = Auth.$getAuth().uid

		User.get(uid)
			.then(function(res) {
				console.log(res)
				self.tagName = res.data.user.tagName
			})
			.catch(function (err) {
				console.log(err)
			})
	}

}