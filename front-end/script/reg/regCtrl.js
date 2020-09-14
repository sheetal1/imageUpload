myApp.controller('RegController', function ($scope, $http ,$window) {
    var url = "workingURL"; /// changed function to a simple string message to test
    $scope.message = "Registration";

    var userRegistration = "http://localhost:8083/user/register"; 

    $scope.register = function(user_details){
      console.log("user details",user_details);
      $scope.user = user_details;
      if($scope.user) {
        
            $http.jsonp( userRegistration, $scope.user, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            }).then(function (response) {
                console.log("Fail To Add",response);
              // This function handles success
              
              }, function (response) {
              
              // this function handles error
              
              });
        
    }
    else{
        $window.alert("please fill all empty field");
    }
    }

  });