'use strict';

/**
 * @ngdoc overview
 * @name gsGaratherstrApp
 * @description
 * # gsGaratherstrApp
 *
 * Main module of the application.
 */
angular
  .module('gsGaratherstrApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'jkuri.gallery'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/impressum', {
        templateUrl: 'views/impressum.html',
        controller: 'ImpressumCtrl',
        controllerAs: 'impressum'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/termin', {
        templateUrl: 'views/termin.html',
        controller: 'TerminCtrl',
        controllerAs: 'termin'
      })
      .when('/ogs', {
        templateUrl: 'views/ogs.html',
        controller: 'OgsCtrl',
        controllerAs: 'ogs'
      })
      .when('/projekt', {
        templateUrl: 'views/projekt.html',
        controller: 'ProjektCtrl',
        controllerAs: 'projekt'
      })
      .when('/betreuung', {
        templateUrl: 'views/betreuung.html',
        controller: 'BetreuungCtrl',
        controllerAs: 'betreuung'
      })
      .when('/foerderverein', {
        templateUrl: 'views/foerderverein.html',
        controller: 'FoerdervereinCtrl',
        controllerAs: 'foerderverein'
      })
      .when('/pflegschaft', {
        templateUrl: 'views/pflegschaft.html',
        controller: 'PflegschaftCtrl',
        controllerAs: 'pflegschaft'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
