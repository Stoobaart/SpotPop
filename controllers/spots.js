var Spot = require('../models/spot');
var User = require('../models/user');

function indexSpot(req, res) {
	Spot.find({}, function(err, spots) {
		if (err) return res.json({message: 'Could not find any spots'});
		res.json({spots: spots});
	})
}

function showSpot(req, res) {
	// Spot.find({}, function(err, spots) {
	// 	if (err) return res.json({message: 'Could not find any spots'});
	// 	res.json({spot: spot});
	// })
}

function getMySpots (req, res) {
	User.findOne({uid: req.params.uid }).populate('spot').exec(function (err, user) {
		if (err) {
			console.log(err)
			return res.status(500).json(err)
		}
		console.log(user)
		res.json(user)
	})
}

function newSpot(req, res) {
	res.send('new');
}

function createSpot(req, res) {
	console.log(req.body)
	User.findOne({ uid: req.body.uid }, function (err, user ) {
		if (err) return res.status(500).json(err)

		var newSpot = new Spot(req.body.spot)
		user.spot.push(newSpot._id)

		newSpot.save(function (err) { 
			console.log(err)
			if (err) return res.status(500).json(err) 
		});
		user.save(function (err) { 
			console.log(err)
			if (err) return res.status(500).json(err) 
		});
		res.json(newSpot)
	})
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
	getMySpots: getMySpots,
	show: showSpot,
	new: newSpot,
	create: createSpot,
	edit: editSpot,
	update: updateSpot,
	delete: deleteSpot
}