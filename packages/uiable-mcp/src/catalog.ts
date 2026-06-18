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

export interface CatalogItem {
  name: string;
  kind: "block" | "component";
  type: string;
  title: string;
  description: string;
  categories: string[];
  dependencies: string[];
  registryDependencies: string[];
  files: string[];
  keywords: string[];
  addCommand: string;
  url: string;
  previewUrl: string;
}

export interface Catalog {
  name: string;
  namespace: string;
  baseUrl: string;
  counts: { total: number; blocks: number; components: number };
  categories: string[];
  items: CatalogItem[];
}

export interface RegistryItemFile {
  path: string;
  target?: string;
  type: string;
  content: string;
}

export interface RegistryItem {
  name: string;
  title?: string;
  description?: string;
  type: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files: RegistryItemFile[];
  categories?: string[];
}

const isUrl = (s: string) => /^https?:\/\//i.test(s);

async function readJson<T>(source: string): Promise<T> {
  if (isUrl(source)) {
    const res = await fetch(source);
    if (!res.ok) throw new Error(`Failed to fetch ${source}: ${res.status} ${res.statusText}`);
    return (await res.json()) as T;
  }
  return JSON.parse(await readFile(source, "utf8")) as T;
}

/** A remote base URL if (and only if) one was explicitly configured; else null = local mode. */
function remoteBase(): string | null {
  const explicit = process.env.UIABLE_CATALOG;
  if (explicit && isUrl(explicit)) return explicit.replace(/\/registry-index\.json$/, "").replace(/\/$/, "");
  const base = process.env.UIABLE_BASE_URL;
  if (base) return base.replace(/\/$/, "");
  return null;
}

function catalogSource(): string {
  const explicit = process.env.UIABLE_CATALOG;
  if (explicit) return isUrl(explicit) || isAbsolute(explicit) ? explicit : resolve(process.cwd(), explicit);
  const base = remoteBase();
  if (base) return `${base}/registry-index.json`;
  return resolve(LOCAL_PUBLIC, "registry-index.json");
}

let cache: Catalog | null = null;

export async function loadCatalog(): Promise<Catalog> {
  if (cache) return cache;
  cache = await readJson<Catalog>(catalogSource());
  return cache;
}

export async function getCatalogItem(name: string): Promise<CatalogItem | undefined> {
  const catalog = await loadCatalog();
  return catalog.items.find((i) => i.name === name);
}

/** Fetches the full registry item (including file contents) for a given item name. */
export async function loadRegistryItem(name: string): Promise<RegistryItem> {
  const base = remoteBase();
  const source = base ? `${base}/r/${name}.json` : resolve(LOCAL_PUBLIC, "r", `${name}.json`);
  return readJson<RegistryItem>(source);
}
