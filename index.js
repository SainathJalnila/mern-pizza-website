const express = require('express');
const mongoose = require('mongoose');
const app = express()
const PizzaRoute = require('./routes/pizzasRoute');
const UserRoute = require('./routes/userRoute');
const OrderRoute = require('./routes/orderRoute');
const port = 4545;  
app.use(express.json())
app.use('/', PizzaRoute);
app.use('/user/' , UserRoute);
app.use('/' , OrderRoute);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
 
const db = "mongodb://SainathJalnila:Honda7440@cluster0-shard-00-00.bjk7t.mongodb.net:27017,cluster0-shard-00-01.bjk7t.mongodb.net:27017,cluster0-shard-00-02.bjk7t.mongodb.net:27017/mern-pizza?ssl=true&replicaSet=atlas-48lh99-shard-0&authSource=admin&retryWrites=true&w=majority";

const atlasdb = 'mongodb+srv://SainathJalnila:Honda7440@cluster0.bjk7t.mongodb.net/ZomatoClone?retryWrites=true&w=majority';

// Connect MongoDB at default port 27017.
mongoose.connect(db, {
    
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});
