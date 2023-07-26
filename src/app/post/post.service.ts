import type { Request, Response } from "express";
import { Handler, Service } from "../../utils/decorators";
import { PostModel } from "./post.model";

@Service
class PostService {
  // GET ALL DATA
  @Handler()
  async getAll(req: Request, res: Response) {
    const posts = await PostModel.find();
    res.send(posts);
  }
  // GET ONE DATA
  @Handler()
  async getOne(req: Request, res: Response) {
    const post = await PostModel.findOne({ _id: req.params.id });
    res.send(post);
  }
  // CREATE DATA
  @Handler()
  async createOne(req: Request, res: Response) {
    const newPost = new PostModel(req.body);
    await newPost.save();
    res.send(newPost);
  }
  // UPDATE DATA
  @Handler()
  async updateOne(req: Request, res: Response) {
    const post = await PostModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );

    res.send(post);
  }
  // DELETE DATA
  @Handler()
  async deleteOne(req: Request, res: Response) {
    const post = await PostModel.findByIdAndRemove(req.params.id);
    res.send(post);
  }
}

export default new PostService();
