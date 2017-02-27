var User = require('../models/user');

// function indexUser(req, res) {
// 	User.find(function(req, res) {
// 		if (err) return res.json(err + {message: 'Oh no! something has gone wrong!'})
// 		res.json({})
// 	})
// }

function showUser(req, res) {
	User.find({ id: req.params.id } , function(err, user) {
		if (err) res.json({message: 'Could not find a user', err : err});
		res.json({user: user});
	})
}

function createUser(req, res) {
	User.create( req.body, function (err, user){
		if(err) return res.json({message: 'Could not create user', err : err});
		res.json(user)
	});
}

function editUser(req, res) {
	User.find(function(err, user) {
		if (err) return res.json({message: 'Could not find user', err : err});
		res.json({user: user});
	})
}

function updateUser(req, res) {
	User.update(function(err, user) {
		if (err) return res.json ({message: 'Could not update this user', err : err})
		res.json({user: user})
	})
}

function deleteUser(req, res) {
	res.send('delete');
}

module.exports = {
	// index: indexUser,
	show: showUser,
	create: createUser,
	edit: editUser,
	update: updateUser,
	delete: deleteUser
}