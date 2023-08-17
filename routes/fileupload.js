const express =require("express");
const router=express.Router();
const {localfileupload,videoupload,imgupload}=require("../controllers/fileupload");
const {imgsizereducer}= require("../controllers/fileupload");



router.post("/localfileupload",localfileupload);
router.post("/imgupload",imgupload);
router.post("/videoupload",videoupload);
router.post("/imgsizereducer",imgsizereducer);
module.exports=router; 