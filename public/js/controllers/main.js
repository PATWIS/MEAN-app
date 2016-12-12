angular.module('userController', ['ngRoute'])

.controller('mainController', function($scope, $route, $routeParams,$location, User) {
        $scope.$route = $route;
    
        $scope.$routeParams = $routeParams;
        
        $scope.editData = {};
        $scope.isEdit = false;

            // when submitting the add form, send the text to the node API
       

        // delete a todo after checking it
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

        $scope.editUser = function(id) {
            console.log(id);
            $scope.editData[id] = true;
            $scope.isEdit = true;
        }

        $scope.saveEditUser = function(user) {

            var id = user._id
            // delete user._id;

            User.update(id, user)
                .success(function(data) {
                    $scope.editData = {};
                    $scope.users = data;
                    $scope.isEdit = false;
                })
                .error(function(data) {
                    alert('Error: ' + data);
                });
        };

        $scope.cancel = function() {
            $scope.editData = {};
            $scope.isEdit = false;

            User.get()
                .success(function(data) {
                    $scope.users = data;
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });

        }

    });
    
