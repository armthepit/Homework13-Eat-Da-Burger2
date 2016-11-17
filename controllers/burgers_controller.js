/*
Below are the routes which will be needed by the app
*/
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// Routes when user goes to the main page
router.get('/', function (request, result) {
	result.redirect('/burgers');
});

// Route to pull all order
router.get('/burgers', function (request, result) {
	burger.findAll({
	}).then(function(result){
		var hbsObject = { burgers: result };
		result.render('index', hbsObject);
	});
});

// Route to add an order to the burger database
router.post('/burgers/create', function (request, result) {
	burger.create({burger_name: request.body.name, devoured: request.body.devoured}).then(function(){
		res.redirect('/burgers');
	});
});

// Route to update burger databse when order picked up
router.put('/burgers/update/:id', function (request, result) {
	burger.update({ devoured: 1 }, { where: {id: request.params.id} }).then(function(){
		res.redirect('/burgers');
	});
});

module.exports = router;