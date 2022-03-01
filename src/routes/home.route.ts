const router = require("express").Router();
const homeController = require("../controller/home.controller");

router.get("/", homeController.getHome);

module.exports = router;
