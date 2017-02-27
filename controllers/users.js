var User = require('../models/user');

function indexUsers(req, res) {
	res.send('index');
}

function showUsers(req, res) {
	res.send('show');
}

function newUsers(req, res) {
	res.send('new');
}

function createUsers(req, res) {
	res.send('create');
}

function editUsers(req, res) {
	res.send('edit');
}

function updateUsers(req, res) {
	res.send('update');
}

function deleteUsers(req, res) {
	res.send('delete');
}

module.exports = {
	index: indexUsers,
	show: showUsers,
	new: newUsers,
	create: createUsers,
	edit: editUsers,
	update: updateUsers,
	delete: deleteUsers
}