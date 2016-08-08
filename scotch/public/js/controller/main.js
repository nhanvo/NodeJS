/**
*  Module
*
* Description
*/
angular.module('todoController', [])

.controller('mainController', function($scope, $http, Todos){
	$scope.formData = {};

	//===================GET===================
	// when landing on the page, get all todos and show them
    // use the service to get all the todos        
	Todos.get().success(function(data) {
		$scope.todos = data;
	});

	//===================CREATE===================
	// when submitting the add form, send the text to the node API
	$scope.createTodo = function() {
		// validate the formData to make sure that something is there
        // if form is empty, nothing will happen
        // people can't just hold enter to keep adding the same to-do anymore
    	if (!$.isEmptyObject($scope.formData)) {
    		// call the create function from our service (returns a promise object)
            Todos.create($scope.formData).success(function(data) {
            	// clear the form so our user is ready to enter another
            	$scope.formData = {};

            	// assign our new list of todos
            	$scope.todos = data;
            });
    	}       
	};

	//===================DELETE===================
	// delete a todo after checking it
	$scope.deleteTodo = function(id) {
		// if successful creation, call our get function to get all the new todos
		Todos.delete(id).success(function() {
			// assign our new list of todos
			$scope.todos = data;
		});
	};

})