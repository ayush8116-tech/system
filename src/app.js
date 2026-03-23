import {Hono} from "hono";
import { serve } from "@hono/node-server";
import {logger} from "hono/logger";
import {serveStatic} from "@hono/node-server/serve-static";

export const createApp = () => {
  const app = new Hono()

  app.use(logger())
  
  app.get("/github-webhook", async (c) => {
    const payload = await c.req.body()
    console.log("coming", payload);

    return c.text("bye");
  })

  app.get("*", serveStatic({root: "./public"}))

  return app;
}

const app = createApp();

serve({
  fetch : app.fetch,
  port: 8000
})