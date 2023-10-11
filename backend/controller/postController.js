const postModel = require("../models/postModel");

const createPost = async (req, res, next) => {
  try {
    const newPost = await postModel.create(req.body);
    return res.status(200).json({ message: newPost, success: true });
  } catch (error) {
    next(error);
  }
};

const getPost = async (req, res, next) => {
  try {
    const allPosts = await postModel.find({ ...req.query });
    return res.status(200).json({ message: allPosts, success: true });
  } catch (error) {
    next(error);
  }
};

const updatePost = async (req, res, next) => {
  postId = req.params.id;

  try {
    const updatedPost = await postModel.findByIdandUpdate(
      {
        _id: postId,
      },
      {
        $set: req.body,
      },
      {
        returnDocument: true,
        new: true,
      }
    );
    return res.status(200).json({ message: updatedPost, success: true });
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  const postId = req.params.id;
  try {
    await postModel.deleteOne({ _id: postId });
    return res.status(200).json({ message: "successfully deleted" });
  } catch (error) {
    next(error);
  }
};
module.exports = { createPost, getPost, deletePost, updatePost };
