const express=require("express");
const app=express();
require('dotenv').config();
const cors=require("cors");
const connect=require("./DataBaseConnection/dbConnection");

connect();
app.use(express.json());
app.use(cors());
// app.use('/auth',require("./Routes/Authentication"))
app.use('/auth',require("./Routes/authorization"))
app.use('/music',require("./Routes/music"))

app.listen(process.env.PORT,()=>{
    console.log("listening on the port",process.env.PORT);
});
