angular
	.module('SpotPop')
	.controller('authenticationController', authenticationController)

function authenticationController (Auth, User, $state) {
	var self = this

	self.createUser = function() {
		Auth.$createUserWithEmailAndPassword(self.email, self.password)
		.then(function(user) {
			console.log(user)

			User.create({
				uid: user.uid,
				tagName: self.tagName
			}, function (user, err) {
				self.err = err.err
				resetCredentials()
			})

			// User.createUser(user.$uid)
			// 	.then(function (user) {
			// 		console.log(user.uid)
			// 		$state.go('spots')
			// 	})
			// 	.catch(function (error) {
			// 		self.error = error
			// 	})
			
		}).catch(function(error) {
			self.error = error
		})
	}

	self.signOut = function() {
		Auth.$signOut()
		$state.go('home')
	}

	self.signIn = function() {
		Auth.$signInWithEmailAndPassword(self.email, self.password)
			.then(function(user) {
				$state.go('spots')
				resetCredentials()
			})
			.catch(function(error) {
				self.error = error
			})
	}

	Auth.$onAuthStateChanged(function(user) {
		console.log(user)
		self.user = user
	})

	function resetCredentials () {
		self.tagName = ""
		self.email = ""
		self.password = ""
	}
}