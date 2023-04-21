const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const {
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/posts");

router.get("/", getPost);
router.post("/", auth, createPost);
router.put("/", auth, updatePost);
router.delete("/", auth, deletePost);
module.exports = router;
