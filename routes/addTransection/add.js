const Transactions = require('../../models/transaction');

const newTransaction = async (req,res) => {
    const response = await Transactions.create({
        amount:req.body.amount,
        type:req.body.type,
        title:req.body.title,
        addedDate:new Date()
    })
    res.send(response);
}

module.exports = {
    newTransaction
}