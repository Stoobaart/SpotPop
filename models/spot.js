var mongoose = require('mongoose');

var SpotSchema = new mongoose.Schema({
	title: { 
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	},
	timeAndDate: {
		type: Date
	},
	video: {
		type: String
	},
	location: {
		type: String
	}
});

module.exports = mongoose.model('Spot' , SpotSchema);