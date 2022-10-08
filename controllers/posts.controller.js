const Post = require("../models/Post.model");

module.exports = {
  getAllPosts: async (req, res) => {
    const posts = await Post.find();
    res.send(posts);
  },
};
