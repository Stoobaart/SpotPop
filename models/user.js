var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	tagName: {
		type: String,
		required: true,
		unique: true
	},
	uid: {
		type: String
	},
	spots : [{ 
		type: mongoose.Schema.Types.ObjectId, 
		ref: "Spot" 
	}],
	friends : [{ 
		type: mongoose.Schema.Types.ObjectId, 
		ref: "User" 
	}]

})

module.exports = mongoose.model('User' , UserSchema);