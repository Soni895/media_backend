const cloudinary = require('cloudinary').v2
require.apply("dotenv").config();
const  api_secret=process.env.api_secret;
const  api_key=process.env.api_key;
const cloud_name=process.env.cloud_name;

exports.cloudnary()
{
    try {
        cloudinary.config(
            {

            }

        );
    } catch (error) {
        console.log(error)
        
    }
}
