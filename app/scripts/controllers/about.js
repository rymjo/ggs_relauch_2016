'use strict';

/**
 * @ngdoc function
 * @name gsGaratherstrApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gsGaratherstrApp
 */
angular.module('gsGaratherstrApp')
  .controller('AboutCtrl', function ($scope, $location, $anchorScroll, $http, AboutService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.scrollTo = function(id) {
      $location.hash( id );
      $anchorScroll();
    }

    // termine in accordion
    $scope.alleMitarbeiter = null;
    AboutService.alleMitarbeiter().then(function(dataResponse) {
     // console.log("call Terminservice" + dataResponse);
      //return dataResponse;
      $scope.alleMitarbeiter = dataResponse;

    });
  });
