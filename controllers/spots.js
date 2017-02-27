var Spot = require('../models/spot');

function indexSpot(req, res) {
	res.send('Spots index page');
}

function showSpot(req, res) {
	Spot.find(function(err, spots) {
		if (err) response.json({message: 'Could not find any spots'});
		response.json({spots: spots});
	})
}

function newSpot(req, res) {
	res.send('new');
}

function createSpot(req, res) {
	res.send('create');
}

function editSpot(req, res) {
	res.send('edit');
}

function updateSpot(req, res) {
	res.send('update');
}

function deleteSpot(req, res) {
	res.send('delete');
}

module.exports = {
	index: indexSpot,
	show: showSpot,
	new: newSpot,
	create: createSpot,
	edit: editSpot,
	update: updateSpot,
	delete: deleteSpot
}