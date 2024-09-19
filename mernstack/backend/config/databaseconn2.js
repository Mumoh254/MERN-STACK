

const mongoose = require('mongoose');
const express = require('express');

const  app   =   express();
const PORT  =  process.env.PORT  ||  5000
mongoose.connect(process.env.MONGO_URL)
.then(()=>{

    app.listen( process.env.PORT()=>{

    })
})
.catch((err)=>{
    console.log(err)
})