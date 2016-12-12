angular.module('userController1', [])

.controller('userDetails', function($scope, $routeParams, User) {
	$scope.$routeParams = $routeParams;
	$scope.foo = "Lorem";
	var id = $scope.$routeParams.id;
	 User.getUser(id)
            .success(function(data) {
                $scope.user = data;
            })
            .error(function(data) {
                alert('Error: ' + data);
            });

});