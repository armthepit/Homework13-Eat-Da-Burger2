/*
Below are the routes which will be needed by the app
*/
var express = require('express');
var router = express.Router();
var models = require('../models');

// Routes when user goes to the main page
router.get('/', function (request, result) {
	result.redirect('/burgers');
});

// Route to pull all order
router.get('/burgers', function (request, result) {
	models.burger.findAll({
	}).then(function(data){
		var hbsObject = { burgers: data };
		result.render('index', hbsObject);
	});
});

// Route to add an order to the burger database
router.post('/burgers/create', function (request, result) {
	models.burger.create({burger_name: request.body.burger_name, devoured: request.body.devoured}).then(function(){
		result.redirect('/burgers');
	});
});

// Route to update burger databse when order picked up
router.put('/burgers/update/:id', function (request, result) {
	models.burger.update({ devoured: request.body.devoured }, { where: {id: request.params.id} }).then(function(){
		result.redirect('/burgers');
	});
});

// Route to delete future feature
router.delete('/burgers/delete/:id', function (request, result) {
	models.burger.destroy({where: {id:request.params.id}}).then(function() {
		result.redirect('/burgers');
	});
});

module.exports = router;