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