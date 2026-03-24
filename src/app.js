import {Hono} from "hono";
import { serve } from "@hono/node-server";
import {logger} from "hono/logger";
import {serveStatic} from "@hono/node-server/serve-static";

export const createApp = () => {
  const app = new Hono()

  app.use(logger())
  console.log("i pushed in system repo request came in chat-app repo...", "cool HuH....");
  
  app.get("*", serveStatic({root: "./public"}))

  return app;
}

const app = createApp();

serve({
  fetch : app.fetch,
  port: 8000
})
