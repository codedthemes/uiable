// Smoke test: spins up the built server over stdio and calls each tool.
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const transport = new StdioClientTransport({ command: "node", args: ["dist/index.js"] });
const client = new Client({ name: "smoke", version: "0.0.0" });
await client.connect(transport);

const tools = await client.listTools();
console.log("TOOLS:", tools.tools.map((t) => t.name).join(", "));

const call = async (name, args) => {
  const r = await client.callTool({ name, arguments: args });
  const txt = r.content[0].text;
  const data = JSON.parse(txt);
  return data;
};

const blocks = await call("list_blocks", { category: "hero", limit: 3 });
console.log(`\nlist_blocks(hero): total=${blocks.total}, returned=${blocks.returned}, first=${blocks.items[0]?.name}`);

const comps = await call("list_components", { category: "button", limit: 2 });
console.log(`list_components(button): total=${comps.total}, first=${comps.items[0]?.name}`);

const search = await call("search_blocks", { query: "pricing table with monthly toggle", limit: 3 });
console.log(`search_blocks: matches=${search.matches}, top=${search.items[0]?.name} (score ${search.items[0]?.score})`);

const block = await call("get_block", { name: "uiable-block-landing-hero" });
console.log(`get_block: files=${block.files.length}, hasContent=${block.files[0]?.content?.length > 0}, add="${block.addCommand}"`);

const add = await call("get_add_command", { names: ["uiable-block-landing-hero", "does-not-exist"] });
console.log(`get_add_command: cmd="${add.command}", unknown=${JSON.stringify(add.unknown)}`);

const ui = await call("create_ui", { intent: "a SaaS landing page for an AI note-taking app", pageType: "saas" });
console.log(`create_ui: plan=${ui.plan.length} sections [${ui.plan.map((p) => p.section).join(", ")}], missing=[${ui.missingSections.join(", ")}]`);
console.log(`create_ui addCommand: ${ui.addCommand?.slice(0, 90)}...`);
console.log("--- scaffold preview ---\n" + ui.scaffold.content.split("\n").slice(0, 8).join("\n"));

await client.close();
console.log("\nSMOKE TEST PASSED");
