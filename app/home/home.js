'use strict';

angular.module('myApp.home', ['ngRoute'])



.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', [function() {

      console.log("Looks like Home page is loaded after authentication!!")

}]);
