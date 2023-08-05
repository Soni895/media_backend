const mongoose=require("mongoose");
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
// module.exports=mongoose.model("fileschema",fileschema);
const file=mongoose.model("files",fileschema);
module.exports=file;

