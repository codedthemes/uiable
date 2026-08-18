/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  printWidth: 80,
  overrides: [{ files: "*.json", options: { printWidth: 1000 } }],
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./src/app/globals.css",
  tailwindFunctions: ["cn", "cva"],
}
