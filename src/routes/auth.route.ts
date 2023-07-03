import { Router } from "express";
import authController from "../controllers/auth.controller";
import { catcher } from "./../utils/index";
const router = Router();

router.post("/register", catcher(authController.signup));
router.post("/login", catcher(authController.login));

export default router;
