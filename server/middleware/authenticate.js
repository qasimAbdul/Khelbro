const jwt = require("jsonwebtoken")
const users = require("../models/userSchema")
const SECRET_KEY = "abdul";

const authenticate = async(req,res,next)=>{
    try {
        const token = req.headers.authorization
        // console.log(token);
        const verifytoken = jwt.verify(token,SECRET_KEY)
        // console.log(verifytoken);
        const rootuser = await users.findOne({_id:verifytoken._id})
        // console.log(rootuser);
        if(!rootuser) {throw new Error("user not found")}

        req.token = token
        req.rootuser = rootuser
        req.userId = rootuser._id

        next()
    } catch (error) {
        res.status(400).json({message:"Unauthorized no token provide"})
    }
}



module.exports = authenticate