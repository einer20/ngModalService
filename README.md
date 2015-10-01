# ngModalService
Allows you to create a modal dialog that notifies every state of the modal by providing the callback as you need it. 


  Simple usage: 
  
  <pre>
    ngModalService({
       controller:ModalTestController,
       template:"<p>You have recived a new messsage!:{{message}}</p>",
       showFooter:true,
     });
     
     function ModalTestController($scope, $modalReference){
        $scope.message = "Hi! Im a alien!";
     }
   </pre>
  made with love by @einersantanar
