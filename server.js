const fastify = require("fastify")({ logger: true });
const start = require("./utils/init");

fastify.register(require("./routes"));

start(fastify);
