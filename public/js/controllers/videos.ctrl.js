angular
	.module('SpotPop')
	.controller('secretsController', secretsController)


function secretsController (Auth, $sce) {
 var self = this;

 // self.logUser = function () {
 //   var x = Auth.$getAuth()
 // }


 
 // self.secrets = [
 //   'https://www.youtube.com/embed/BZdlxb5WSEQ',
 //   'https://www.youtube.com/watch?v=TXcv-ic9Tn8',
 //   'https://www.youtube.com/watch?v=xKXo8O-S9Os'
 // ]

 self.trustSrc = function(allSpot) {
   if (!/embed/i.test(allSpot.video)) {
     allSpot.video = 'https://www.youtube.com/embed/' + allSpot.video.match(/[^v=[^be/]*$/g)[0]
   }
   return $sce.trustAsResourceUrl(allSpot.video);
 }
}