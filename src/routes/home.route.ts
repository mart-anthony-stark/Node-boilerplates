import { Router } from "express";
import homeController from "../controller/home.controller";
import { catcher } from "../utils";
const router = Router();

router.get("/", catcher(homeController.getHome));

export default router;
