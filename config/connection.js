var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'homework',
		password: 'homework',
		database: 'burgers2_db'
	});
};

connection.connect(function (error) {
	if (error) {
		console.error('error connecting: ' + error.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;