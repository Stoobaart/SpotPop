angular
	.module('SpotPop')
	.factory('Spot', spotFactory)

// function spotFactory(API, $resource) {
// 	return $resource(API + '/spots/:id', { id: '@id' }, { 
// 		'getAll': { method: 'GET', isArray: false },
// 		'get': { method: 'GET' },
// 		'create': { method: 'POST'},
// 		'delete': { method: 'DELETE'},
// 		'update': { method: 'PATCH'}
// 	})
// }

function spotFactory(API, $http) {
	return {
		getAll: function() {
			return $http.get(API + '/spots')
		},
		get: function(id) {
			return $http.get(API + '/spots/' + id)
		},
		create: function(newSpot) {
			return $http.post(API + '/spots', newSpot)
		},
		delete: function(id) {
			return $http.delete(API + '/spots/' + id)
		},
		update: function(id, updatedSpot) {
			return $http.patch(API + '/spots/' + id, updatedSpot)
		},
		getMySpots: function(id) {
			return $http.get(API + '/my-spots/' + id)
		}
	}
}