'use strict';

angular.module('nodeTestProgramApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('myroute', {
        url: '/',
        templateUrl: 'app/myroute/myroute.html',
        controller: 'MyrouteCtrl'
      });
  });