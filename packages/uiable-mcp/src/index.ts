#!/usr/bin/env node
// uiable-mcp — MCP server exposing uiable registry discovery, install, and generative
// composition tools over stdio. Add to a client's mcp config as:
//   { "command": "npx", "args": ["uiable-mcp"] }
//
// Catalog source (pre-publish defaults to the local repo build):
//   UIABLE_BASE_URL   — hosted registry base, e.g. https://uiable.com
//   UIABLE_CATALOG    — explicit registry-index.json URL or file path
//   UIABLE_NAMESPACE  — install namespace (default '@uiable', baked into the catalog)

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerDiscoveryTools } from "./tools/discovery.js";
import { registerCreateUiTool } from "./tools/create-ui.js";

async function main(): Promise<void> {
  const server = new McpServer({
    name: "uiable-mcp",
    version: "0.1.0",
  });

  registerDiscoveryTools(server);
  registerCreateUiTool(server);

  const transport = new StdioServerTransport();
  await server.connect(transport);
  // Log to stderr only — stdout is the MCP transport channel.
  console.error("uiable-mcp server running on stdio");
}

main().catch((err) => {
  console.error("uiable-mcp failed to start:", err);
  process.exit(1);
});
