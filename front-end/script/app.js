var myApp=angular.module('myApp',['ngRoute']);


myApp.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
  // fix
$locationProvider.hashPrefix('');
  $routeProvider
 
  // route for the home page
    .when('/home', {
    templateUrl: '/script/home/home.html',
    controller: 'homeController'
  })
  // route for the registration page
  .when('/registration', {
    templateUrl: '/script/reg/reg.html',
    controller: 'RegController'
  })

  // route for the login page
  .when('/login', {
    templateUrl: '/script/login/login.html',
    controller: 'loginController'
  })
 .otherwise({ redirectTo: '/login' });
}
]);

// myApp.controller('homeController', function ($scope, $http) {
//   var url = "workingURL"; /// changed function to a simple string message to test
//   $scope.message = "Hello Liberals";
// });