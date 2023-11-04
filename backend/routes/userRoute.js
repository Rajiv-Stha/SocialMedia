const { getUser, createuser, loginUser } = require("../controller/userController");

const router = require("express").Router()

router.post("/register",createuser)
router.get("/",getUser)
router.post("/login",loginUser)


module.exports = router;