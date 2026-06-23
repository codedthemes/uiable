// constants
const PRESET_DATA: Record<string, string[]> = {
  "preset-2": [
    "255 226 226",
    "255 162 162",
    "251 44 54",
    "193 0 7",
    "130 24 26",
  ],
  "preset-3": [
    "255 237 212",
    "255 184 106",
    "255 105 0",
    "202 53 0",
    "126 42 12",
  ],
  "preset-4": [
    "254 243 198",
    "255 210 48",
    "254 154 0",
    "187 77 0",
    "123 51 6",
  ],
  "preset-5": [
    "254 249 194",
    "255 223 32",
    "240 177 0",
    "166 95 0",
    "115 62 10",
  ],
  "preset-6": [
    "236 252 202",
    "187 244 81",
    "124 207 0",
    "73 125 0",
    "53 83 14",
  ],
  "preset-7": [
    "220 252 231",
    "123 241 168",
    "0 201 80",
    "0 130 54",
    "13 84 43",
  ],
  "preset-8": [
    "208 250 229",
    "94 233 181",
    "0 188 125",
    "0 122 85",
    "0 79 59",
  ],
  "preset-9": [
    "203 251 241",
    "70 236 213",
    "0 187 167",
    "0 120 111",
    "11 79 74",
  ],
  "preset-10": [
    "206 250 254",
    "83 234 253",
    "0 184 219",
    "0 117 149",
    "16 78 100",
  ],
  "preset-11": [
    "223 242 254",
    "116 212 255",
    "0 166 244",
    "0 105 168",
    "2 74 112",
  ],
  "preset-12": [
    "219 234 254",
    "142 197 255",
    "43 127 255",
    "20 71 230",
    "28 57 142",
  ],
  "preset-13": [
    "224 231 255",
    "163 179 255",
    "97 95 255",
    "67 45 215",
    "49 44 133",
  ],
  "preset-14": [
    "237 233 254",
    "196 180 255",
    "142 81 255",
    "112 8 231",
    "77 23 154",
  ],
  "preset-15": [
    "243 232 255",
    "218 178 255",
    "173 70 255",
    "130 0 219",
    "89 22 139",
  ],
  "preset-16": [
    "250 232 255",
    "244 168 255",
    "225 42 251",
    "168 0 183",
    "114 19 120",
  ],
  "preset-17": [
    "252 231 243",
    "253 165 213",
    "246 51 154",
    "198 0 92",
    "134 16 67",
  ],
  "preset-18": [
    "255 228 230",
    "255 161 173",
    "255 32 86",
    "199 0 54",
    "139 8 54",
  ],
}

const toOpaque = (rgb: string, alpha: number, base: number = 255) => {
  const [r, g, b] = rgb.split(" ").map(Number)
  const blend = (c: number) => Math.round(c * alpha + base * (1 - alpha))
  return `rgb(${blend(r)} ${blend(g)} ${blend(b)})`
}

const buildPresetStyles = () =>
  Object.entries(PRESET_DATA)
    .map(
      ([name, colors]) => `
.${name} {
  --background: ${toOpaque(colors[0], 0.2, 255)};
  --foreground: #131920;
  --card: #fff;
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: rgb(${colors[2]});
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: ${toOpaque(colors[0], 0.1, 255)};
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.58 0.22 27);
  --border: #e7eaee;
  --input: #fff;
  --ring: oklch(0.708 0 0);
  --chart-1: rgb(${colors[0]});
  --chart-2: rgb(${colors[1]});
  --chart-3: rgb(${colors[2]});
  --chart-4: rgb(${colors[3]});
  --chart-5: rgb(${colors[4]});
  --sidebar: ${toOpaque(colors[0], 0.2, 255)};
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.88 0.0557 266.22);
  --sidebar-primary-foreground: var(--primary);
  --sidebar-accent: ${toOpaque(colors[0], 0.6, 255)};
  --sidebar-accent-foreground: var(--primary);
  --sidebar-border: oklch(0.8275 0.0157 241.81);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark .${name} {
  --background:${toOpaque(colors[4], 0.04, 10)};
  --foreground: #bfbfbf;
  --card: ${toOpaque(colors[4], 0.15, 25)};
  --card-foreground: oklch(0.985 0 0);
  --popover: ${toOpaque(colors[4], 0.15, 15)};
  --popover-foreground: oklch(0.985 0 0);
  --primary: rgb(${colors[2]});
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: ${toOpaque(colors[4], 0.03, 15)};
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: ${toOpaque(colors[1], 0.25, 0)};
  --input: ${toOpaque(colors[4], 0.15, 15)};
  --ring: oklch(0.556 0 0);
  --chart-1: rgb(${colors[0]});
  --chart-2: rgb(${colors[1]});
  --chart-3: rgb(${colors[2]});
  --chart-4: rgb(${colors[3]});
  --chart-5: rgb(${colors[4]});
  --sidebar: var(--background);
  --sidebar-foreground: rgba(255, 255, 255, 0.5);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(var(--primary) / 0.1);
  --sidebar-accent-foreground: oklch(var(--primary));
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}
`
    )
    .join("\n")

//  ------------------------------ | CUSTOMIZER - THEME PRESET STYLES | ------------------------------  //

export function ThemePresetStyles() {
  return <style dangerouslySetInnerHTML={{ __html: buildPresetStyles() }} />
}
