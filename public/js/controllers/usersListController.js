angular.module('userController2', [])

.controller('usersList', function($scope, User) {
	  
       User.get()
            .success(function(data) {
                $scope.users = data;
            })
            .error(function(data) {
                alert('Error: ' + data);
            });

});