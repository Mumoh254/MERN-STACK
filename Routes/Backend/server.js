const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const  app  =   express();
//middlewares
app.use(express.json());

const  logger  =  (req  ,  res  ,  next) =>{
    console.log("middle  ware    function")
    console.log(req.method)
    next();
}


//port
const  PORT   =   process.env.PORT  ||    5000


//routes
app.get("/" , logger  ,  (req , res)=>{
 
    res.send({
        message:  "middleware  checked "
    })
   
})

app.post("/api/tasks"  , async  (req , res)=>{

    let  tasks = req.body  
    console.log(tasks)
    res.send({
        message:  "tAsk  Created"
    })
})


mongoose.connect(process.env.MONGO_URL )
.then(()  =>{
    console.log("connected   to   database ")
    
app.listen(process.env.PORT  ,  ()=>{
    console.log(`  server   running  on  port   ${PORT}`)
})


})

.catch((err)=>{
    console.log(err)
})
