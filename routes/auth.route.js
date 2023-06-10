const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const { catcher } = require("./../utils/helper");

router.post("/register", catcher(authController.signup));
router.post("/login", catcher(authController.login));

module.exports = router;
