const express = require('express');
const router = express.Router();
const Address = require('../models/address_model');

// Get all address of a customer
router.get('/:id/addresses', (req, res, next)=>{
	Address.find( {customer_id:req.params.id}, (err, results)=>{
		if(err){
    		console.log('Error: ', err);
    		res.status(500).send({message: 'Error fetching address info.'});
    	}
    	else{
    		res.status(200).send({addresses: results});
    	}
	});
});

// Add an address of a customer
router.post('/:id/addresses', (req, res)=>{
	const customer_id = req.params.id
    const address = new Address({
        customer_id: customer_id,
    	address1: req.body.address1,
    	address2: req.body.address2,
    	city: req.body.city,
    	state: req.body.state,
        zipcode: req.body.zipcode,
        country: req.body.country
    });
    address.save( (err, result)=> {
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