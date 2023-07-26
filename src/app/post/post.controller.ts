import { Router } from "express";
import postController from "./post.service";
const PostController = Router();

PostController.get("/", postController.getAll);
PostController.get("/:id", postController.getOne);
PostController.post("/", postController.createOne);
PostController.put("/:id", postController.updateOne);
PostController.delete("/:id", postController.deleteOne);

export default PostController;