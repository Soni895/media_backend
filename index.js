const express=require("express");
require("dotenv").config();
const port=process.env.port;
const {db_connect}=require("./config/db_connect");
const app=express();
app.listen(port,()=>
{
    console.log("servers start");
});
app.get("*",(req,res)=>
{
    res.send("hi");

});
db_connect();
