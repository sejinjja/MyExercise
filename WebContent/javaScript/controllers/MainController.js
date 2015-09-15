/*
 * We must write
 * */
app.controller('MainController', [ '$scope', function($scope) {
	$scope.title = 'Top Sellers in Books'; //We can communication this way.
	$scope.various = 'String';
	$scope.move = {
		icon : 'img/_55263.jpg',
		title : 'MOVE',
		developer : 'MOVE, Inc.',
		price : 0.99
	};

	$scope.shutterbugg = {
		icon : 'img/_55263.jpg',
		title : 'Shutterbugg',
		developer : 'Chico Dusty',
		price : 2.99
	};

	$scope.gameboard = {
		icon : 'img/_55263.jpg',
		title : 'Gameboard',
		developer : 'Armando P.',
		price : 1.99
	};

	$scope.products = [ {
		name : 'The Book of Trees',
		price : 19,
		pubdate : new Date('2014', '03', '08'),
		cover : 'img/_55263.jpg',
		likes : 0,
		dislikes : 0
	}, {
		name : 'Program or be Programmed',
		price : 8,
		pubdate : new Date('2013', '08', '01'),
		cover : 'img/_55270.jpg',
		likes : 0,
		dislikes : 0
	} ] // we can use array list.

	$scope.plusOne = function(index) {
		$scope.products[index].likes += 1;
	};
	// make sure equal

} ]);