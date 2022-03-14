const controller = require("../controllers");

const routes = (fastify, options, done) => {
  fastify.route({
    method: "GET",
    url: "/user",
    handler: async (request, reply) => {
      return { hello: "world" };
    },
  });
  done();
};

module.exports = routes;
