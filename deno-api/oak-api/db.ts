import { Database } from "https://deno.land/x/denodb/mod.ts";

import Post from "./models/Post";

const db = new Database({
  host: "localhost",
  username: "postgres",
  password: "root",
  database: "deno-api"
});

db.link([Post]);

export default db;
