const express=require("express");
const router=express.Router();
const User = require("../Models/userModel");


router.get("/:id",async(req,res)=>{
    const id = req.params.id
    const user=await User.findById(id);
    res.status(200).json(user);
});

router.get("/",async(req,res)=>{
    const user=await User.find();
    res.status(200).json(user);
});

router.post("/post",async(req,res)=>{
    const{username,email,password}=req.body;
    const user=await User.create({username,email,password});
    res.status(200).json(user);
})

router.put("/:id",async(req,res)=>{
    const {username,email} =req.body;
    const user=await User.findByIdAndUpdate(req.params.id,{username,email},{new:true});
    res.status(200).json(user);
})
router.delete("/:id",async(req,res)=>{
    const id=req.params.id;
    const user=await User.findByIdAndDelete(id);
    res.status(200).json(user);
})

module.exports=router;