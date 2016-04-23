'use strict';

/**
 * @ngdoc function
 * @name gsGaratherstrApp.controller:FoerdervereinCtrl
 * @description
 * # FoerdervereinCtrl
 * Controller of the gsGaratherstrApp
 */
angular.module('gsGaratherstrApp')
  .controller('FoerdervereinCtrl', function ($scope, $location, $anchorScroll) {
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
