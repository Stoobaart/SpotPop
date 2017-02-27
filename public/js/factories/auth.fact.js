angular
	.module('SpotPop')
	.factory('Auth', AuthFactory)
	.run(function() {

		var config = {
			apiKey: "AIzaSyCIHZCXYvKdLeN5yZ4cfPURaeWg3FlGKSg",
		    authDomain: "spotpop-6b716.firebaseapp.com",
		    databaseURL: "https://spotpop-6b716.firebaseio.com",
		    storageBucket: "spotpop-6b716.appspot.com",
		    messagingSenderId: "949082868905"
	  	};
  	firebase.initializeApp(config);

	})

function AuthFactory($firebaseAuth) {
	return $firebaseAuth()
}