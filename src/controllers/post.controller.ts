import { Request, Response } from "express";
import Post from "../models/Post.model";

export default {
  getAllPosts: async (req: Request, res: Response) => {
    const posts = await Post.find();
    res.send(posts);
  },
};
