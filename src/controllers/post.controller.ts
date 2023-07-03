import { Request, Response } from "express";
import Post from "../models/Post.model";

export default {
  getAll: async (req: Request, res: Response) => {
    const posts = await Post.find();
    res.send(posts);
  },
  getOne: async (req: Request, res: Response) => {
    const post = await Post.findOne({ _id: req.params.id });
    res.send(post);
  },
  createOne: async (req: Request, res: Response) => {
    const newPost = new Post(req.body);
    await newPost.save();
    res.send(newPost);
  },
  updateOne: async (req: Request, res: Response) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(post);
  },
  deleteOne: async (req: Request, res: Response) => {
    const post = await Post.deleteOne({ _id: req.params.id });
    res.send(post);
  },
};
