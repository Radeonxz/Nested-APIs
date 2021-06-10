import { Router, RouterContext } from "https://deno.land/x/oak/mod.ts";

import Post from "../models/Post";

const router = new Router();

router.get("/", async ({ response }: RouterContext) => {
  try {
    const posts = await Post.all();
    response.body = posts;
  } catch (err) {
    console.log(err);
    response.body = { error: "Something went wrong." };
    response.status = 500;
  }
});

router.post("/", async ({ request, response }: RouterContext) => {
  const { username, body } = await request.body().value;

  posts.push({ username, body });

  response.body = { username, body };
});

export default router;
