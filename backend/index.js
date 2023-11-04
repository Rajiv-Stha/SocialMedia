const express = require('express');
const app = express();
const cors = require("cors")
require("dotenv").config()
const cookieParser = require("cookie-parser")
const session = require("express-session")


app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:3000",
    methods:["GET","POST","DELETE","PUT"],
    credentials:true
}))
app.use(session({
    name:"rajiv.sid",
    secret:"rajiv",
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure:false,
        httpOnly:true,
        maxAge:1000*60*60*24
    }
}))
require("./utils/db")()
app.use("/api/user",require("./routes/userRoute"))
app.use("/api/post",require("./routes/postRoute"))
app.use(require("./middlewares/error"))
app.listen(8000,()=>console.log("server listening on port 8000"))