angular.module('app', ['userController', 'userController1', 'userController2','userController3','userService'])

.config(function($routeProvider, $locationProvider) {
    $routeProvider

    // route for the home page 
        .when('/users', {
        templateUrl: 'js/views/users.html',
        controller: 'usersList'
    }).when('/addUser', {
        templateUrl: 'js/views/addUser.htm',
        controller: 'addUser'
    })

    // route for the about page
    .when('/user/:id', {
            templateUrl: 'js/views/user.htm',
            controller: 'userDetails'

        });
        

    $locationProvider.html5Mode(true);

});;
