// third-party
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import perfectionist from "eslint-plugin-perfectionist"
import { defineConfig, globalIgnores } from "eslint/config"

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // eslint-plugin-react's "detect" version lookup relies on the removed
    // context.getFilename() API, which throws under ESLint v10. Pin the
    // installed React version explicitly to skip auto-detection. Applied
    // globally (no `files`) so it also covers this config's own .mjs file.
    settings: {
      react: {
        version: "19.2",
      },
    },
  },
  {
    files: [
      "**/*.ts",
      "**/*.tsx",
      "**/*.js",
      "**/*.jsx",
      "**/*.mjs",
      "**/*.cjs",
    ],
    plugins: { perfectionist },
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          type: "natural",
          order: "asc",
          newlinesBetween: 1,
          groups: [
            "react",
            { group: "next", commentAbove: "next" },
            { group: "shadcn", commentAbove: "shadcn" },
            { group: "external", commentAbove: "third-party" },
            { group: "project", commentAbove: "project-imports" },
            { group: "assets", commentAbove: "assets" },
            { group: "types", commentAbove: "types" },
            { group: "constant", commentAbove: "constant" },
            "unknown",
          ],
          customGroups: [
            {
              groupName: "react",
              elementNamePattern: ["^react$", "^react/"],
            },
            {
              groupName: "next",
              elementNamePattern: ["^next$", "^next/"],
            },
            {
              groupName: "shadcn",
              elementNamePattern: ["^@/components/ui/"],
            },
            {
              groupName: "assets",
              elementNamePattern: ["^lucide-react$", "^@tabler/icons-react$"],
            },
            {
              groupName: "types",
              elementNamePattern: ["^@/types/", "^\\..*types"],
            },
            {
              groupName: "constant",
              elementNamePattern: [
                "^@/constants?/",
                "^@/constants?$",
                "^\\..*constants?",
              ],
            },
            {
              groupName: "project",
              elementNamePattern: [
                "^@/data/",
                "^@/(?!types/)",
                "^\\.(?!.*types)",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    rules: {
      "react/jsx-key": "error",
      "@typescript-eslint/no-require-imports": "error",
      "no-duplicate-imports": "error",

      "react-hooks/exhaustive-deps": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "@next/next/no-img-element": "off",
      "react-hooks/set-state-in-effect": "warn",

      "jsx-a11y/alt-text": "warn",
      "react/no-unescaped-entities": "off",
      "react/display-name": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",

      "react/prop-types": "off",
    },
  },

  globalIgnores([
    "node_modules/**",
    ".next/**",
    "out/**",
    "build/**",
    "dist/**",
    "next-env.d.ts",
    ".env*",
  ]),
])

export default eslintConfig
