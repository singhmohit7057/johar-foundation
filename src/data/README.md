# Shared Data — Single Source of Truth

## footprintRegions.ts

Defines the 5 eastern states Johar Foundation operates in.

**Used by:**
- `src/pages/Homepage.tsx` — "States We Serve" map section
- `src/pages/Initiatives.tsx` — "Regional Footprint" map section

**Structure of each entry:**
```ts
{
  id: string;          // Short state code (e.g. 'JH', 'OR')
  name: string;        // Full name matching GeoJSON properties.name exactly
  tagline: string;     // Pill label shown above the state heading
  description: string; // Paragraph shown in the info panel
  highlights: string[] // 3 bullet points shown below the description
}
```

**Rule: edit here, both pages update automatically.**
Do NOT copy this data into individual page files. If you add a new state,
add it here and it will appear on both pages.

**GeoJSON note:**
The map uses `/public/india-states.json`. State names in `name` must match
`geo.properties.name` in that file exactly. Known patches already applied:
- "Orissa" → "Odisha"
- "Uttaranchal" → "Uttarakhand"

**Map config (both pages use the same projection):**
```ts
projection="geoMercator"
projectionConfig={{ center: [85.05, 22.74], scale: 2600 }}
width={500}
height={600}
```
