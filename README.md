
# OSM Drawing App (React + TypeScript)

## Setup
```bash
npm install
npm run dev
```

## Features
- OpenStreetMap tiles
- GeoJSON feature store
- Turf.js ready for polygon clipping
- Export GeoJSON

## Polygon Overlap Logic
Use turf.intersect / turf.difference to auto-trim overlaps.
If turf.booleanContains(existing, newPolygon) → block creation.

## Sample Export
```json
{
  "type": "FeatureCollection",
  "features": []
}
```
