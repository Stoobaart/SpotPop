angular
	.module('SpotPop')
	.controller('MapsController', MapsController)


function MapsController($state, $scope, Spot) {
	var self = this;

// create map start point and map marker position for use in the spots and my spots html states
	self.setMapMarkerLocation = function(allSpot) {
		self.map = {
			center: {
				latitude: allSpot.latitude,
				longitude: allSpot.longitude
			},
			zoom: 12
		};
		self.marker = {
			coords: {
				latitude: allSpot.latitude,
        longitude: allSpot.longitude
      },
      options: {
        icon: "../images/red-marker.png"
      }
    }
  }



}
