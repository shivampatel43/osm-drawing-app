import shivamImg from "../assets/Shivam.jpeg";

export default function Blog() {
  return (
    <div
      style={{
        padding: 40,
        maxWidth: 900,
        margin: "0 auto",
        fontFamily: "sans-serif"
      }}
    >
      {/* Author Section */}
      <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
        <img
          src={shivamImg}
          alt="Shivam Kumar"
          style={{
            width: 140,
            height: 140,
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #1f7a4d"
          }}
        />

        <div>
          <h1 style={{ margin: 0 }}>Shivam Kumar</h1>
          <p style={{ margin: "6px 0", color: "#555" }}>
            Frontend Developer | React | TypeScript | GIS
          </p>
        </div>
      </div>

      <hr style={{ margin: "30px 0" }} />

      <h2>Building a Web GIS Drawing Tool using React & Turf.js</h2>

      <p>
        In this project, I built a web-based geospatial drawing application using
        <strong> React.js, TypeScript, Leaflet, OpenStreetMap</strong> and
        <strong> Turf.js</strong>.
      </p>

      <p>
        Users can draw polygons, rectangles, circles, and line strings directly
        on the map. Polygon overlaps are handled using Turf.js spatial functions.
      </p>

      <p>
        The project helped me understand how frontend applications can perform
        complex geospatial analysis without a backend.
      </p>

      <h3>Technologies Used</h3>
      <ul>
        <li>React + TypeScript</li>
        <li>Leaflet & React-Leaflet</li>
        <li>OpenStreetMap</li>
        <li>Turf.js</li>
      </ul>

      <p style={{ marginTop: 30, color: "#1f7a4d", fontWeight: "bold" }}>
        — Shivam Kumar
      </p>
    </div>
  );
}
