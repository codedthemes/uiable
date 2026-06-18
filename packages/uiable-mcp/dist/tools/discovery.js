// Discovery + install tools — richer hosted search over the uiable catalog than the
// spec-standard registry MCP provides. Registered on the McpServer by registerDiscoveryTools.
import { z } from "zod";
import { loadCatalog, getCatalogItem, loadRegistryItem } from "../catalog.js";
const json = (data) => ({
    content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
});
const notFound = (name) => ({
    content: [{ type: "text", text: `No uiable item named "${name}". Use search_blocks or list_components to find valid names.` }],
    isError: true,
});
// Compact projection for list/search results (omits keywords/urls noise).
const summary = (i) => ({
    name: i.name,
    kind: i.kind,
    title: i.title,
    category: i.categories[0],
    categories: i.categories,
    description: i.description,
    dependencies: i.dependencies,
    registryDependencies: i.registryDependencies,
    previewUrl: i.previewUrl,
    addCommand: i.addCommand,
});
function score(item, terms) {
    const hay = {
        title: item.title.toLowerCase(),
        cats: item.categories.join(" ").toLowerCase(),
        desc: item.description.toLowerCase(),
        kw: item.keywords,
        name: item.name.toLowerCase(),
    };
    let s = 0;
    for (const t of terms) {
        if (hay.cats.split(" ").includes(t))
            s += 5;
        if (hay.title.includes(t))
            s += 4;
        if (hay.kw.includes(t))
            s += 3;
        if (hay.name.includes(t))
            s += 2;
        if (hay.desc.includes(t))
            s += 1;
    }
    return s;
}
const tokenize = (q) => q.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").split(/[\s-]+/).filter((w) => w.length > 1);
export function registerDiscoveryTools(server) {
    server.registerTool("list_blocks", {
        title: "List uiable blocks",
        description: "List page-level uiable blocks (hero, pricing, feature, footer, etc.). Optionally filter by category and paginate.",
        inputSchema: {
            category: z.string().optional().describe("Filter to a single category, e.g. 'hero', 'pricing', 'feature'."),
            limit: z.number().int().positive().max(200).optional().describe("Max results (default 50)."),
            offset: z.number().int().nonnegative().optional().describe("Pagination offset (default 0)."),
        },
    }, async ({ category, limit = 50, offset = 0 }) => {
        const catalog = await loadCatalog();
        let blocks = catalog.items.filter((i) => i.kind === "block");
        if (category)
            blocks = blocks.filter((i) => i.categories.includes(category));
        const page = blocks.slice(offset, offset + limit);
        return json({
            total: blocks.length,
            offset,
            limit,
            returned: page.length,
            categories: [...new Set(blocks.flatMap((b) => b.categories))].sort(),
            items: page.map(summary),
        });
    });
    server.registerTool("list_components", {
        title: "List uiable components",
        description: "List primitive uiable components (button, input, card, accordion, etc.). Optionally filter by category and paginate.",
        inputSchema: {
            category: z.string().optional().describe("Filter to a single category, e.g. 'button', 'input'."),
            limit: z.number().int().positive().max(200).optional().describe("Max results (default 50)."),
            offset: z.number().int().nonnegative().optional().describe("Pagination offset (default 0)."),
        },
    }, async ({ category, limit = 50, offset = 0 }) => {
        const catalog = await loadCatalog();
        let comps = catalog.items.filter((i) => i.kind === "component");
        if (category)
            comps = comps.filter((i) => i.categories.includes(category));
        const page = comps.slice(offset, offset + limit);
        return json({
            total: comps.length,
            offset,
            limit,
            returned: page.length,
            categories: [...new Set(comps.flatMap((c) => c.categories))].sort(),
            items: page.map(summary),
        });
    });
    server.registerTool("search_blocks", {
        title: "Search uiable items",
        description: "Keyword/intent search across all uiable blocks and components. Returns ranked matches with previews and install commands.",
        inputSchema: {
            query: z.string().min(1).describe("Free-text query, e.g. 'pricing table with toggle' or 'dark hero'."),
            kind: z.enum(["block", "component", "any"]).optional().describe("Restrict to blocks, components, or any (default any)."),
            limit: z.number().int().positive().max(50).optional().describe("Max results (default 10)."),
        },
    }, async ({ query, kind = "any", limit = 10 }) => {
        const catalog = await loadCatalog();
        const terms = tokenize(query);
        const pool = kind === "any" ? catalog.items : catalog.items.filter((i) => i.kind === kind);
        const ranked = pool
            .map((item) => ({ item, s: score(item, terms) }))
            .filter((r) => r.s > 0)
            .sort((a, b) => b.s - a.s)
            .slice(0, limit);
        return json({
            query,
            kind,
            matches: ranked.length,
            items: ranked.map((r) => ({ score: r.s, ...summary(r.item) })),
        });
    });
    server.registerTool("get_block", {
        title: "Get a uiable item",
        description: "Get full details for one uiable block/component by name: metadata, source file(s) with contents, preview URL, and install command.",
        inputSchema: {
            name: z.string().min(1).describe("Exact item name, e.g. 'uiable-block-landing-hero'."),
        },
    }, async ({ name }) => {
        const meta = await getCatalogItem(name);
        if (!meta)
            return notFound(name);
        const item = await loadRegistryItem(name);
        return json({
            ...summary(meta),
            addCommand: meta.addCommand,
            registryUrl: meta.url,
            files: item.files.map((f) => ({ target: f.target ?? f.path, type: f.type, content: f.content })),
        });
    });
    server.registerTool("get_add_command", {
        title: "Get install command(s)",
        description: "Return the `npx shadcn add` command(s) to install one or more uiable items. Validates each name against the catalog.",
        inputSchema: {
            names: z.array(z.string().min(1)).min(1).describe("One or more exact uiable item names."),
        },
    }, async ({ names }) => {
        const catalog = await loadCatalog();
        const known = new Map(catalog.items.map((i) => [i.name, i]));
        const valid = names.filter((n) => known.has(n));
        const unknown = names.filter((n) => !known.has(n));
        const args = valid.map((n) => `${catalog.namespace}/${n}`).join(" ");
        return json({
            command: valid.length ? `npx shadcn@latest add ${args}` : null,
            perItem: valid.map((n) => known.get(n).addCommand),
            unknown,
        });
    });
}
//# sourceMappingURL=discovery.js.map