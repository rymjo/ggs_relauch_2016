'use strict';

/**
 * @ngdoc service
 * @name gsGaratherstrApp.TerminService
 * @description
 * # TerminService
 * Service in the gsGaratherstrApp.
 */
angular.module('gsGaratherstrApp')
  .service('TerminService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var promise;
    this.allTermine = function() {
      promise = $http.get('./assets/json/termine.json', { cache: 'true'})
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
