const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    text:{
        required: true,
        type:String
    },
    image:{
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        }
    ]

},{timestamps: true})

module.exports  = mongoose.model("post",postSchema)