import OpenAI from "openai";
import { config } from "../config/env.js";

export const openrouter = new OpenAI({
  apiKey: config.openRouterApiKey,
  baseURL: "https://openrouter.ai/api/v1",
});
