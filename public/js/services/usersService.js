angular.module('userService', [])
    .factory('User', function($http) {
        return {
            get: function() {
                return $http.get('/api/users');
            },
            getUser: function(id) {
                return $http.get('/api/user/' + id);
            },
            create: function(userData) {
                return $http.post('/api/users', userData);
            },
            delete: function(id) {
                return $http.delete('/api/user/' + id);
            },
            update: function(id, userData) {
            	return $http.put('/api/user/' + id, userData)
            }
            
        }
    });
