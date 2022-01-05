const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserSchema =new schema({
    name:{
        type: String, 
        require: true
    },
    email:{
        type: String, 
        require: true
    },
    password:{
        type: String, 
        require: true
    },
    isAdmin:{
        type: Boolean,
        require: false,
        default: false}   
} , {timestamps: true});

module.exports = mongoose.model('user', UserSchema , 'user');