import { Router } from "express";
import { catcher } from "./../utils/index";
import postController from "../controllers/post.controller";
const router = Router();

router.get("/", catcher(postController.getAll));
router.get("/:id", catcher(postController.getOne));
router.post("/", catcher(postController.createOne));
router.put("/:id", catcher(postController.updateOne));
router.delete("/:id", catcher(postController.deleteOne));

export default router;
