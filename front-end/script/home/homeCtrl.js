myApp.controller('homeController', function ($scope, $http) {
    
    $scope.message = "Home";

    var uploadimage = "http://localhost:8083/api/file/upload"; 

    $scope.login = function(user_details){
      $scope.user = user_details;
      if($scope.user) {
            fd
            $http.post( uploadimage, $scope.user, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }).then(function (response) {
                console.log("login succesfullly",response);
              // This function handles success
              
              }, function (response) {
              
              // this function handles error
               console.log("login error",response);
              });
      
    }
    else{
        $window.alert("please fill all empty field");
    }
    }
  });