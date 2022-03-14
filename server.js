const fastify = require("fastify")({ logger: true });

fastify.route({
  method: "GET",
  url: "/",
  schema: {
    // request needs to have a querystring with a `name` parameter
    querystring: {
      name: { type: "string" },
    },
  },
  // this function is executed for every request before the handler is executed
  preHandler: async (request, reply) => {
    // E.g. check authentication
  },
  handler: async (request, reply) => {
            reply.send({ asd: "asd" });
  },
});

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
