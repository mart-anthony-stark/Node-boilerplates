import fastify from "fastify";
import * as dotenv from "dotenv";
dotenv.config({});

const server = fastify();
const PORT: number = parseInt(`${process.env.PORT}`, 10) || 8080;
server.get("/", (req, reply) => {
  console.log(process.env.NAME);
  reply.send("Hello");
});

server.listen(PORT, () => {
  console.log(`Server started running on port ${PORT}`);
});
