

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

  	var modalTemplateString = '<div class="ng-modal">' +
                              '<div class="ng-modal-dialog">' +
                                '<div class="ng-modal-content">' +
                                  '<div class="ng-modal-header">' +
                                    '<button ng-click="modal.close()" type="button" >&times;</button>' +
                                    '<span class="ng-modal-icon" id="ng-modal-icon"></span>' +
                                    '<h4 class="ng-modal-title"></h4>' +
                                  '</div>' +
                                  '<div class="ng-modal-body">' +
                                    // content here
                                   '</div>' +
                                   //'<div style="display:block;z-index:-1"> </div>' +
                                    '<div class="ng-modal-footer">' +
                                     '<div class="ng-modal-footer-wrapper">' +
                                      '<button type="button" ng-click="modal.cancelPressed()"></button>' +
                                      '<button type="button" ng-click="modal.acceptPressed()"></button>' +
                                    '</div>' +
                                    '</div>' +
                                   '</div>' +
                                '</div>' +
                            '</div>';


     var $template = angular.element(modalTemplateString);
     var scope = $rootScope.$new();

     // appling the configuration to the modal
     $template.find(".ng-modal-title").text(options.title);

     if(!options.showFooter)
     		$template.find(".ng-modal-footer").hide();


    // creating the default events
     scope.modal = {};

     if(!options.cancelPressed)
     {
	     // executes when the user press the cancel buttom
	     scope.modal.cancelPressed = function(){

	     };
     }

     if(!options.acceptPressed)
     {
	     // executes when the user press the accept buttom
	     scope.modal.acceptPressed = function(){

	     };
     }

     // destroy the modal from the DOM
     scope.modal.destroy = function(){

     };

     scope.modal.maximize = function(){


     };

     if(options.templateUrl){




     }
     else if (options.template) {
     	$template.find("ng-modal-body").html(options.template);
     }





     if (options.getModal) {
     	options.getModal($template,scope);
     }

  }

}]);

