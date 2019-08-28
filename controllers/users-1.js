var db = require('../config/connection')

exports.index = function (req,res) {
	db.query('SELECT * FROM users',function(err, result) {
		if(err) res.status(500).send({'result':err})

		res.status(200).send({'result':result})
	})
}