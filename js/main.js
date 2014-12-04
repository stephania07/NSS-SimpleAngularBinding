;(function(){
  'use strict';

//var app = angular.module('myApp', []);
angular.module('myApp', [])
.controller('SimpleController', function(){
	var vm = this;			
  vm.name = "Stephania";
	vm.friends = ['Ashley', 'Bob', 'Carley', 'Dave'];
});
}());
