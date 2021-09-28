const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.deposits.index);
router.post('/', ctrl.deposits.create);
router.put('/:id', ctrl.deposits.update);

module.exports = router;