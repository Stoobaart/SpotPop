var Spot = require('../models/spot');

function indexSpots(req, res) {
	res.send('index');
}

function showSpots(req, res) {
	res.send('show');
}

function newSpots(req, res) {
	res.send('new');
}

function createSpots(req, res) {
	res.send('create');
}

function editSpots(req, res) {
	res.send('edit');
}

function updateSpots(req, res) {
	res.send('update');
}

function deleteSpots(req, res) {
	res.send('delete');
}

module.exports = {
	index: indexSpots,
	show: showSpots,
	new: newSpots,
	create: createSpots,
	edit: editSpots,
	update: updateSpots,
	delete: deleteSpots
}