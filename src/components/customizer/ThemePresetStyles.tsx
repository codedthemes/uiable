// constants
const PRESET_DATA: Record<string, string[]> = {
  "preset-2": [
    "254 226 226",
    "252 165 165",
    "239 68 68",
    "185 28 28",
    "127 29 29"
  ],
  "preset-3": [
    "255 237 213",
    "253 186 116",
    "249 115 22",
    "194 65 12",
    "124 45 18"
  ],
  "preset-4": [
    "254 243 199",
    "252 211 77",
    "245 158 11",
    "180 83 9",
    "120 53 15"
  ],
  "preset-5": [
    "254 249 195",
    "253 224 71",
    "234 179 8",
    "161 98 7",
    "113 63 18"
  ],
  "preset-6": [
    "236 252 203",
    "190 242 100",
    "132 204 22",
    "77 124 15",
    "54 83 20"
  ],
  "preset-7": [
    "187 247 208",
    "74 222 128",
    "22 163 74",
    "22 101 52",
    "5 46 22",
    "34 197 94"
  ],
  "preset-8": [
    "209 250 229",
    "110 231 183",
    "16 185 129",
    "4 120 87",
    "6 78 59"
  ],
  "preset-9": [
    "204 251 241",
    "94 234 212",
    "20 184 166",
    "15 118 110",
    "19 78 74"
  ],
  "preset-10": [
    "207 250 254",
    "103 232 249",
    "6 182 212",
    "14 116 144",
    "22 78 99"
  ],
  "preset-11": [
    "224 242 254",
    "125 211 252",
    "14 165 233",
    "3 105 161",
    "12 74 110"
  ],
  "preset-12": [
    "219 234 254",
    "147 197 253",
    "59 130 246",
    "29 78 216",
    "30 58 138"
  ],
  "preset-13": [
    "224 231 255",
    "165 180 252",
    "99 102 241",
    "67 56 202",
    "49 46 129"
  ],
  "preset-14": [
    "237 233 254",
    "196 181 253",
    "139 92 246",
    "109 40 217",
    "76 29 149"
  ],
  "preset-15": [
    "243 232 255",
    "216 180 254",
    "168 85 247",
    "126 34 206",
    "88 28 135"
  ],
  "preset-16": [
    "250 232 255",
    "240 171 252",
    "217 70 239",
    "162 28 175",
    "112 26 117"
  ],
  "preset-17": [
    "252 231 243",
    "249 168 212",
    "236 72 153",
    "190 24 93",
    "131 24 67"
  ],
  "preset-18": [
    "255 228 230",
    "253 164 175",
    "244 63 94",
    "190 18 60",
    "136 19 55"
  ]
};

const toOpaque = (rgb: string, alpha: number, base: number = 255) => {
  const [r, g, b] = rgb.split(" ").map(Number);
  const blend = (c: number) => Math.round(c * alpha + base * (1 - alpha));
  return `rgb(${blend(r)} ${blend(g)} ${blend(b)})`;
};

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
    .join("\n");

//  ------------------------------ | CUSTOMIZER - THEME PRESET STYLES | ------------------------------  //

export function ThemePresetStyles() {
  return <style dangerouslySetInnerHTML={{ __html: buildPresetStyles() }} />;
}
