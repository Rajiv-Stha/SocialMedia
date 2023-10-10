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
module.exports = {getUser,createuser}