angular.module('challengesApp').config(function($locationProvider, $urlRouterProvider, $stateProvider){

	$locationProvider.html5Mode(true);

	$urlRouterProvider.otherwise('/');

	$stateProvider

	.state('main', {
		url: '/challenges/',
		templateUrl: '/challenges/views/main.html',
		//controller: 'postsCtrl'
	})

	.state('00', {
		url: '/00',
		templateUrl: '/views/00.html'
	})

})
