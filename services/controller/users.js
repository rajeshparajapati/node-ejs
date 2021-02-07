const userModel = require("../model/user_model");
const constant = require('../constant/constant');
const bcrypt = require('bcrypt');

exports.registration = (req,res)=>{   
    userModel.findOne({email:req.body.email}).then( async user=>{         
       if(!user){
         let  password = await bcrypt.hashSync(req.body.password,constant.SALT);
         registration = {
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            password:password,
            contact:req.body.contact            
         }
         new userModel(registration).save().then(user=>{
            req.session.user = user;
            res.status(constant.SUCCESS_CODE).send({message:constant.ADDED_SUCCESS})
         }).catch(err=>{
            res.status(constant.DATABASE).send({message:constant.DATABASE_ERROR});
         })
       }else {
         res.status(constant.ALREADY_EXIST).send({message:constant.ALREADY_EXIST_MSG})
       }
    }).catch(err=>{
       res.status(constant.ERROR_CODE).send({message:err.message || constant.DATABASE})
    })
}

exports.login = (req,res)=>{
   userModel.findOne({email:req.body.email}).then( async user=>{
      console.log(user.password);
      if(user.length ==0){
         return res.status(constant.NOT_FOUND).send({message:constant.USER_NOT_FOUND})
      }else{
         if(user.status==0){
            return res.status(constant.INACTIVATE).send({message:constant.USER_INACTIVETED})
         } else{
          passwordCompare = await  bcrypt.compareSync(req.body.password,user.password);
          if(passwordCompare){
            req.session.user = user;
            return res.redirect('/dashboard')
           
          }else{
             res.status(constant.INVALID_USER).send({message:constant.INVALID_USER_MSG})
          }
         }
      }
   }).catch(err=>{
      res.status(constant.DATABASE).send({message:err.message || constant.DATABASE_ERROR});
   })
}


