export default function Docs() {
  return (
    <div
      style={{
        display: "flex",
        height: "calc(100vh - 56px)", // below header
        fontFamily: "sans-serif"
      }}
    >
      {/* LEFT SIDEBAR */}
      <div
        style={{
          width: 260,
          background: "#f6f6f6",
          borderRight: "1px solid #ddd",
          padding: 20,
          overflowY: "auto"
        }}
      >
        <h3 style={{ marginTop: 0, color: "#1f7a4d" }}>Documentation</h3>

        <ul style={sidebarList}>
          <li>Introduction</li>
          <li>Getting Started</li>
          <li>Map Rendering</li>
          <li>Drawing Tools</li>
          <li>Spatial Rules</li>
          <li>GeoJSON Export</li>
          <li>Tech Stack</li>
        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div
        style={{
          flex: 1,
          padding: "30px 40px",
          overflowY: "auto"
        }}
      >
        <h1>OpenStreetMap Drawing App – Docs</h1>

        <p>
          This documentation explains how the Web GIS Drawing Application works.
          The project is inspired by OpenStreetMap and Turf.js documentation
          layouts.
        </p>

        <h2>1. Introduction</h2>
        <p>
          This application allows users to draw and manage geometrical features
          on top of OpenStreetMap free tiles using a modern frontend stack.
        </p>

        <h2>2. Getting Started</h2>
        <pre style={codeBlock}>
npm install
npm run dev
        </pre>

        <h2>3. Map Rendering</h2>
        <p>
          OpenStreetMap tiles are rendered using <strong>Leaflet</strong> and
          <strong> React-Leaflet</strong>. The map supports smooth zooming and
          panning.
        </p>

        <h2>4. Drawing Tools</h2>
        <ul>
          <li>Polygon</li>
          <li>Rectangle</li>
          <li>Circle</li>
          <li>LineString</li>
        </ul>

        <h2>5. Spatial Rules</h2>
        <p>
          Polygon-based shapes are validated using <strong>Turf.js</strong>.
        </p>
        <ul>
          <li>Overlapping polygons are auto-trimmed</li>
          <li>Fully enclosed polygons are blocked</li>
          <li>LineStrings can overlap freely</li>
        </ul>

        <h2>6. GeoJSON Export</h2>
        <p>
          All drawn features can be exported as valid GeoJSON with geometry and
          metadata.
        </p>

        <h2>7. Tech Stack</h2>
        <ul>
          <li>React + TypeScript</li>
          <li>Leaflet / React-Leaflet</li>
          <li>OpenStreetMap</li>
          <li>Turf.js</li>
          <li>Vite</li>
        </ul>

        <p style={{ marginTop: 40, color: "#1f7a4d", fontWeight: "bold" }}>
          Documentation by Shivam Kumar
        </p>
      </div>
    </div>
  );
}

const sidebarList: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  lineHeight: "1.9",
  cursor: "pointer"
};

const codeBlock: React.CSSProperties = {
  background: "#272822",
  color: "#f8f8f2",
  padding: 15,
  borderRadius: 6,
  fontSize: 14,
  marginTop: 10
};
