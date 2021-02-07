const Product = require("../model/product_model");
const constant = require("../constant/constant");


exports.addproduct = (req,res)=>{
    new Product(req.body).save().then(product=>{
        res.status(200).send({message:constant.ADDED_SUCCESS,'data':product})

    }).catch(err=>{
        res.status(constant.DATABASE).send({message:err.message || constant.DATABASE_ERROR})
    })
}

exports.getUserProducts = (req,res)=>{
    Product
    .find({added_by:req.params._id})   
    .then(result=>{
       res.status(constant.SUCCESS_CODE).send({message:constant.RECORD_FOUND,'data':result})
    }).catch(err=>{
       res.status(constant.DATABASE).send({message:err.message || constant.DATABASE_ERROR})
    })
 }