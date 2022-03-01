import { Router } from "express";
import postController from "../controller/post.controller";
const router = Router();

router.get("/", postController.getAllPosts);

export default router;
