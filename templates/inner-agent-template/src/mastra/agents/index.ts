import { Agent } from "@mastra/core/agent";

export const innerAgent = new Agent({
  name: "inner-agent",
  instructions: "You are a helpful assistant"
});
