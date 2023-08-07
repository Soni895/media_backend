const mongoose=require("mongoose");
const nodemailer = require('nodemailer');
require("dotenv").config();
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
                const mail_host=process.env.mail_host;
                const mail_user=process.env.mail_user;
                const mail_pass=process.env.mail_pass;

                console.log(mail_host,mail_pass,mail_user);


                // create transporter

                const transporter=nodemailer.createTransport(
                    {
                        host: mail_host,
                        auth: {
                          user: mail_user,
                          pass: mail_pass,
                    }
                });
                const mailOptions = {
                    from:`darshan soni`,
                    to: doc.email,
                    subject: "email testing",
                    html:`<img src=${doc.imgurl}>` 
                  };
                const info= await transporter.sendMail(mailOptions);
                console.log(info);
                
            } catch (error) {
                console.log(error);
                
            }
        });
// module.exports=mongoose.model("fileschema",fileschema);
const file=mongoose.model("files",fileschema);
module.exports=file;

