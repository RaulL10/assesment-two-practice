var express = require('express');
var router = express.Router();

const groceriesCtrl = require('../controllers/groceries')

router.get('/', groceriesCtrl.index)
router.post('/', groceriesCtrl.create)
router.delete('/:id', groceriesCtrl.delete)
router.get('/:id/edit', groceriesCtrl.edit);
router.put('/:id', groceriesCtrl.update);



/* GET home page. */


module.exports = router;
