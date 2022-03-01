const router = require("express").Router();
const authController = require("../controller/auth.controller");

router.post("/register", authController.signup);
router.post("/login", authController.login);

module.exports = router;
