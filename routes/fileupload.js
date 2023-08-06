const express =require("express");
const router=express.Router();
const {localfileupload,imgupload}=require("../controllers/fileupload");

router.post("/localfileupload",localfileupload);
router.post("/imgupload",imgupload);
module.exports=router; 