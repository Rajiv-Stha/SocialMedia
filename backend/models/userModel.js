const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username:{
        required: true,
        type:String
    },
    email:{
        required: true,
        type:String
    },
    password:{
        required: true,
        type:String
    },
    job:{
        required: true,
        type:String
    },
    image:{
        type:String,
        default:"https://previews.123rf.com/images/meysye/meysye1904/meysye190400002/121250278-female-silhoutte-avatar-default-avatar-profile-picture-photo-placeholder.jpg"
    }

},{timestamps:true})
module.exports = mongoose.model("user",userSchema)