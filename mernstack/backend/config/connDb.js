

const mongoose = require('mongoose');

//connect  to  mongoose
const  connectDB  =  async () => {
    
     try {
       const   connect  =  await  mongoose.connect(process.env.MONGO_URL)
       console.log("connected to  database")
     } catch (error) {
        
        console.log( "database  connection   was  not  established ")
        process.exit(1);
     }
}

module.exports =  connectDB;