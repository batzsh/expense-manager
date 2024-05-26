import { knex as setupKnex } from "knex";

export default setupKnex({
  client: "sqlite3",
  connection: {
    filename: "./tmp/app.db",
  },
  useNullAsDefault: true
});
