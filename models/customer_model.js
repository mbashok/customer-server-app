const mongoose = require('mongoose');
var CustomerSchema =  new mongoose.Schema({
	customerId:{
		type: String,
		required: true
	},
	name:{
		type: String,
		required: true
	},
	age:{
		type: Number,
		required: true
	},
	gender:{
		type: String,
		required: true
	}

});

module.exports = mongoose.model("Customer", CustomerSchema);