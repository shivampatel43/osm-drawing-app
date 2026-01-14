import { useContext } from "react";
import { FeatureContext } from "../state/FeatureContext";

type Props = {
  onDocsClick?: () => void;
  onApiClick?: () => void;
  onBlogClick?: () => void;
};

export default function DrawingToolbar({
  onDocsClick,
  onApiClick,
  onBlogClick
}: Props) {
  const { exportGeoJSON } = useContext(FeatureContext);

  return (
    <div style={sidebar}>
      {/* TOP SECTION */}
      <div>
        <h2 style={title}>Turf.js Tools</h2>
        <p style={subtitle}>Polygon / Circle / Rectangle / Line</p>

        <button style={button}>Drawing Enabled</button>

        <button style={button} onClick={exportGeoJSON}>
          Export GeoJSON
        </button>
      </div>

      {/* BOTTOM SECTION */}
      <div style={bottomSection}>
        <hr style={{ borderColor: "#2f855a" }} />

        <button style={linkButton} onClick={onDocsClick}>
          Docs
        </button>
        <button style={linkButton} onClick={onApiClick}>
          API
        </button>
        <button style={linkButton} onClick={onBlogClick}>
          Blog
        </button>

        <div style={github}>
          GitHub: <strong>shivampatel43</strong>
        </div>
      </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const sidebar: React.CSSProperties = {
  width: 260,
  background: "#1f7a4d",
  color: "#ffffff",
  padding: 16,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
};

const title: React.CSSProperties = {
  marginTop: 0,
  marginBottom: 8
};

const subtitle: React.CSSProperties = {
  fontSize: 14,
  marginBottom: 16,
  opacity: 0.9
};

const button: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  marginBottom: 10,
  border: "none",
  borderRadius: 4,
  cursor: "pointer"
};

const bottomSection: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 6
};

const linkButton: React.CSSProperties = {
  background: "transparent",
  border: "none",
  color: "#ffffff",
  textAlign: "left",
  cursor: "pointer",
  fontSize: 14,
  padding: "4px 0"
};

const github: React.CSSProperties = {
  marginTop: 10,
  fontSize: 13,
  opacity: 0.9
};
