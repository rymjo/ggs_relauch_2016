'use strict';

/**
 * @ngdoc service
 * @name gsGaratherstrApp.AboutService
 * @description
 * # AboutService
 * Service in the gsGaratherstrApp.
 */
angular.module('gsGaratherstrApp')
  .service('AboutService', function ($http) {
  // AngularJS will instantiate a singleton by calling "new" on this function

  var promise;
  this.alleMitarbeiter = function() {
    promise = $http.get('./assets/json/lehrer.json', { cache: 'true'})
      .then(function(res){

        /* angular.forEach(res.data, function(value, key) {
         console.log(JSON.stringify(value) + ":" + key);

         });
         */


        return res.data;

      });

    return promise;
  }
  });
