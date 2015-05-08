'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.landing',
  'myApp.home',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/landing'});
}]);

Parse.initialize("oh59grSAAuNE0ZdcrHCAs6lHX0uf9PyhfYGqwBtp", "VDOLSHeddf8HAl1RzpiJv97OXdWO74Ea314s7Jrz");