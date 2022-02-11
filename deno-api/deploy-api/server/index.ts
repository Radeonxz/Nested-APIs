import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

const posts = [];
const channel = new BroadcastChannel("new post");
channel.onmessage = (event) => {
  posts.push(event.data);
};

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Server is running...";
  })
  .get("/posts", (context) => {
    context.response.body = posts;
  })
  .post("/posts", async (context) => {
    const post = await context.request.body().value;
    posts.push(post);
    channel.postMessage(post);
    context.response.body = post;
  });

const app = new Application();
app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

addEventListener("fetch", app.fetchEventHandler());
