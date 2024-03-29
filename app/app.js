angular.module('app', [
	'ngRoute',
	'app.controllers'
])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/', {
			templateUrl: 'views/post.html',
			controller: 'PostController',
		}).when('/post/:id', {
			templateUrl: 'views/singlepost.html',
			controller: 'SinglePostController',
		}).otherwise({
			redirectTo: '/'
		});
	}]);