const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.transactions.index);
router.post('/', ctrl.transactions.create);
router.put('/:id', ctrl.transactions.update);
router.delete('/:id', ctrl.transactions.destroy);

module.exports = router;