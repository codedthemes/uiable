import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import { defineConfig, globalIgnores } from "eslint/config"

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
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
