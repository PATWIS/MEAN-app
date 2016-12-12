angular.module('userController2', [])

.controller('usersList', function($scope, User) {

	 User.get()
        .success(function(data) {
            $scope.users = data;
        })
        .error(function(data) {
            alert('Error: ' + data);
        });

    $scope.currentPage = 0;
    $scope.pageSize = 3;

    $scope.getData = function() {
        return $scope.users;
    }

    console.log($scope.getData());

    $scope.numberOfPages = function() {
    	if ($scope.users !== undefined)
        return Math.ceil($scope.users.length / $scope.pageSize);
    }

    
   

  

}).filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        
        if (input !== undefined)
        return input.slice(start);
    }
});
