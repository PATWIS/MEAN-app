angular.module('userController2', [])

.controller('usersList', function($scope, User) {

	$scope.currentPage = 0;
    $scope.pageSize = 3;

     $scope.numberOfPages=function(){
        return Math.ceil($scope.getData().length/$scope.pageSize);                
    }

    $scope.getData = function () {
    	return $scope.users;
    }
	  
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

}).filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
