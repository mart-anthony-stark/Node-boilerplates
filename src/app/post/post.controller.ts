import { Router } from "express";
import postService from "@/app/post/post.service";
const PostController = Router();

PostController.get("/", postService.getAll);
PostController.get("/:id", postService.getOne);
PostController.post("/", postService.createOne);
PostController.put("/:id", postService.updateOne);
PostController.delete("/:id", postService.deleteOne);

export default PostController;
