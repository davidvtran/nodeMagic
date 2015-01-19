'use strict';

angular.module('nodeTestProgramApp')
  .factory('myservice', function ($http) {
    // Service logic
    // ...

    var meaningOfLife = 42;
    var service = {};
    service.allResults = [];
    service.currResult = {};

    service.getResults = function(cb) {
    	return $http.get('/api/results/')
    	.success (function (temp) {
    		console.log(temp);
    		service.allResults = temp;
            cb();

    	})
    };





    // Public API here
    return service;
  });
