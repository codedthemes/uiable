// Generative UI tool — composes a page from uiable blocks given a natural-language
// intent. Returns a composition plan (ordered blocks), an assembled page TSX scaffold,
// and the install commands. The host AI writes the files; this tool does the selection.

import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { loadCatalog, type CatalogItem } from "../catalog.js";

const json = (data: unknown) => ({
  content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }],
});

// Default ordered section recipes per page type. Each entry is a block category.
const RECIPES: Record<string, string[]> = {
  landing: ["navbar", "hero", "feature", "statistics", "testimonial", "pricing", "cta", "footer"],
  saas: ["navbar", "hero", "feature", "pricing", "faq", "cta", "footer"],
  marketing: ["navbar", "hero", "feature", "gallery", "testimonial", "cta", "footer"],
  portfolio: ["navbar", "hero", "portfolio", "team", "contact", "footer"],
  ecommerce: ["navbar", "hero", "e-commerce", "feature", "cta", "footer"],
};

const tokenize = (q: string) =>
  q.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").split(/[\s-]+/).filter((w) => w.length > 1);

// Pick the best block in a category, biased toward the intent terms.
function pickForCategory(blocks: CatalogItem[], category: string, terms: string[]): CatalogItem | undefined {
  const inCat = blocks.filter((b) => b.categories.includes(category));
  if (!inCat.length) return undefined;
  const scored = inCat
    .map((b) => {
      const hay = `${b.title} ${b.description} ${b.keywords.join(" ")}`.toLowerCase();
      const s = terms.reduce((acc, t) => acc + (hay.includes(t) ? 1 : 0), 0);
      return { b, s };
    })
    .sort((a, b) => b.s - a.s);
  return scored[0].b;
}

const stripExt = (p: string) => p.replace(/\.[tj]sx?$/, "");

// PascalCase component identifier from a file target basename, e.g. feature-1.tsx -> Feature1.
function componentName(target: string): string {
  const base = stripExt(target.split("/").pop() || "Block");
  const pascal = base.replace(/(^|[-_])([a-z0-9])/g, (_, __, c) => c.toUpperCase());
  return /^[A-Za-z]/.test(pascal) ? pascal : `Block${pascal}`;
}

// Import path via the consumer's @/ alias: components/.../hero.tsx -> @/components/.../hero
const importPath = (target: string) => `@/${stripExt(target)}`;

function buildScaffold(picks: { section: string; item: CatalogItem; component: string; importPath: string }[]): string {
  const imports = picks.map((p) => `import ${p.component} from "${p.importPath}";`).join("\n");
  const body = picks.map((p) => `      {/* ${p.section} */}\n      <${p.component} />`).join("\n");
  return `${imports}\n\nexport default function Page() {\n  return (\n    <main className="flex min-h-screen flex-col">\n${body}\n    </main>\n  );\n}\n`;
}

export function registerCreateUiTool(server: McpServer): void {
  server.registerTool(
    "create_ui",
    {
      title: "Compose a page from uiable blocks",
      description:
        "Generate a page composition from uiable blocks for a natural-language intent. Returns the ordered blocks chosen, an assembled page.tsx scaffold wiring them together, and the shadcn add commands to install them. The host AI should run the add commands and write the scaffold.",
      inputSchema: {
        intent: z.string().min(1).describe("What to build, e.g. 'a SaaS landing page for an AI note-taking app'."),
        pageType: z
          .enum(["landing", "saas", "marketing", "portfolio", "ecommerce"])
          .optional()
          .describe("Page recipe to use for default section ordering (default 'landing')."),
        sections: z
          .array(z.string())
          .optional()
          .describe("Explicit ordered list of block categories to include, overriding the page recipe."),
      },
    },
    async ({ intent, pageType = "landing", sections }) => {
      const catalog = await loadCatalog();
      const blocks = catalog.items.filter((i) => i.kind === "block");
      const terms = tokenize(intent);
      const recipe = sections && sections.length ? sections : RECIPES[pageType];

      const picks: { section: string; item: CatalogItem; component: string; importPath: string }[] = [];
      const missing: string[] = [];
      for (const section of recipe) {
        const item = pickForCategory(blocks, section, terms);
        if (!item) {
          missing.push(section);
          continue;
        }
        const target = item.files[0];
        picks.push({ section, item, component: componentName(target), importPath: importPath(target) });
      }

      const names = picks.map((p) => p.item.name);
      const addCommand = names.length
        ? `npx shadcn@latest add ${names.map((n) => `${catalog.namespace}/${n}`).join(" ")}`
        : null;

      return json({
        intent,
        pageType,
        plan: picks.map((p) => ({
          section: p.section,
          name: p.item.name,
          title: p.item.title,
          component: p.component,
          previewUrl: p.item.previewUrl,
        })),
        missingSections: missing,
        addCommand,
        scaffold: { path: "app/page.tsx", content: buildScaffold(picks) },
        instructions:
          "Run addCommand to install the blocks, write scaffold.content to scaffold.path, then adjust copy/props to match the intent. Sections in missingSections had no matching uiable block — build or omit them.",
      });
    },
  );
}
