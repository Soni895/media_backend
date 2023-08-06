const  cloudinary  = require("cloudinary").v2;
const File=require("../models/file");
exports.localfileupload=(req,res)=>
{
    try {

        // fatch file
        const file= req.files.file;
        console.log(file);

        const path=__dirname+"/files/"+Date.now()+`.${file.name.split(".")[1]}`;

     
        // console.log(`file path => ${path} and current path => ${__dirname} and file name ${__filename} `);
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
                message:"file upload unsuccessful"
            }
        )
        
    }

}
async function fileupload(file,folder)
{
    const option={folder};

 
    return  response = await cloudinary.uploader.upload(file.tempFilePath,option);

}

// image upload handler
exports.imgupload=async (req,res)=>
{
try {
    
const {name,tags,email}=req.body;
// console.log(name,tags,email);
const file=req.files.imgfile;
console.log(file);

const support=["jpg","jpeg","png"];
const file_type=`${file.name.split(".")[1].toLowerCase()}`;
console.log(file_type);
if(support.includes(file_type))
{
   
    const response=  await fileupload(file,"media");

    // console.log("file uploaded");

    const filedata= await File.create(
        {
            name,email,tags,imgurl:response.secure_url
        }
    )
         res.status(500).json(
        {
            status:true,
            response,
            filedata,
            message: "image uploaded successfully"

        }
    )
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
    res.json(
        {
            status:false,
            message:"file upload unsuccessful",
            error:error
        }
    )
}}

// video upload handler
exports.videoupload= async (req,res)=>
{
    try {
        const {name,email,tags}=req.body;

        const file=req.files.videofile;
        console.log(file);
        const support=["mp4","mov"];
        const file_type=`${file.name.split(".")[1].toLowerCase()}`;
    

        // todo add upper limit for 5 mb in video

      if(support.includes(file_type))
        {
            console.log(file_type);
            const response=  await fileupload(file,"media");

            console.log("file uploaded");


            const filedata= await File.create(
                {
                    name,email,tags,imgurl:response.secure_url
                }
            )
                 res.status(500).json(
                {
                    status:true,
                    response,
                    filedata,
                    message: "video uploaded successfully"
        
                }
            );

        }
        else{
            return res.status(400).json(
        {
            status:false,
            message:"file not support",
          
        })
        }









        
    } catch (error) {
        
        console.log(error);
    res.status(400).json(
        {
            status:false,
            message:"file upload unsuccessful",
            error:error
        }
    )
    }
}