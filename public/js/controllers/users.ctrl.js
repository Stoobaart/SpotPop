angular
	.module('SpotPop')
	.controller('UsersController', UsersController)

function UsersController (User, $stateParams, $state, Auth, $http) {
	var self = this;

	self.allUsers = []
	self.friendsIds = []

	self.getUser = function () {
		var uid = Auth.$getAuth().uid
		User.get(uid)
			.then(function(res) {
				self.friendsIds = res.data.user.friends.filter(function (friend) { return true })
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
		User.friend(Auth.$getAuth().uid, {
			id: oneUser._id
		}).then(function(res) {
			self.oneUser = {}
			$state.reload()
		})
		.catch(function(err) {
			console.log(err)
		})
	}

	self.isFriend = function (personID) {
		return self.friendsIds.indexOf(personID) !== -1
	}

}