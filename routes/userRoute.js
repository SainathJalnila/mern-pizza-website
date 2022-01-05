const express = require("express");
const user = require("../models/user");

const route = express.Router();


route.post("/register" ,  async(req, res)=>{


    const {name , email , password} = req.body;
    const newUser = new user({name, email , password})
    try {
        newUser.save();
        res.send("User Register SuccessFully");
    } catch (error) {
        return res.status(400).json({message:error})
        
    }
});

route.post("/login",  async(req, res) => {
   const { email , password } = req.body;
   try {
       const User = await user.find({email, password});
       if(User.length>0){
           const currentUser = {
               name: User[0].name,
               email: User[0].email,
               isAdmin: User[0].isAdmin,
               _id: User[0]._id
           }
           res.send(currentUser);
        
       }
       else{
           res.status(400).json({message:"Login failed"});
       }
   } catch (error) {
       console.log(error);
       
   }
})



route.get("/getalluser", async (req, res) => {
  try {
    const response = await user.find({});
    res.send(response);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
})
  
route.post("/deleteUser", async (req, res) => {
    const userid = req.body.userid
    try {
      const response = await user.findOneAndDelete({_id: userid});
      res.send("User Deleted Successfully");
    } catch (error) {
      return res.status(404).json({ message: error });
    }
  });

 

module.exports = route;