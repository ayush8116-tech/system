import {Hono} from "hono";
import {logger} from "hono/logger";
import {serveStatic} from "@hono/node-server/serve-static";
import { alert } from "../indicator/talk.js";

export const createApp = () => {
  const app = new Hono()

  app.use(logger())

  app.post("/indicate", async(c) => {
    const payload = await c.req.json();
    const conclusion = payload["workflow_run"].conclusion;
    
    const committer = payload["workflow_run"]["head_commit"].committer.name;
    if(conclusion !== null) {
      alert(conclusion, committer)
    }
    console.log(conclusion, "request came in system");
    return c.text(`alerted on the light according to ${conclusion}...`)
  })  

  app.get("*", serveStatic({root: "./public"}))

  return app;
}
