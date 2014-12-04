;(function(){
  'use strict';

//var app = angular.module('myApp', []);
angular.module('todoApp', [])
.controller('TodoController', function(){
	var vm = this;	
  vm.tasks = [
  { name: 'Learn Angular',
		desc: 'If I could learn Angular I\'d be soooo happy!',
	  due: 'Today'
	},			
  { name: 'Finish Tic Tac Toe',
		desc: 'Firebase Arrrrggghhhhhhhh!',
	  due: 'Monday'
	},
  { name: 'Get a job',
		desc: 'profit!',
	  due: 'April 2015'
  }			
	];
  
  vm.addNewTask = function(){
    vm.tasks.push(vm.newTask);
    vm.newTask = null;
	};	
 });
}());
