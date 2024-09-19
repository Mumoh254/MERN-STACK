

const mongoose = require('mongoose');

const    taskSchema   =   mongoose.Schema({

    name:{
        Type:  "String",
        required:  [
            true ,  "  please  input  your   name "
        ]
    },
    description:{
          
       type:"String",
       required:  [
        true  , " please   your   required  input  is  needed  "

       ]
    },

    

})