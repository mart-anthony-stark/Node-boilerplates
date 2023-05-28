const Fastify = require("fastify");
const mongoose = require("mongoose");

require("dotenv").config();

/**
 * This is where the build configuration code resides. Runs before listening/running the server
 * Setup middlewares
 * @returns <Promise>Fastify app;
 */
async function build() {
  const app = Fastify();

  try {
    // Setup Middlewares
    await mongoose.connect(process.env.DB_URI);
    await app.register(require("@fastify/middie"), {
      hook: "onRequest", // default
    });

    // Cross-Origin Request Configuration
    app.use(
      require("cors")({
        origin: process.env.CLIENT_URL || "*",
        credentials: true,
      })
    );

    // URL Middleware
    app.use((req, reply, next) => {
      console.log(`${req.method} - ${req.url}`);
      next();
    });

    return app;
  } catch (error) {
    console.error(error);
  }
}

module.exports = build;
