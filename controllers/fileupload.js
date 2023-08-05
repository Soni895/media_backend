const file=require("../models/file");
exports.localfileupload=(req,res)=>
{
    try {

        // fatch file
        const file= req.files.file;
        console.log(file);

        const path=__dirname+"/files/"+Date.now()+`.${file.name.split(".")[1]}`;

     
        console.log(`file path => ${path} and current path => ${__dirname} and file name ${__filename} `);
        file.mv(path,(error)=>
        {
            console.log(error);
        })

        res.json(
            {
                status:true,
                message:"file upload successful"

            }
        );
        
    } catch (error) {
        console.log(error);
        res.json(
            {
                status:false,
                message:"file upload successful"
            }
        )
        
    }

}

// image upload handler
exports.imgupload=async (req,res)=>
{
try {
    
const {name,tags,email}=req.body;
console.log(name,tags,email);
const file=req.files.imgfile;
console.log(file);

const support=["jpg","jpeg","png"];
const file_type=`${file.name.split(".")[1].tolowerCase()}`;
console.log(type);
if(support.includes(file_type))
{

}
else{
    return res.json(
        {
            status:"unsuccessful",
            error:"file not support"
        }
    )
}


} catch (error) {
    console.log(error);
  return  res.json(
        {
            status:false,
            message:"file upload successful"
        }
    )
}

}