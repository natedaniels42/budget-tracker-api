const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.deposits.index);

module.exports = router;