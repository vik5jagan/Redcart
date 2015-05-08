'use strict';

angular.module('myApp.landing', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {

        $routeProvider.when('/landing', {
          templateUrl: 'landing/landing.html',
          controller: 'LandingCtrl'
        });

    }])

    .controller('LandingCtrl', ['$scope','$location','$sce',function($scope,$location, $sce) {

      console.log("Invoked the LandingCtrl:");
      $scope.user = {};

      $scope.init = function () {
        $scope.selection = "signin";
      };

      $scope.init();

      $scope.login = function (e){

        var email = $scope.user.email;
        var password = $scope.user.password;

        console.log("Here is the email :"+email);
        console.log("Here is the password :"+password);

        var Identity = Parse.Object.extend("Identity");
        var query = new Parse.Query(Identity);
        query.equalTo("email", email);
        query.find({
          success: function(results) {
            alert("Successfully retrieved " + results.length + " scores.");
            // Do something with the returned Parse.Object values
            var serverPwd = "";
            for (var i = 0; i < results.length; i++) {
              var object = results[i];
              alert(object.id + ' - ' + object.get('password'));
               serverPwd = object.get('password');
            }
              if(password == serverPwd){
                $scope.$apply(function() {
                   $location.path('/home');
                });
              }else{
                $scope.$apply(function() {
                  $scope.formSigninMsg = $sce.trustAsHtml('<div class="alert alert-warning">Password not matching</div>');
                });
              }

          },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
            $scope.$apply(function() {
                $scope.formSigninMsg = $sce.trustAsHtml('<div class="alert alert-warning">Following error happened in server.'+error.code+':'+error.message+' </div>');
            });
          }
        });


        if(email == password){

          console.log("Login happened successfully!!!");


        }else{

          console.log("Login Failed !!!");

        }

      };


      $scope.gotoSignup = function (e){

        console.log("signup button c1lick3ed !!!");

        $scope.selection = "signup";
      };



      $scope.signup = function (e){

        console.log("signup button c1licked !!!");

        var email = $scope.user.email;
        var password = $scope.user.password;

        var Identity = Parse.Object.extend("Identity");
        var identity = new Identity();
        identity.set("email",email);
        identity.set("password",password);
        var message ="";

        identity.save(null,{

          success: function(object){

            console.log("data submitted !!!");
            $scope.$apply(function() {

              $scope.formMsg = $sce.trustAsHtml('<div class="alert alert-success fade in">This is a success message</div>');

            });
          },
          error: function(model,error){
           console.log(error);
            $scope.$apply(function() {

              $scope.formMsg = $sce.trustAsHtml('<div class="alert alert-warning">Not able to signup!!</div>');
            });
          }
        });

       // $scope.selection = "signin";

      }




    }]);
