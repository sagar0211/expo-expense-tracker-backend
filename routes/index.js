const router = require('express').Router();
const transact = require('./transactions/transact')

router.get('/',(req,res)=>{
    res.send("api called succfully");
})

router.get('/transactions',transact.fetchTransactions)
router.post('/add',transact.newTransaction)


module.exports = router