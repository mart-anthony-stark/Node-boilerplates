import { Router } from "express";
import { catcher } from "./../utils/index";
import postController from "../controllers/post.controller";
import AuthGuard from "../guards/AuthGuard";
const router = Router();

router.get("/", catcher(postController.getAll));
router.get("/:id", catcher(postController.getOne));
router.post("/", AuthGuard, catcher(postController.createOne));
router.put("/:id", AuthGuard, catcher(postController.updateOne));
router.delete("/:id", AuthGuard, catcher(postController.deleteOne));

export default router;
