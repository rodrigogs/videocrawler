'use strict';

/**
 * @ngdoc overview
 * @name videocrawlerApp
 * @description
 * # videocrawlerApp
 *
 * Main module of the application.
 */
angular
  .module('videocrawlerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-loading-bar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/browser', {
        templateUrl: 'views/browser.html',
        controller: 'BrowserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
