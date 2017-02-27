angular
	.module('SpotPop')
	.controller('authenticationController', authenticationController)

function authenticationController (Auth, $state) {
	var self = this

	self.createUser = function() {
		Auth.$createUserWithEmailAndPassword(self.email, self.password)
		.then(function(user) {
			resetCredentials()
			console.log(user)
			$state.go('spots')
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
		self.email = ""
		self.password = ""
	}
}