const mongoose=require("mongoose");
const nodemailer = require('nodemailer');
const fileschema=new mongoose.Schema(
    {
        name:
        {
            type:String,
            reqired:true,
             
        },
        imgurl:
        {
            type:String,

        },
        tags:
        {
            type:String,
        },
        email:
        {
            type:String,
            required:true,
            
        }});

        fileschema.post("save",async function(doc)
        {
            try {
                console.log(doc);

                // create transporter
                
            } catch (error) {
                console.log(error);
                
            }
        });
// module.exports=mongoose.model("fileschema",fileschema);
const file=mongoose.model("files",fileschema);
module.exports=file;

