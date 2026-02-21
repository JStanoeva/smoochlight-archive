function Navbar({ page, goTo }) {
  return (
    <div className="navbar">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          width: "100%",
          justifyContent: "space-between",
          maxWidth: 900,
        }}
      >
        <span
          className="navbar-title"
          style={{ cursor: "pointer", whiteSpace: "nowrap" }}
          onClick={() => goTo(0)}
        >
          The Smoochlight Archive
        </span>
        <div
          className="nav-dots"
          style={{ flexWrap: "wrap", justifyContent: "center" }}
        >
          {Array.from({ length: 14 }, (_, i) => (
            <div
              key={i}
              className={`nav-dot ${page === i ? "active" : ""}`}
              onClick={() => goTo(i)}
              title={i === 0 ? "Home" : i === 13 ? "Final" : `Day ${i}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;