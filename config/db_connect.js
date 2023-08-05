const mongoose=require("mongoose");
require("dotenv").config();

const url=process.env.db_url;

exports.db_connect=()=>
{

    mongoose.connect(url,
        {
           
                useNewUrlParser: true,
                useUnifiedTopology: true,
      }
        ).then(()=>
        {
            console.log("connecton successful");

        }).catch((error)=>
            {
                console.log("unsuccessful connection");
                console.log(error);
                process.exit(1);

            })

}