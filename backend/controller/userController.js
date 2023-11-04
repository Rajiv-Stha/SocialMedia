const userModel = require("../models/userModel")

const createuser = async(req, res, next) => {
    try {
        const newUser = await userModel.create(req.body)
        return res.status(200).json({message:newUser, success:true})
        
    } catch (error) {
        next(error)
    }

}

const getUser = async(req,res,next)=>{
try {
    const allUsers = await userModel.find({...req.query})
    return res.status(200).json({message:allUsers, success:true})
} catch (error) {
    next(error)
}
}

const loginUser = async(req, res, next) => {
    try {
        const {email:userEmail, password:userPassword} = req.body
        if(!userEmail || !userPassword){
            return res.status(403).json({message:"fill all the creadentials"})
        }
        const loggedInUser = await userModel.findOne({email:userEmail})
        console.log(loggedInUser,"loggedInUser")
        if(!loggedInUser){
            return res.status(403).json({message:"email is not registered"})
        } 
        if(loggedInUser.password !== userPassword){
            return res.status(403).json({message:"invalid credentials"})
        }
        const {password, ...other} = loggedInUser._doc
        return res.status(200).json({message:other})
    } catch (error) {
        next(error)
    }
}

module.exports = {getUser,createuser, loginUser}