'use strict';

angular.module('nodeTestProgramApp')
  .factory('myservice', function ($http) {
    // Service logic
    // ...

    var meaningOfLife = 42;
    var service = {};
    service.allResults = [];
    service.shortlist = [];


    service.getResults = function(cb) {
    	return $http.get('/api/results/')
    	.success (function (temp) {
    		//console.log(temp);
    		service.allResults = temp;
            cb();

    	})
    };

    // service.getSomeResults = function(code, cb) {
    //     return $http.get('/api/results/' + code)
    //     .success function(temp) {
    //         service.someResults = temp;
    //         cb();
    //     }
    // }

    service.getShortlist = function(code, cb) {
        return $http.get('/api/invocations/' + code)
        .success (function (temp) {
            //console.log(temp);
            service.shortlist = temp;
            cb();
        })
    };





    // Public API here
    return service;
  });
