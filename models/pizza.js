const { Mongoose } = require("mongoose");
const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const pizzaModel = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    varients:{
        type:[],
        required:true,
      },
      prices:{
        type:[],
        required:true,
        
    },
    category:{
        type:String,
        required:true,
    },
    description:{
        type:String, 
        required: true
    },
    image:{
        type:String,
        require: true
    }
});

//Export the model
module.exports = mongoose.model('Sales', pizzaModel , "sales");