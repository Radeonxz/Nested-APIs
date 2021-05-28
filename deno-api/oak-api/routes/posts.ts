import { Router, RouterContext } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

const posts = [
  { username: "foo", body: "bar" },
  { username: "bar", body: "foo" }
];

router.get("/api/posts", (response: RouterContext) => {
  response.body = posts;
});

router.post("/api/posts", async ({ request, response }: RouterContext) => {
  const { username, body } = await request.body().value;

  posts.push({ username, body });

  response.body = { username, body };
});

export default router;
