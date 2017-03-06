var User = require('../models/user');

function indexUser(req, res) {
	User.find({}, function(err, users) {
		if (err) return res.json({message: 'Could not find any users'});
		res.json({ users: users });
	})
}

function showUser(req, res) {
	User.findOne({ uid: req.params.id } , function(err, user) {
		if (err) res.json({message: 'Could not find a user', err : err});
		res.json({user: user});
	})
}

function createUser(req, res) {
	console.log(req.body)
	User.create(req.body, function (err, user) {
		if (err) console.log(err)
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

function addFriend(req, res) {
	User.findOneAndUpdate(
		{uid: req.params.id}, 
		{$addToSet : { friends: req.body.id}}, 
		{new: true}, 
		function(err, newUser) {
			if (err) return res.status(500).json({ error: err});
			return res.status(200).json({updatedUser: newUser});
		}
	)
}

module.exports = {
	index: indexUser,
	show: showUser,
	create: createUser,
	edit: editUser,
	update: updateUser,
	delete: deleteUser,
	friend: addFriend
}