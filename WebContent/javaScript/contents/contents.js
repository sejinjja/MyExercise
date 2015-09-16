'use strict';
var asdf="";
var test= "";
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
app.controller('ContentsController', [ '$http', '$scope', function($http,$scope) {
	$scope.title = 'My First AngularJS'; 
	$scope.contents=[];
	$http.get('javaScript/json/contentsJson.json').success(function(data){
		$scope.contents=data.Contents;
	});
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

	$scope.delItem = function(item) { 
		  var index = $scope.contents.indexOf(item);
		  $scope.contents.splice(index, 1);s		
	};
	$scope.modItem = function(item) { 
		
		if($scope.titleAdder !== ""){
			item.title = $scope.titleAdder;
		}
		
		if($scope.contentsAdder !== ""){
			item.contents = $scope.contentsAdder;
		}
		

			// Clear input fields after push
			$scope.titleAdder = "";
			$scope.contentsAdder = "";
		
	};
	
	
	
	
} ]);
