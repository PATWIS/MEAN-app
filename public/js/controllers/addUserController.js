angular.module('userController3', [])

.controller('addUser', function($scope, $location, User) {
	 
        $scope.formData = {};
     $scope.createUser = function() {

            if (!$.isEmptyObject($scope.formData))

                User.create($scope.formData)
                .success(function(data) {
                    $scope.formData = {}; // clear the form so our user is ready to enter another
                    $scope.users = data;
                    $location.path('/users');

                })
                .error(function(data) {
                    alert('Error: ' + data);
                });
        };

});