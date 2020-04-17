const express = require('express');
const router = express.Router();
const Customer = require('../models/customer_model');

// Get customers list
router.get('/', (req, res, next)=>{
	Customer.find( {}, (err, results)=>{
		if(err){
    		console.log('Error: ', err);
    		res.status(500).send({message: 'Retrive failed.'});
    	}
    	else{
    		res.status(200).send({customers: results});
    	}

	});
});

// Add customer info
router.post('/', (req, res)=>{
	console.log("req obj: ", req.body);
    const customer = new Customer({
    	customerId: req.body.customerId,
    	name: req.body.name,
    	age: req.body.age,
    	gender: req.body.gender
    });
    customer.save( (err, result)=> {
    	if(err){
    		console.log('Error: ', err);
    		res.status(500).send({message: 'Save failed.'});
    	}
    	else{
    		res.status(200).send({message: 'Saved successfully.'});
    	}
    });
});

module.exports = router;