import { createApp } from "./src/app.js";
import { serve } from "@hono/node-server";

const main = () => {
  const app = createApp();
  
  serve({
    fetch : app.fetch,
    port: 9999
  })
}

main();
