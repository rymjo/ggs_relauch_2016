'use strict';

/**
 * @ngdoc function
 * @name gsGaratherstrApp.controller:TerminCtrl
 * @description
 * # TerminCtrl
 * Controller of the gsGaratherstrApp
 */
angular.module('gsGaratherstrApp')
  .controller('TerminCtrl', function ($scope, $location, $anchorScroll, $http, TerminService) {
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
    $scope.allTermine = null;
    TerminService.allTermine().then(function(dataResponse) {
      console.log("call Terminservice" + dataResponse);
      //return dataResponse;
      $scope.allTermine = dataResponse;

    });

  });

