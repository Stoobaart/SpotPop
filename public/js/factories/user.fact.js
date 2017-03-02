angular
	.module('SpotPop')
	.factory('User', userFactory)

function userFactory(API, $http) {
	// return $resource(API + '/users/:id', { id: '@id' }, { 
	// 	'getAll': { method: 'GET', isArray: false },
	// 	'get': { method: 'GET' },
	// 	'create': { method: 'POST'},
	// 	'delete': { method: 'DELETE'},
	// 	'update': { method: 'PATCH'}
	// })
	return {
		getAll: function() {
			return $http.get(API + '/users')
		},
		get: function(id) {
			return $http.get(API + '/users/' + id)
		},
		create: function(newUser) {
			return $http.post(API + '/users', newSpot)
		},
		delete: function(id) {
			return $http.delete(API + '/users/' + id)
		},
		update: function(id, updatedUser) {
			return $http.patch(API + '/users/' + id, updatedUser)
		}
	}
}