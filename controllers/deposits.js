const db = require('../models');

const index = (req, res) => {
    db.Deposit.find({}, (err, foundDeposits) => {
        if (err) console.log(`Error in deposit index: ${err}`);

        res.status(200).json(foundDeposits);
    })
}

const create = (req, res) => {
    db.Deposit.create(req.body, (err, createdDeposit) => {
        if (err) console.log(`Error in deposit create: ${err}`);

        res.status(200).json(createdDeposit);
    })
}

const update = (req, res) => {
    db.Deposit.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedDeposit) => {
        if (err) console.log(`Error in deposit update: ${err}`);

        res.status(200).json(updatedDeposit);
    })
}

const destroy = (req, res) => {
    db.Deposit.findByIdAndDelete(req.params.id, (err, deletedDeposit) => {
        if (err) console.log(`Error in depost destroy: ${err}`);

        res.status(200).json(deletedDeposit);
    })
}

module.exports = {
    index,
    create,
    update,
    destroy,
}