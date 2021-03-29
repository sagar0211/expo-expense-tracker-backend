const Transactions = require('../../models/transaction');

const newTransaction = async (req,res) => {
    const response = await Transactions.create({
        amount:req.body.amount,
        type:req.body.type,
        title:req.body.title
    })
    res.send(response);
}

const fetchTransactions = async (req,res) => {
    try {
        const resp = await Transactions.find({})
            .skip(0)
            .limit(10)
            .sort({createdAt:-1})
        res.status(200).send(resp);
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = {
    newTransaction,fetchTransactions
}