angular.module('userController2', [])

.controller('usersList', function($scope, User) {
	  
       User.get()
            .success(function(data) {
                $scope.users = data;
            })
            .error(function(data) {
                alert('Error: ' + data);
            });

                  $scope.deleteUser = function(id) {
            User.delete(id)
                .success(function(data) {
                    $scope.users = data;
                    $location.path('/users');
                })
                .error(function(data) {
                    alert('Error: ' + data);
                });
        };

});