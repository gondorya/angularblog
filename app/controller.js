angular.module('app.controllers', [
		'ui.bootstrap',
		'app.directives'
	])
	.controller('PostController', ['$scope', '$http', function($scope, $http){
		$scope.myInterval = 5000;
    	$scope.slides = [];
		$http.get('data/posts.json').success(function(data){
			$scope.posts = data;
		})		
	}])
	.controller('SinglePostController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		$http.get('data/posts.json').success(function(data){
			$scope.post = data[$routeParams.id];
		})
	}]);

