import { createTool } from "@mastra/core";

export const helloWorldTool = createTool({
  id: "inner-tool",
  description: "A tool that returns hello world",
  execute: async () => "Hello, world!"
});
