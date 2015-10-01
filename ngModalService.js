

/*
	Creates a modal dialog and provides events for manipulating the modal.

  Simple usage: 

  ngModalService({
     controller:ModalTestController,
     template:"<p>You have recived a new messsage!: {{message}}</p>",
     showFooter:true,
   });

   function ModalTestController($scope, $modalReference){
      $scope.message = "Hi! Im a alien!";
   }
   
  made with love by @einersantanar
*/
angular.module("",[]).service("ngModalService",["$document", "$rootScope","$controller", "$compile", "$http", function($document, $rootScope, $controller, $compile,$http){
  
  var defaultOptions = {
    maximize : false,
    showFooter : false,
    title : "Content",
  };
      

  var utilities = {
    centerContent:function (htmlTemplate) {
      
    }
  };
      

  return function ngModalService(options){

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
                                      '<button type="button" ng-click="modal.cancelPressed()">Cancel</button>' +
                                      '<button type="button" ng-click="modal.acceptPressed()">Continue</button>' +
                                    '</div>' +
                                    '</div>' +
                                   '</div>' +
                                '</div>' +
                            '</div>';


     var $template = angular.element(modalTemplateString);
     var scope = $rootScope.$new();
     scope.$$template = $template;

     // appling the configuration to the modal
     $template.find(".ng-modal-title").text(options.title);

     if(!options.showFooter)
        $template.find(".ng-modal-footer").hide();


    // creating the default events
     scope.modal = {};

     
    // default events  implementation
    
    scope.modal.cancelPressed = function () {
      $template.fadeOut(function  () {
        $template.remove();
      });
    };

    
    scope.modal.acceptPressed = function () {
      $template.fadeOut(function  () {
        $template.remove();
      });
    };
     
     // destroy the modal from the DOM
     scope.modal.destroy = function(){
        $template.fadeOut(function  () {
          $template.remove();
        });
     };

     function bind(bodyTemplate, scope, controller) {

          if(controller){
              $controller(controller, { $scope: scope, modalReference: $template});
          }
       
          $template.find(".ng-modal-body").append(bodyTemplate);
       
          $compile($template)(scope);
          if(options.getView) options.getView($template, scope);

          utilities.centerContent($template);        
          $document.find("body").append($template);
     }


     if(options.templateUrl){

        if(templateUrl.indexOf("~")){
          // append the site base url
          var basePath = location.host + location.pathname;
          templateUrl = templateUrl.replace("~", basePath);
        }

        var useHttpPostMethod = templateUrl.indexOf("post:") !== -1;

        if(useHttpPostMethod){
          templateUrl = templateUrl.replace("post:",'');
        }else{
          templateUrl = templateUrl.replace("get:",'');
        }

        var httpMethod = useHttpPostMethod ? $http.post : $http.get;

        httpMethod(templateUrl).then(function (response) {
            var $bodyTemplate = angular.element(response.data );

            bind($bodyTemplate, scope, options.controller);
        });

     }else if (options.template) {

        var $bodyTemplate = angular.element(options.template);
      $template.find("ng-modal-body").html($bodyTemplate);
       
        bind($bodyTemplate, scope, options.controller);
     }

  };

}]);