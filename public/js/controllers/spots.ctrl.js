angular
	.module('SpotPop')
	.controller('SpotsController', SpotsController)

function SpotsController (Spot, Auth, $stateParams, $state, $http) {
  var self = this;	

	self.all = []
	self.map = { center: { latitude: 51.5074, longitude: 0.1278 }, zoom: 12 };

	self.createSpot = function() {
		Spot.create({
			uid: Auth.$getAuth().uid,
			spot: {
				title: self.newSpot.title,
				body: self.newSpot.body,
				video: self.newSpot.video,
				location: self.newSpot.location
			}
		})
		.then(function (spot) {
				self.newSpot = {}
				$state.go('my-spots')
			})
			.catch(function (err) {
				self.err = err.err
				resetSpot()
			})
	}

	self.showSpots = function() {
		Spot.getAll()
		.then(function(res) {
			console.log(res)
			self.all = res.data.spots
		})
		.catch(function(err) {
			console.log(err)
		})
	}

	self.getMySpots = function () {
		var uid = Auth.$getAuth().uid

		Spot.getMySpots(uid)
		.then(function(res) {
			console.log(res)
			self.all = res.data.spot
		})
		.catch(function (err) {
			console.log(err)
		})
	}

	function resetSpot () {
		self.title = ""
		self.body = ""
		self.video = ""
		self.location = ""
	}

	return self;


}