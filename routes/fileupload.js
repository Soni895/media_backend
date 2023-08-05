const express =require("express");
const router=express.Router();
const {localfileupload}=require("../controllers/fileupload");

router.post("/localfileupload",localfileupload);
module.exports=router; 