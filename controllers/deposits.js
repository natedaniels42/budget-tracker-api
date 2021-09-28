const db = require('../models');

const index = (req, res) => {
    db.Deposit.find({}, (err, foundDeposits) => {
        if (err) console.log(`Error in deposit index: ${err}`);

        res.status(200).json(foundDeposits);
    })
}

module.exports = {
    index,
}