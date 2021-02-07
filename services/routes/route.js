const express = require("express");
const route = express.Router();
const renderService = require('../service/render');
const User = require("../controller/users");
const Product = require("../controller/products");
const loginCheck = require("../middleware/utility")


route.get('/dashboard',loginCheck.loginChecker,renderService.home);

route.get('/add_user',renderService.addUser);

route.get('/update_user',loginCheck.loginChecker,renderService.updateUser);

route.get('/login_user',loginCheck.existLogin,renderService.addUserform)








/**
 * @description: add user api
 */

 route.post('/add_user',(req,res)=>{
     console.log(req.body)
     res.send({message:"donw"})
 })


/**
 * @description : registration user api
 * @method : POST api/registation
 */

 route.post('/api/registration',User.registration);

 /**
  * @description: login user
  * @method : POST api/login
  */

  route.post('/api/login',User.login);


   /**
  * @description: get product by user object id
  * @method : POST api/get_product_by_user
  */

  route.get('/api/product/get_product_by_user/:_id',Product.getUserProducts);


   /**
  * @description: add product 
  * @method : POST api/product/addproduct
  */

 route.post('/api/product/addproduct',Product.addproduct);


 

module.exports = route;