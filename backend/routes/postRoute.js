const { createPost, getPost, deletePost, updatePost } = require("../controller/postController");

const router = require("express").Router()

router.post("/create",createPost)
router.get("/",getPost)
router.delete("/:id",deletePost)
router.put("/:id",updatePost)

module.exports = router;