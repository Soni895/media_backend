const express=require("express");
require("dotenv").config();
const port=process.env.port;
const {db_connect}=require("./config/db_connect");
const {cloudinary}=require("./config/coloudinary");
const fileupload=require("express-fileupload");
app.use(fileupload());
app.use(express.json());
const app=express();

app.use(fileupload({
    limits: { fileSize: 50 * 1024 * 1024 },
  }));
app.use("/fileupload",)
app.listen(port,()=>
{
    console.log("servers start");
});
app.get("*",(req,res)=>
{
    res.send("hi");

});
db_connect();
cloudinary();
