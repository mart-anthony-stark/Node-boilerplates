import { Router } from "express";
import authController from "../controller/auth.controller";
const router = Router();

router.post("/register", authController.signup);
router.post("/login", authController.login);

export default router;
