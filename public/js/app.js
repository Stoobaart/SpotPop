angular
	.module("SpotPop", ["ui.router"])
	.config(MainRouter)

function MainRouter ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/js/states/home.html'
		})
		.state('new', {
			url: '/users/new',
			templateUrl: '/js/states/new.html'
		})
		.state('show', {
			url: '/users/:id',
			templateUrl: '/js/states/show.html'
		})
		.state('edit', {
			url: '/users/:id/edit',
			templateUrl: '/js/states/edit.html'
		})		


		$urlRouterProvider.otherwise('/')
}