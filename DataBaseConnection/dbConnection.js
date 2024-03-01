const mongoose=require("mongoose");

const connect=async()=>{
    try{
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("DB Connected Succesfully");
    }
    catch(error){
        console.log("Connected Error");
    }
};
module.exports=connect;