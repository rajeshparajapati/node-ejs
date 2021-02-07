const mongoose = require("mongoose")

userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    status:{
        type:Number,
        default:1
    },
    date:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model('users',userSchema);