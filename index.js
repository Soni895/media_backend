const express=require("express");
require("dotenv").config();
const port=process.env.port;
const {db_connect}=require("./config/db_connect");
const {cloudinary}=require("./config/coloudinary");
const fileupload=require("express-fileupload");
const app=express();
app.use(fileupload(
    {
        useTempFiles : true,
        tempFileDir : '/tmp/'
    }
));
app.use(express.json());

const router=require("./routes/fileupload");

app.use("/api/v1/fileupload",router);
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
