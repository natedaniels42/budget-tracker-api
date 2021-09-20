const db = require('../models');

const index = (req, res) => {
    db.Transaction.find({}, (err, foundTransactions) => {
        if (err) console.log(`Error in transaction index: ${err}`);

        res.status(200).json(foundTransactions);
    })
}

module.exports = {
    index,
}