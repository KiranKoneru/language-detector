'use strict';

/**
 * Main module of the application.
 */
angular
  .module('languageApp', ['ngRoute' ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/english.html',
        controller: 'MainCtrl',
        controllerAs: 'english'
      })
      .when('/french', {
        templateUrl: 'views/french.html',
        controller: 'MainCtrl',
        controllerAs: 'french'
      })
	  .when('/spanish', {
        templateUrl: 'views/spanish.html',
        controller: 'MainCtrl',
        controllerAs: 'spanish'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
