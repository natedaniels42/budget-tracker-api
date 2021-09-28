const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.deposits.index);
router.post('/', ctrl.deposits.create);
router.put('/:id', ctrl.deposits.update);
router.delete('/:id', ctrl.deposits.destroy);

module.exports = router;