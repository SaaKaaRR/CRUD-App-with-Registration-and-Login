const express = require("express");
const router = express.Router();
const {
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/posts");

router.get("/", getPost);
router.post("/", createPost);
router.put("/", updatePost);
router.delete("/", deletePost);
module.exports = router;
