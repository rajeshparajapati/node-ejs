const mongoose = require("mongoose");

let productModel = new mongoose.Schema({
    product_name:{
        type:String,
        required:true
    },
    product_hsn: {
        type:String,
        required:true
    },
    product_qty:{
        type:Number,
        required:true
    },
    status:{
        type:Number,
        default:1
    },
    added_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    }
    
});

module.exports = mongoose.model('product',productModel);