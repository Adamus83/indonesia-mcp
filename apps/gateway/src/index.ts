import express from "express";
import { config } from "./config/env.js";
import healthRouter from "./routes/health.js";
import chatRouter from "./routes/chat.js";

const app = express();

app.use(express.json());

app.use("/", healthRouter);
app.use("/", chatRouter);

app.listen(config.port, () => {
  console.log("==================================");
  console.log(" Indonesia MCP Gateway");
  console.log(` Listening on http://localhost:${config.port}`);
  console.log("==================================");
});
