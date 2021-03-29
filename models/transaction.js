const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transaction = new Schema({
    type:{
        type:Number,
        required:true,
        enum:[-1,1]
    },
    amount:{
        type:Number,
        required:true,
        default:0
    },
    title:{
        type:String,
        required:true
    }
},{
    collection:'transactions',
    versionKey:false,
    timestamps:{
        addedDate:'addedDate'
    }
})

module.exports = mongoose.model("Transactions", transaction);
