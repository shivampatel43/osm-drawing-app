import { useState } from "react";

type HeaderProps = {
  onHomeClick: () => void;
  onMenuClick: (
    menu: "history" | "export" | "help" | "map" | "blog" | "api" | "docs"
  ) => void;
  onLogin: () => void;
  onSignup: () => void;
  onSearch: (query: string) => void;
};

export default function Header({
  onHomeClick,
  onMenuClick,
  onLogin,
  onSignup,
  onSearch
}: HeaderProps) {
  const [searchText, setSearchText] = useState("");

  return (
    <header style={headerStyle}>
      {/* LOGO */}
      <div style={logoStyle} onClick={onHomeClick}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Openstreetmap_logo.svg"
          alt="OpenStreetMap"
          style={{ height: 28, marginRight: 8 }}
        />
        <strong>OpenStreetMap</strong>
      </div>

      {/* MENU ITEMS */}
      <nav style={menuStyle}>
        <MenuItem label="History" onClick={() => onMenuClick("history")} />
        <MenuItem label="Export" onClick={() => onMenuClick("export")} />
        <MenuItem label="GPS Tracks" onClick={() => onMenuClick("history")} />
        <MenuItem label="User Diaries" onClick={() => onMenuClick("history")} />
        <MenuItem label="Communities" onClick={() => onMenuClick("history")} />
        <MenuItem label="Copyright" onClick={() => onMenuClick("help")} />
        <MenuItem label="Help" onClick={() => onMenuClick("help")} />
        <MenuItem label="About" onClick={() => onMenuClick("docs")} />
      </nav>

      {/* SPACER */}
      <div style={{ flex: 1 }} />

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={searchInput}
      />
      <button
        style={actionButton}
        onClick={() => onSearch(searchText)}
      >
        Search
      </button>

      {/* AUTH */}
      <button style={actionButton} onClick={onLogin}>
        Log in
      </button>
      <button style={actionButton} onClick={onSignup}>
        Sign up
      </button>
    </header>
  );
}

/* ---------------- SUB COMPONENT ---------------- */

function MenuItem({
  label,
  onClick
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button style={menuButtonStyle} onClick={onClick}>
      {label}
    </button>
  );
}

/* ---------------- STYLES ---------------- */

const headerStyle: React.CSSProperties = {
  height: 56,
  background: "#2c3034",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  padding: "0 12px",
  gap: 10,
  fontFamily: "sans-serif"
};

const logoStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  fontSize: 16
};

const menuStyle: React.CSSProperties = {
  display: "flex",
  gap: 6
};

const menuButtonStyle: React.CSSProperties = {
  background: "transparent",
  border: "none",
  color: "#ffffff",
  cursor: "pointer",
  fontSize: 14,
  padding: "6px 8px"
};

const searchInput: React.CSSProperties = {
  height: 28,
  padding: "0 8px",
  borderRadius: 4,
  border: "none",
  outline: "none"
};

const actionButton: React.CSSProperties = {
  height: 28,
  padding: "0 10px",
  borderRadius: 4,
  border: "none",
  cursor: "pointer",
  marginLeft: 4
};
