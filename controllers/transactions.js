const db = require('../models');

const index = (req, res) => {
    db.Transaction.find({}, (err, foundTransactions) => {
        if (err) console.log(`Error in transaction index: ${err}`);

        res.status(200).json(foundTransactions);
    })
}

const create = (req, res) => {
    db.Transaction.create(req.body, (err, createdTransaction) => {
        if (err) console.log(`Error in transaction create: ${err}`);

        res.status(200).json(createdTransaction);
    })
}

const update = (req, res) => {
    db.Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedTransactioñ) => {
        if (err) console.log(`Error in transaction update: ${err}`);

        res.status(200).json(updatedTransactioñ);
    })
}

module.exports = {
    index,
    create,
    update,
}