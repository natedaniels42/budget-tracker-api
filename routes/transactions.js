const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.transactions.index);

module.exports = router;