const router = require("express").Router();
const postsController = require("../controller/posts.controller");

router.get("/", postsController.getAllPosts);

module.exports = router;
