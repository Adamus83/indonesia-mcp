import express from "express";
import healthRouter from "./routes/health.js";
import { config } from "./config/env.js";

const app = express();

app.use(express.json());

app.use("/", healthRouter);

app.listen(config.port, () => {
  console.log("==================================");
  console.log(" Indonesia MCP Gateway");
  console.log(` Listening on http://localhost:${config.port}`);
  console.log("==================================");
});
