const mongoose = require("mongoose");

const start = async (fastify) => {
  try {
    await fastify.listen(3000);
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

module.exports = start;
