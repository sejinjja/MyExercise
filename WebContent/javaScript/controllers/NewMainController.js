/**
 * main.html을 위한 컨트롤러 입니다.
 * 010-9146-1411
 * sejinjja@naver.com
 * 조세진
 */

app.controller('NewMainController', [ '$scope', function($scope) {
	$scope.title = 'HTML title'; //We can communication this way.
	$scope.products = [ {
		title : 'The Book of Trees',
		thumbImg : "",
		Img : "",
		url : "",
	}, {
		title : 'The Book of Trees',
		thumbImg : "",
		Img : "",
		url : "",
	} ] // we can use array list.

} ]);