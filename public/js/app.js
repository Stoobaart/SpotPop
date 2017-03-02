angular
	.module("SpotPop", ["ui.router", "firebase", "ngResource", "uiGmapgoogle-maps", "youtube-embed"])
	.constant('API', '/api')
	.config(MainRouter)
	.run(AuthCatcher)

function AuthCatcher ($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    if (error === 'AUTH_REQUIRED') $state.go('authRequired')
  })
}

function MainRouter ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/')

	var authRequired = {
		currentAuth: function (Auth) {
	  	return Auth.$requireSignIn()
		}
	}


	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/js/states/home.html'
		})
		.state('signin', {
			url: '/users/signin',
			templateUrl: '/js/states/signin.html'
		})
		.state('login', {
			url: '/users/login',
			templateUrl: '/js/states/login.html'
		})
		.state('my-profile', {
			url: '/users/:id',
			templateUrl: '/js/states/my-profile.html',
			resolve: authRequired
		})
		.state('edit', {
			url: '/users/:id/edit',
			templateUrl: '/js/states/edit.html',
			resolve: authRequired
		})
		.state('my-spots', {
			url: '/my-spots',
			templateUrl: '/js/states/my-spots.html',
			resolve: authRequired
		})
		.state('spots', {
			url: '/spots',
			templateUrl: '/js/states/spots.html',
			resolve: authRequired
		})		
		.state('add-spot', {
			url: '/add-spot',
			templateUrl: '/js/states/add-spot.html',
			resolve: authRequired
		})
		.state('friends', {
			url: '/friends',
			templateUrl: '/js/states/friends.html',
			resolve: authRequired
		})
}