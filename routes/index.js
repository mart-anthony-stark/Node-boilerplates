const controller = require("../controllers");

const routes = (fastify, options, done) => {
  fastify.get("/", controller.getItems);
  done();
};

module.exports = routes;
