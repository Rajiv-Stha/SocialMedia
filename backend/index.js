const express = require('express');
const app = express();

const cors = require("cors")
const cookieParser = require("cookie-parser")
const session = require("express-session")

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:3000",
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
app.listen(8000,()=>console.log("server listening on port 8000"))