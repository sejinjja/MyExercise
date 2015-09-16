'use strict';
function serverServiceRouine() {
	return "Insert Testing....";	
};
var app = angular.module('Contents.tester', [ 'ui.router' ]);
app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('Contents', {
		// abstract : true, what is this...???
		url : '/Contents',

		templateUrl : 'javaScript/contents/contents.html',

	})

});
app.controller('ContentsController', [ '$scope', function($scope) {
	$scope.title = 'My First AngularJS'; //We can communication this way.
	$scope.contents = [ {
		title : 'Title',
		contents : "Contents"
	}, {
		title : 'Title1',
		contents : "Contents1"
	} ] // we can use array list.

	// Add a Item to the list
	$scope.addItem = function() {

		alert(serverServiceRouine());
		
		$scope.contents.push({
			title : $scope.titleAdder,
			contents : $scope.contentsAdder
		});

		// Clear input fields after push
		$scope.titleAdder = "";
		$scope.contentsAdder = "";

	};
} ]);
