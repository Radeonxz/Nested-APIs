import {
  Application,
  Router,
  RouterContext
} from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router.get("/api", (context: RouterContext) => {
  context.response.body = { message: "Hello World" };
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
