;(function(){
  'use strict';

//var app = angular.module('myApp', []);
angular.module('myApp', [])
.controller('SimpleController', function($scope){
  $scope.name = "Stephania";
	$scope.friends = ['Ashley', 'Bob', 'Carley', 'Dave'];
});
}());
