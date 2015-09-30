

/*
	Creates a modal dialog
*/
angular.module("",[]).service("ngModalService",["$document", "$rootScope","$controller", "compile", "$http", 
	function($document, $rootScope, $controller, $compile,$http){
  
	var defaultOptions = {

		maximize : false,
		showFooter : false,
		title : "Content",
		css: {},
	};

  return ngModalService(options){

  	options = angular.extend(defaultOptions, options);



  }

}]);