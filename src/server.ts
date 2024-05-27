import fastify from "fastify";
import { knex } from "./database";

const app = fastify();

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP server is running...");
  });
