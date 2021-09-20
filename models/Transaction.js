const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;