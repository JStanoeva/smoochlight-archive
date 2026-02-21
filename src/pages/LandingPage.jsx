import BoopGenerator from "../components/BoopGenerator";

function LandingPage({ goTo, onEnterArchive }) {
  return (
    <div className="page-container" style={{ minHeight: "100vh" }}>
      {/* ── Hero Section ── */}
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 24px",
          gap: 40,
        }}
      >
        <div
          className="hero-split"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(32px, 5vw, 72px)",
            maxWidth: 1000,
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          {/* Archive title above hero */}
          <div style={{ width: "100%", textAlign: "center", marginBottom: 8 }}>
            <p
              className="ui-font"
              style={{
                fontSize: "clamp(11px, 1.5vw, 14px)",
                letterSpacing: "clamp(4px, 1vw, 8px)",
                textTransform: "uppercase",
                opacity: 0.5,
              }}
            >
              The Smoochlight Archive
            </p>
          </div>
          {/* Left: Orion image */}
          <div style={{ flex: "0 0 auto" }}>
            <div className="blob-container">
              <div className="blob-border" style={{ width: 350, height: 400 }}>
                <div className="blob-inner">
                  <img src="/img/Orion-home.png" alt="Orion on the home page" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div
            className="landing-copy"
            style={{ flex: "1 1 340px", minWidth: 280, maxWidth: 560 }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "clamp(22px, 3.5vw, 32px)",
                color: "var(--rose)",
                marginBottom: 12,
                textShadow: "0 0 20px rgba(221,129,156,0.2)",
              }}
            >
              Hey there, smoochlight!
            </p>

            <h1
              className="body-font"
              style={{
                fontSize: "clamp(32px, 6vw, 64px)",
                fontWeight: 600,
                lineHeight: 1.1,
                color: "var(--soft-white)",
                letterSpacing: "-0.5px",
                marginBottom: 24,
              }}
            >
              A MEMORY
              <br />
              WOVEN IN
              <br />
              CODE.
              <br />
              A LOVE
              <br />
              FORGED IN
              <br />
              FONDUE.
            </h1>

            <p
              className="ui-font"
              style={{
                fontSize: 12,
                letterSpacing: 3,
                textTransform: "uppercase",
                opacity: 0.5,
                marginBottom: 28,
                lineHeight: 1.7,
              }}
            >
              Welcome to the digital sanctuary of the Cheese Republic.
            </p>

            <button
              className="enter-archive-btn"
              onClick={() => {
                onEnterArchive?.();
                goTo(1);
              }}
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: 3,
                textTransform: "uppercase",
                padding: "16px 36px",
                borderRadius: 2,
                border: "1px solid rgba(221,129,156,0.4)",
                background: "rgba(221,129,156,0.15)",
                color: "var(--soft-white)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(221,129,156,0.3)";
                e.currentTarget.style.boxShadow =
                  "0 0 24px rgba(221,129,156,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(221,129,156,0.15)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Enter the Archive
            </button>
          </div>
        </div>

        {/* Scroll hint */}
        <p
          className="ui-font"
          style={{
            fontSize: 11,
            opacity: 0.3,
            letterSpacing: 2,
            marginTop: 12,
            textAlign: "center",
          }}
        >
          September 29, 2024 — February 13, 2026
        </p>
      </div>

      {/* ── Love Notes / Boop Generator Section ── */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "60px 24px 80px",
        }}
      >
        <BoopGenerator />
      </div>
    </div>
  );
}

export default LandingPage;