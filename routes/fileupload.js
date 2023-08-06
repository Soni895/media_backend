const express =require("express");
const router=express.Router();
const {localfileupload,imgupload,videoupload}=require("../controllers/fileupload");

router.post("/localfileupload",localfileupload);
router.post("/imgupload",imgupload);
router.post("/videoupload",videoupload)
module.exports=router; 