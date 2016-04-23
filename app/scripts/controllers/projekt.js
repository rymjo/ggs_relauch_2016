'use strict';

/**
 * @ngdoc function
 * @name gsGaratherstrApp.controller:ProjektCtrl
 * @description
 * # ProjektCtrl
 * Controller of the gsGaratherstrApp
 */
angular.module('gsGaratherstrApp')
  .controller('ProjektCtrl', function ($scope, $http, ProjektService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // termine in accordion
    $scope.alleProjekte = null;
    ProjektService.alleProjekte().then(function (dataResponse) {

      angular.forEach(dataResponse, function (value, key) {
        var count = 0;
        if (value.anzahl_der_bilder > 0) {
          count = value.anzahl_der_bilder;
        }

        var imagesForProject = [];
        for (var i = 0; i < count; i++) {
          var jsonImage = {
            thumb: value.pfad_zu_bildern + "/" + (i + 1) + ".jpg",
            img: value.pfad_zu_bildern + "/" + (i + 1) + ".jpg",
            description: "Bild " + (i + 1)
          };
          imagesForProject.push(jsonImage);

        }
        if (imagesForProject.length > 0) {
          dataResponse[key].images = imagesForProject;
        }


      });

      $scope.alleProjekte = dataResponse;

    });


  });


