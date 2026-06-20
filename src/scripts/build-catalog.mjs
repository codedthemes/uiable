// Generates public/registry-index.json: a lightweight, searchable catalog of every
// uiable registry item, with the metadata the custom MCP tools need (category,
// description, preview URL, install command, keywords). Run after `shadcn build`.
//
//   node src/scripts/build-catalog.mjs
//
// Output is consumed by packages/uiable-mcp at runtime (via UIABLE_CATALOG / URL).

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "../..");

const registry = JSON.parse(
  readFileSync(resolve(root, "registry.json"), "utf8"),
);
const uiRegistry = JSON.parse(
  readFileSync(resolve(root, "src/components/uiable/registry.json"), "utf8"),
);
const blocksRegistry = JSON.parse(
  readFileSync(
    resolve(root, "src/components/uiable/blocks/registry.json"),
    "utf8",
  ),
);
registry.items = [...(uiRegistry.items || []), ...(blocksRegistry.items || [])];

// Namespace + base URL. Override via env when publishing; defaults to the
// registry.json homepage (currently a local dev URL — fine until publish).
const NAMESPACE = process.env.UIABLE_NAMESPACE || "@uiable";
const BASE_URL = (
  process.env.UIABLE_BASE_URL ||
  registry.homepage ||
  "http://localhost:3000"
).replace(/\/$/, "");

// Categories that denote a composable page-level block (vs a primitive component).
const BLOCK_CATEGORIES = new Set(["landing"]);

const isBlock = (item) =>
  (item.categories || []).some((c) => BLOCK_CATEGORIES.has(c));

// Cheap keyword extraction for server-side search recall.
const keywordsFor = (item) => {
  const text = `${item.title} ${item.description} ${(item.categories || []).join(" ")} ${item.name}`;
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/[\s-]+/)
    .filter(
      (w) => w.length > 2 && w !== "uiable" && w !== "variant" && w !== "for",
    );
  return [...new Set(words)];
};

const items = registry.items.map((item) => {
  const kind = isBlock(item) ? "block" : "component";
  return {
    name: item.name,
    kind,
    type: item.type,
    title: item.title,
    description: item.description,
    categories: item.categories || [],
    dependencies: item.dependencies || [],
    registryDependencies: item.registryDependencies || [],
    files: (item.files || []).map((f) => f.target || f.path),
    keywords: keywordsFor(item),
    addCommand: `npx shadcn@latest add ${NAMESPACE}/${item.name}`,
    url: `${BASE_URL}/r/${item.name}.json`,
    previewUrl: `${BASE_URL}/preview/${item.name}`,
  };
});

const blocks = items.filter((i) => i.kind === "block");
const components = items.filter((i) => i.kind === "component");

const catalog = {
  name: registry.name,
  namespace: NAMESPACE,
  baseUrl: BASE_URL,
  generatedFrom: "registry.json",
  counts: {
    total: items.length,
    blocks: blocks.length,
    components: components.length,
  },
  categories: [...new Set(items.flatMap((i) => i.categories))].sort(),
  items,
};

const outPath = resolve(root, "public", "registry-index.json");
writeFileSync(outPath, JSON.stringify(catalog, null, 2) + "\n", "utf8");

console.log(
  `Wrote ${outPath}\n  ${catalog.counts.total} items (${catalog.counts.blocks} blocks, ${catalog.counts.components} components)\n  ${catalog.categories.length} categories\n  base: ${BASE_URL}  namespace: ${NAMESPACE}`,
);
