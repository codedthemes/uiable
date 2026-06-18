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
    counts: {
        total: number;
        blocks: number;
        components: number;
    };
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
export declare function loadCatalog(): Promise<Catalog>;
export declare function getCatalogItem(name: string): Promise<CatalogItem | undefined>;
/** Fetches the full registry item (including file contents) for a given item name. */
export declare function loadRegistryItem(name: string): Promise<RegistryItem>;
