import {
  Application,
  Router,
  RouterContext
} from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();
const port = 5000;

const posts = [
  { username: "foo", body: "bar" },
  { username: "bar", body: "foo" }
];

router.get("/api", (context: RouterContext) => {
  context.response.body = { message: "Hello World" };
});

router.get("/api/posts", (response: RouterContext) => {
  response.body = posts;
});

router.post("/api/posts", ({ request, response }: RouterContext) => {
  const { username, body } = await request.body().value;

  posts.push({ username, body });

  response.body = { username, body };
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server is running on http:localhost:${port}`);

await app.listen({ port });
