'use strict';

/**
 * @ngdoc function
 * @name gsGaratherstrApp.controller:ImpressumCtrl
 * @description
 * # ImpressumCtrl
 * Controller of the gsGaratherstrApp
 */
angular.module('gsGaratherstrApp')
  .controller('ImpressumCtrl', function ($scope, $location, $anchorScroll) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.scrollTo = function(id) {
      $location.hash( id );
      $anchorScroll();
    }
  });
