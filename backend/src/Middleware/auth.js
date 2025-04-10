const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
require('dotenv').config()

const auth=async(req,res,next)=>{
  const tokenauth=req.cookies.autherization
  const secret = process.env.JWT_SECERT;

  jwt.verify(token,secret , function(err, decoded) {
    if(err){
        console.log("error in auth middleware",err)
    }
    else{
        const finduser=decoded.email
       req.user= finduser
        next()
    }
  });
  


}

module.exports=auth