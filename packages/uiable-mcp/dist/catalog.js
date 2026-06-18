// Loads the uiable catalog (registry-index.json) and full registry items.
//
// Source resolution (in priority order):
//   1. UIABLE_CATALOG env — an http(s) URL or a filesystem path to registry-index.json
//   2. UIABLE_BASE_URL env — fetch `${base}/registry-index.json` over HTTP
//   3. local fallback — the repo's public/registry-index.json (dev default, pre-publish)
//
// Full item source (file contents) comes from `<base>/r/<name>.json` (HTTP) or the
// local public/r/<name>.json built by `shadcn build`.
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve, isAbsolute } from "node:path";
const __dirname = dirname(fileURLToPath(import.meta.url));
// dist/ -> uiable-mcp -> packages -> repo root
const REPO_ROOT = resolve(__dirname, "..", "..", "..");
const LOCAL_PUBLIC = resolve(REPO_ROOT, "public");
const isUrl = (s) => /^https?:\/\//i.test(s);
async function readJson(source) {
    if (isUrl(source)) {
        const res = await fetch(source);
        if (!res.ok)
            throw new Error(`Failed to fetch ${source}: ${res.status} ${res.statusText}`);
        return (await res.json());
    }
    return JSON.parse(await readFile(source, "utf8"));
}
/** A remote base URL if (and only if) one was explicitly configured; else null = local mode. */
function remoteBase() {
    const explicit = process.env.UIABLE_CATALOG;
    if (explicit && isUrl(explicit))
        return explicit.replace(/\/registry-index\.json$/, "").replace(/\/$/, "");
    const base = process.env.UIABLE_BASE_URL;
    if (base)
        return base.replace(/\/$/, "");
    return null;
}
function catalogSource() {
    const explicit = process.env.UIABLE_CATALOG;
    if (explicit)
        return isUrl(explicit) || isAbsolute(explicit) ? explicit : resolve(process.cwd(), explicit);
    const base = remoteBase();
    if (base)
        return `${base}/registry-index.json`;
    return resolve(LOCAL_PUBLIC, "registry-index.json");
}
let cache = null;
export async function loadCatalog() {
    if (cache)
        return cache;
    cache = await readJson(catalogSource());
    return cache;
}
export async function getCatalogItem(name) {
    const catalog = await loadCatalog();
    return catalog.items.find((i) => i.name === name);
}
/** Fetches the full registry item (including file contents) for a given item name. */
export async function loadRegistryItem(name) {
    const base = remoteBase();
    const source = base ? `${base}/r/${name}.json` : resolve(LOCAL_PUBLIC, "r", `${name}.json`);
    return readJson(source);
}
//# sourceMappingURL=catalog.js.map