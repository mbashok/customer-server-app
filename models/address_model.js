const mongoose = require('mongoose');
var AddressSchema =  new mongoose.Schema({
	address1:{
		type: String
	},
	address2:{
		type: String
	},
	city:{
		type: String
	},
	state:{
		type: String
	},
	zipcode:{
		type: String
	},
	country:{
		type: String
	},
	customer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer'
    }

});

module.exports = mongoose.model("Address", AddressSchema);