'use strict';

angular.module('nodeTestProgramApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shortresult', {
        url: '/result/:id',
        templateUrl: 'app/shortresult/shortresult.html',
        controller: 'ShortresultCtrl'
      });
  });