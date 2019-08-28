var mysql =  require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'belajar_express'
})

connection.connect();

module.exports = connection;