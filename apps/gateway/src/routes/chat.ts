import { Router } from "express";

const router = Router();

router.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      success: false,
      error: "message is required",
    });
  }

  return res.json({
    success: true,
    received: message,
  });
});

export default router;
