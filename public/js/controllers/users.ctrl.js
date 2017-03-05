angular
	.module('SpotPop')
	.controller('UsersController', UsersController)

function UsersController (User, $stateParams, $state, Auth, $http) {
	var self = this;

	self.allUsers = []

	self.getUser = function () {
		var uid = Auth.$getAuth().uid
		User.get(uid)
			.then(function(res) {
				self.tagName = res.data.user.tagName
			})
			.catch(function (err) {
				console.log(err)
			})
	}

	self.showAllUsers = function() {
		User.getAll()
		.then(function(res) {
			self.allUsers = res.data.users
		})
		.catch(function(err) {
			console.log(err)
		})
	}

	self.addFriend = function(oneUser) {
		var uid = Auth.$getAuth().uid
		User.get(uid)
			.then(function(res) {
		 		console.log(res)
				res.data.user.friends.push({
						tagName: oneUser.tagName,
						uid: oneUser.uid,
						spot: oneUser.spot,
						friends: oneUser.friends
				})
		 	})
			.then(function() {
				User.update()
				self.oneUser = {}
			})
			.catch(function(err) {
				console.log(err)
			})
	}
	// 	User.update({
	// 		uid: Auth.$getAuth().uid,
	// 		friends: {
	// 			tagName: oneUser.tagName,
	// 			uid: oneUser.uid,
	// 			spot: oneUser.spot,
	// 			friends: oneUser.friends
	// 		}
	// 	})



}