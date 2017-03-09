angular
	.module('SpotPop')
	.controller('secretsController', secretsController)


function secretsController (Auth, $sce) {
 var self = this;

// Allow the use of youtube video urls
 self.trustSrc = function(allSpot) {
   if (!/embed/i.test(allSpot.video)) {
     allSpot.video = 'https://www.youtube.com/embed/' + allSpot.video.match(/[^v=[^be/]*$/g)[0]
   }
   return $sce.trustAsResourceUrl(allSpot.video);
 }
}