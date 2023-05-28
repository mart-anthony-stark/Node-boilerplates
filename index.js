const build = require("./fastify.init");
const { requireAuth } = require("./middlewares");
const PORT = process.env.PORT || 3000;
let fastify;

build().then((app) => {
  fastify = app;
  app.listen({ port: PORT }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server running on ${address}`);
  });

  //   Register Routes
  fastify.register(require("./routes/auth.route"), { prefix: "/auth" });

  fastify.get("/", (req, reply) => {
    reply.send({ msg: "hello" });
  });

  fastify.get("/protected", { onRequest: [requireAuth] }, (req, reply) => {
    reply.code(200).send({ msg: "Authenticated", user: req.user });
  });
});
