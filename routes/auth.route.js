const authController = require("../controllers/auth.controller");

module.exports = function (fastify, opts, done) {
  fastify.post("/register", authController.signup);
  fastify.post("/login", authController.login);
  done();
};
