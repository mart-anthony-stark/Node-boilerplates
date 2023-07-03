import { Router } from "express";
import postController from "../controllers/post.controller";
const router = Router();

router.get("/", postController.getAllPosts);

export default router;
