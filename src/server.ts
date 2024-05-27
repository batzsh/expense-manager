import { env } from "./env";
import fastify from "fastify";

const app = fastify();

app
  .listen({
    port: env.PORT
  })
  .then(() => {
    console.log("HTTP server is running...");
  });
