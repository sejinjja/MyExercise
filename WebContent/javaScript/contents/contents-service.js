'use strict';
angular.module('Contents.service', [])

// A RESTful factory for retrieving contacts from 'Contents.json'
.factory('Contents', [ '$http', 'utils', function($http, utils) {
	var path = 'javaScript/json/contentsJson.json';
	var Contents = $http.get(path).then(function(resp) {
		return resp.data.Contents;
	});

	var factory = {};
	factory.all = function() {
		return Contents;
	};
	factory.get = function(id) {
		return Contents.then(function() {
			return utils.findById(Contents, id);
		})
	};
	return factory;
} ]);
