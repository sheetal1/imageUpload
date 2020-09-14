myApp.controller('loginController', function ($scope, $http,$window) {
    var url = "workingURL"; /// changed function to a simple string message to test
    $scope.message = "Login";

    var userlogin = "http://localhost:8083/user/login"; 

    $scope.login = function(user_details){
      console.log("user details",user_details);
      $scope.user = user_details;
      if($scope.user) {
        
            $http.jsonp( userlogin, $scope.user, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            }).then(function (response) {
                console.log("login succesfullly",response);
                $window.location.href = '/script/home/home.html';
              
              }, function (response) {
              
               console.log("login error",response);
              });
      
    }
    else{
        $window.alert("please fill all empty field");
    }
    }
  });