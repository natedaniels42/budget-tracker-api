const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
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

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;