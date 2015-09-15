/*
 * 
 * */
app.controller('SubController', ['$scope', function($scope) { 
  $scope.title = 'We can Sub'; //We can communication this way. 
  $scope.strProduct = {name : 'testProduct',
		  price : 191919,		  
		  pubdate: new Date('2014', '03', '08')};
  //caution attr : val (o) not equal attr = val (X)
}]);