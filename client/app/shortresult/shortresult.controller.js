'use strict';

angular.module('nodeTestProgramApp')
  .controller('ShortresultCtrl', function ($scope, $stateParams, myservice) {
    $scope.message = 'Hello';
    $scope.myservice = myservice;

    $scope.myservice.getSomeResults($stateParams.id, function(){
 	    $scope.someResults = $scope.myservice.someResults;
    	$scope.keys = Object.keys($scope.someResults[0]);
    	remove($scope.keys, '_id');
    	remove($scope.keys, 'shortURL');
    	remove($scope.keys, 'rawEventData');
    	// console.log("keys:" + $scope.keys);
    });

    function httpGet(theUrl) {
	    var xmlHttp = null;
	    xmlHttp = new XMLHttpRequest();
	    xmlHttp.open( "GET", theUrl, false );
	    xmlHttp.send( null );
	    return xmlHttp.responseText;
	}

    function remove(arr, item) {
      	for(var i = arr.length; i--;) {
          	if(arr[i] === item) {
              	arr.splice(i, 1);
          	}
      	}
  	};
  });

