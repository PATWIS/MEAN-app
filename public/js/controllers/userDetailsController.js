angular.module('userController1', [])

.controller('userDetails', function($scope, $routeParams, $location, User) {
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

    $scope.deleteUser = function(id) {
        User.delete(id)
            .success(function(data) {
                $scope.users = data;
                $location.path('/users');
                alert('user '+$scope.user.name+' has been deleted ')
            })
            .error(function(data) {
                alert('Error: ' + data);
            });
    };

});
