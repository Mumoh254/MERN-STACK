
const express = require('express');
const mongoose = require('mongoose');
 const  dotenv = require('dotenv').config();
const  connectDB   =  require('./config/connDb')
 //express  object
 const   app  =  express();

 //port  number
 const  PORT   =  process.env.PORT  ||   5000;

const  fireServer =   async   ()  =>{
   try {
    
    await  connectDB();
    
app.listen(process.env.PORT , ()=>{
    console.log(`server   running  on  port  ${PORT}`)
})


   } catch (error) {
      console.log(error)
   }

}

fireServer();
