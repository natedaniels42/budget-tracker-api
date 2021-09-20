const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.transactions.index);
router.post('/', ctrl.transactions.create)

module.exports = router;