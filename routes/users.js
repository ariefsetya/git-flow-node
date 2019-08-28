var express = require('express')
var router = express.Router();

var user_controller = require('./controllers/users');

router.get('/',user_controller.index);
router.get('/:id',user_controller.detail);
router.post('/',user_controller.store);
router.put('/:id',user_controller.update);
router.delete('/:id',user_controller.delete);

module.exports = router;