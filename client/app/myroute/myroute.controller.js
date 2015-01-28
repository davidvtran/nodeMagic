'use strict';

angular.module('nodeTestProgramApp')
  .controller('MyrouteCtrl', function ($scope, myservice) {
    $scope.message = 'Hello';
    $scope.myservice = myservice

    myservice.getResults(function(){
 	    $scope.results = $scope.myservice.allResults;
    	$scope.keys = Object.keys($scope.results[0]);
    	remove($scope.keys, '_id');
    	remove($scope.keys, 'shortURL');
    	// console.log("keys:" + $scope.keys);
    });

    function remove(arr, item) {
      	for(var i = arr.length; i--;) {
          	if(arr[i] === item) {
              	arr.splice(i, 1);
          	}
      	}
  	}
    $scope.shortcode = function(string) {
      // console.log(string);
      // console.log(string.slice(32,35));
      $scope.temp = string.slice(32,35);
      // console.log($scope.temp);
      return $scope.temp;
    };

  
  });

