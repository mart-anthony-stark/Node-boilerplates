const fastify = require("fastify")({ logger: true });
const start = require("./utils/init");
require('dotenv').config({})

fastify.register(require("./routes"));

start(fastify);
