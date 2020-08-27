import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { getNotes } from "./routes.ts";

const router = new Router();

router
  .get("/", (ctx) => {
    ctx.response.body("Hello Deno");
  })
  .get("/notes", getNotes);

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8000 });
