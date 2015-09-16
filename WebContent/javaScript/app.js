'use strict';
var app = angular.module("myApp", [ 'Contents.tester','Contents.service', 'ui.router' ]);
app.controller('StringValues', [ '$scope', function($scope) {
	$scope.title = 'My First AngularJS'; //We can communication this way.
} ]);
app.config(function($stateProvider, $urlRouterProvider) {

	
	$stateProvider
	.state('Home',{
		url : '/',
		template : '<p>Hello, world!</p>'
		+ '<p>My First AngularJS Exercise</p>'
	}).state('Use', {
		url : '/Use',
		template : '<p>Just Test Now</p>'
	}).state('Help', {
		url : '/Help',
		template : '<p>How do I use Json???</p>'
	});

	$urlRouterProvider
	// .when('/h', '/Help')error
	.otherwise('/');
});

