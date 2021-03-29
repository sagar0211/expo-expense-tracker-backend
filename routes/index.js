const router = require('express').Router();
const addTransaction = require('./addTransection/add')

router.get('/',(req,res)=>{
    res.send("api called succfully");
})
router.get('/add',addTransaction.newTransaction)

module.exports = router