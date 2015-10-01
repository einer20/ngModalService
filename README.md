# ngModalService
Allows you to create a modal dialog that notifies every state of the modal by providing the callback as you need it. 


  Simple usage: 
  
  <pre>
var app = angular.module("app",["ngModalServiceModule"])

app.controller("HomeController",function($scope, ngModalService){

   ngModalService({
    title:"Welcome!",
      template:"<p>Hello! My name is {{contact.name}}. You can write me at {{contact.twitter}}</p>",
      controller:ContactController,
      getView:function(view){
        $(view.find("button").get(1)).text("Thanks but not :'(")
        $(view.find("button").get(2)).text("Write me!");
      }
    });

})

function ContactController($scope){
    $scope.contact = {name:"Einer Santana", twitter: "@einersantanar"};

    $scope.modal.acceptPressed = function(){
      alert("Alright! Lets continue!");
      $scope.modal.destroy();
    };

    $scope.modal.cancelPressed = function(){
      alert("So sad you're leaving :(... See you soon!");
      $scope.modal.destroy();
    };

}
   </pre>
  made with love by @einersantanar
