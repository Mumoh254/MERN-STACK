const mongoose = require('mongoose');

//create  a  scheme  logical  of  a  database

const   taskSchema  = mongoose.Schema({
    name:{
        //costings
        type:String,
        require: [
            true ,  "Please add  a  task"
        ]
    },

    //schema    skeletal   structure  o f the   data  is   going  to     be    structured    ot    stored  in  the  database

    completed: {
        Type:  Boolean,
        required: true,
        default:  false
    }
} , {timestamps: true})

const  taskModel  =   mongoose.model("Tas"  ,  taskSchema);

module.exports  =  taskModel;
