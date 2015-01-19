'use strict';

angular.module('nodeTestProgramApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('invocation', {
        url: '/invocation/:id',
        templateUrl: 'app/invocation/invocation.html',
        controller: 'InvocationCtrl'
      });
  });