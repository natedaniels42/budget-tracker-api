const mongoose = require('mongoose');

const DepositSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    amount: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: new Date().toDateString()
    }
})

const Deposit = mongoose.model('Deposit', DepositSchema);

module.exports = Deposit;