'use strict';

/**
 * @ngdoc service
 * @name gsGaratherstrApp.ProjektService
 * @description
 * # ProjektService
 * Service in the gsGaratherstrApp.
 */
angular.module('gsGaratherstrApp')
  .service('ProjektService', function ($http) {
  // AngularJS will instantiate a singleton by calling "new" on this function

  var promise;
  this.alleProjekte = function() {
    promise = $http.get('./assets/json/projekte.json', { cache: 'true'})
      .then(function(res){

        return res.data;

      });

    return promise;
  }
  });
