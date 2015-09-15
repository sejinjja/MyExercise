app.directive('appInfo', function() {
	return {
		restrict : 'E', // this option mean HTML element
		scope : {
			info : '='
		//app-info attribute named info, he = tells the directive to look for an attribute named info in the <app-info> element
		},
		templateUrl : 'javaScript/directives/appInfo.html'
	// We should use template.
	//but.... why use ...?? we have a repeat.....
	//sure... management is stong...
	};
});