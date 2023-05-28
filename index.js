const build = require("./fastify.init");
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
  fastify.get("/", (req, reply) => {
    reply.send({ msg: "hello" });
  });
});
