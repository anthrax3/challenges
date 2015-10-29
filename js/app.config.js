angular.module('challengesApp').config(function($locationProvider, $urlRouterProvider, $stateProvider){

	$locationProvider.html5Mode(true);

	$urlRouterProvider.otherwise('/');

	$stateProvider

	.state('main', {
		url: '/challenges/',
		templateUrl: '/challenges/views/main.html',
		controller: function($scope) {
			$scope.myarr = ['1','2','3','4','5'];
		}
	})

	.state('challenges', {
		url: '/challenges/',
		templateUrl: '/challenges/views/challenges.html'
	});

for (c=0;c<=100;++c) {
  c<10?c='0'+c:'';
  $stateProvider
  	.state('challenges-' + c, {
			url: '/' + c,
			templateUrl: 'challenges/views/challenges/' + c + '.html'
		})
};

})

.controller('sidebarCtrl', function() {
	var main = this;
	var check = 'mario';	
	main.challenges = [
		{"no":"00", "info":['Name Generator', check]},
		{"no":"01", "info":['Higher Lower', '']},
		{"no":"99", "info":['Enigma Machine Simulator', '']}
		];
})
