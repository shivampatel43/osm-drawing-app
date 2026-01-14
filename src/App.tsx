import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Header from "./components/Header";
import DrawingToolbar from "./components/DrawingToolbar";
import FeatureLayer from "./components/FeatureLayer";
import Blog from "./components/Blog";
import Api from "./components/Api";
import Docs from "./components/Docs";
import { FeatureProvider } from "./state/FeatureContext";

export default function App() {
  // page navigation
  const [page, setPage] = useState<
    "map" | "docs" | "api" | "blog" | "history" | "export" | "help"
  >("map");

  // login / signup modal
  const [authModal, setAuthModal] = useState<"login" | "signup" | null>(null);

  // search
  const [searchQuery, setSearchQuery] = useState<string | null>(null);

  return (
    <FeatureProvider>
      <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        {/* TOP HEADER */}
        <Header
          onHomeClick={() => setPage("map")}
          onMenuClick={(menu) => setPage(menu)}
          onLogin={() => setAuthModal("login")}
          onSignup={() => setAuthModal("signup")}
          onSearch={(q) => setSearchQuery(q)}
        />

        {/* LOGIN / SIGNUP MODAL */}
        {authModal && (
          <div style={overlay}>
            <div style={modal}>
              <h2>{authModal === "login" ? "Log in" : "Sign up"}</h2>
              <input placeholder="Email" style={input} />
              <input placeholder="Password" type="password" style={input} />
              <button onClick={() => setAuthModal(null)}>Close</button>
            </div>
          </div>
        )}

        {/* SEARCH RESULT */}
        {searchQuery && (
          <div style={overlay}>
            <div style={modal}>
              <h3>Search</h3>
              <p>
                You searched for: <strong>{searchQuery}</strong>
              </p>
              <button onClick={() => setSearchQuery(null)}>Close</button>
            </div>
          </div>
        )}

        {/* MAIN CONTENT */}
        {page === "docs" ? (
          <Docs />
        ) : page === "api" ? (
          <Api />
        ) : page === "blog" ? (
          <Blog />
        ) : page === "history" ? (
          <SimplePage title="History" />
        ) : page === "export" ? (
          <SimplePage title="Export" />
        ) : page === "help" ? (
          <SimplePage title="Help" />
        ) : (
          <div style={{ flex: 1, display: "flex" }}>
            {/* GREEN SIDEBAR */}
            <DrawingToolbar
              onDocsClick={() => setPage("docs")}
              onApiClick={() => setPage("api")}
              onBlogClick={() => setPage("blog")}
            />

            {/* MAP */}
            <MapContainer
              center={[28.6139, 77.209]}
              zoom={5}
              style={{ flex: 1 }}
            >
              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <FeatureLayer />
            </MapContainer>
          </div>
        )}
      </div>
    </FeatureProvider>
  );
}

/* ---------------- SIMPLE PAGE ---------------- */

function SimplePage({ title }: { title: string }) {
  return (
    <div style={{ padding: 40 }}>
      <h1>{title}</h1>
      <p>This page is implemented as part of the frontend UI.</p>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const overlay: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000
};

const modal: React.CSSProperties = {
  background: "#fff",
  padding: 20,
  borderRadius: 8,
  width: 300
};

const input: React.CSSProperties = {
  width: "100%",
  padding: 8,
  marginBottom: 10
};
