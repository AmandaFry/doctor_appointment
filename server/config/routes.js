var users = require('../controllers/users_controller.js');

module.exports = function(app){

	app.post('/users/create', function(req, res) {
        users.create(req, res);
    });

	app.post('/new_appointment', function(req,res){
		console.log('got to to routse ')
		console.log(req.body)
	})

}