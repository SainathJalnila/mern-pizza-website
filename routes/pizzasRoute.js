
const express = require("express");

const pizzas = require("../models/pizza");
const router = express.Router();

router.get("/getAllPizzas", async(req, res) => {
    try {
        const PizzaData = await pizzas.find({})
        res.send(PizzaData)
        
    } catch (error) {
        return res.status(400).json({message: "this is an erro"})
    }
    
});
router.post("/addnewpizza" ,  async(req, res)=>{

    const {pizza} = req.body;
    console.log(pizza.name);
   
    try {
       
        const newPizza = new pizzas({
            name: pizza.name,  
            image:pizza.image,
            description: pizza.description,
            category: pizza.category,
            varients:['small', 'medium' , 'large'],
            prices: [pizza.prices]
        })
      await  newPizza.save();
        res.send("Pizza Added SucessFully");
    } catch (error) {
        return res.status(400).json({message: "Something Went wrong "+error})
        
    }
});
router.post("/getpizzabyid" , async(req,res)=>{
    const pizzaid = req.body.pizzaid;
    try {
        const response = await pizzas.findOne({_id:pizzaid})
        res.send(response);
    } catch (error) {
        return res.status(400).json({message: error})
    }
})
router.post("/editedpizza", async(req , res) => {
    const editedPizza = req.body.editedPizza;
    
    try {
        const response = await pizzas.findOne({_id:editedPizza._id});
        response.name = editedPizza.name
        response.description = editedPizza.description,
        response.image = editedPizza.image,
        response.category = editedPizza.category,
        response.prices=[editedPizza.prices]

      await  response.save()
      res.send("Pizza details successFully saved")


        
    } catch (error) {
        return res.status(404).json({message: "Something went wrong"+error})
    }

})

router.post('/deletepizza' , async (req, res) => {
    const pizzaid = req.body.pizzaid;
    try {
        const response = await pizzas.findByIdAndDelete({_id:pizzaid});
        res.send("Pizza deleted successfully");
    } catch (error) {
        return res.status(404).json({message: "something went wrong"})
        
    }
})
module.exports = router;

