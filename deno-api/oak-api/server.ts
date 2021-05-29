import {
  Application,
  Router,
  RouterContext
} from "https://deno.land/x/oak/mod.ts";
import { DataTypes, Database, Model } from "https://deno.land/x/denodb/mod.ts";

import postsRouter from "./routes/posts";

const connection = new Database({
  host: "localhost",
  username: "postgres",
  password: "root",
  database: "deno-api"
});

const db = new Database(connection);

class Post extends Model {
  static table = "posts";
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    username: DataTypes.STRING,
    body: DataTypes.STRING
  };

  static defaults = {};
}

db.link([Post]);

await db.sync({ drop: true });

const app = new Application();
const router = new Router();
const port = 5000;

router.get("/api", (context: RouterContext) => {
  context.response.body = { message: "Hello World" };
});

app.use(router.routes());
app.use(postsRouter.prefix("/api/posts").routes());
app.use(router.allowedMethods());

console.log(`Server is running on http:localhost:${port}`);

await app.listen({ port });
