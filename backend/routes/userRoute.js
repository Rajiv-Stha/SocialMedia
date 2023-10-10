const { getUser, createuser } = require("../controller/userController");

const router = require("express").Router()

router.post("/create",createuser)
router.get("/",getUser)


module.exports = router;