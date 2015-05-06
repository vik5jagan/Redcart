'use strict';

angular.module('myApp.landing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/landing', {
    templateUrl: 'landing/landing.html',
    controller: 'LandingCtrl'
  });
}])

.controller('LandingCtrl', ['$scope','$location',function($scope,$location) {

      console.log("Invoked the LandingCtrl:");
      $scope.user = {};
      $scope.login = function (e){

        var email = $scope.user.email;
        var password = $scope.user.password;

        console.log("Here is the email :"+email);
        console.log("Here is the password :"+password);

        if(email == password){

          console.log("Login happened successfully!!!");
          $location.path('/home');

        }else{

          console.log("Login Failed !!!");

        }

      }


}]);