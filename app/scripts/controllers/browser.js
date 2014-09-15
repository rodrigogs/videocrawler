'use strict';

/**
 * @ngdoc function
 * @name videocrawlerApp.controller:BrowserCtrl
 * @description
 * # BrowserCtrl
 * Controller of the videocrawlerApp
 */
angular.module('videocrawlerApp')
  .controller('BrowserCtrl', function ($scope, $http, $location, $rootScope) {
    
    $scope.videos = $rootScope.videos;
    
    $scope.submit = function () {
      var search = $scope.search;
      
      $http({method: 'GET', url: '/api/videos', params: { search: search }}).
        success(function (data, status, headers, config) {
          if (data.videos) {
            $rootScope.videos = data.videos;
          }
          
          $location.path('browser');
        }).
        error(function (data, status, headers, config) {
          alert('Ajax error');
        });
    };
  });
