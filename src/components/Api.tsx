export default function Api() {
  return (
    <div
      style={{
        padding: 40,
        maxWidth: 900,
        margin: "0 auto",
        fontFamily: "sans-serif"
      }}
    >
      <h1 style={{ color: "#1f7a4d" }}>API Reference</h1>

      <p>
        This page documents the core APIs and tools used in this project.
        The application uses <strong>Turf.js</strong> for spatial analysis
        and <strong>Leaflet</strong> for map rendering.
      </p>

      <h2>Drawing APIs</h2>
      <ul>
        <li>Polygon Drawing</li>
        <li>Rectangle Drawing</li>
        <li>Circle Drawing</li>
        <li>LineString Drawing</li>
      </ul>

      <h2>Spatial Operations (Turf.js)</h2>
      <ul>
        <li><code>intersect()</code> – Detect overlapping geometries</li>
        <li><code>difference()</code> – Auto-trim overlaps</li>
        <li><code>booleanContains()</code> – Block full containment</li>
        <li><code>area()</code> – Calculate polygon area</li>
      </ul>

      <h2>Export</h2>
      <p>
        All drawn features are exported as valid <strong>GeoJSON</strong>
        including geometry and metadata.
      </p>

      <p style={{ marginTop: 30, fontWeight: "bold", color: "#1f7a4d" }}>
        API documented by Shivam Kumar
      </p>
    </div>
  );
}
