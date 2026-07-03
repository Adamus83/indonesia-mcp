import express from "express";

const app = express();
const PORT = 3000;

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "indonesia-mcp-gateway",
    version: "0.1.0",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log("==================================");
  console.log(" Indonesia MCP Gateway");
  console.log(` Listening on http://localhost:${PORT}`);
  console.log("==================================");
});
