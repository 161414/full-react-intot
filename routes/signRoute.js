const express=require("express");
const router=express.Router();
const Sign = require("../models/signupModel");

router.route("/create").post((req,res)=>
{
    const name=req.body.name;
    const email=req.body.email;
    const psw=req.body.psw;
    const psw_repeat=req.body.psw_repeat;
    const newSign= new Sign({
        name,
        email,
        psw,
        psw_repeat
    });
    newSign.save();

})

module.exports=router;