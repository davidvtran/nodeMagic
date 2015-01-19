'use strict';

angular.module('nodeTestProgramApp')
  .controller('InvocationCtrl', function ($scope, $stateParams, myservice) {
    $scope.message = 'Hello';
    $scope.myservice = myservice;

    $scope.myservice.getShortlist($stateParams.id, function(){
 	    $scope.shortlist = $scope.myservice.shortlist;
    	$scope.keys = Object.keys($scope.shortlist[0]);
    	remove($scope.keys, '_id');
    	remove($scope.keys, 'shortURL');
    	remove($scope.keys, 'rawEventData');
    	// console.log("keys:" + $scope.keys);
    });

    function remove(arr, item) {
      	for(var i = arr.length; i--;) {
          	if(arr[i] === item) {
              	arr.splice(i, 1);
          	}
      	}
  	};
  	
  });


