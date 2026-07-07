import { createRequire } from "module"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const require = createRequire(import.meta.url)

const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
}

export default config
