const controller = require("../controllers");

const log = (req, res, next) => {
  console.log("sdf");
  next();
};

const routes = (fastify, options, done) => {
  fastify.get("/", { preHandler: [log] }, controller.getItems);
  done();
};

module.exports = routes;
