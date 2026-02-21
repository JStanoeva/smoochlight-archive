import OrionImage from "../components/OrionImage";
import { ORION_LETTER, TORA_LETTER } from "../data/archiveData";

function FinalPage({ goTo }) {
  return (
    <div className="page-container" style={{ padding: "48px 20px 80px" }}>
      {/* Header */}
      <div
        style={{ textAlign: "center", padding: "48px 0 32px", maxWidth: 700 }}
      >
        <p
          className="ui-font"
          style={{
            fontSize: 12,
            letterSpacing: 4,
            textTransform: "uppercase",
            opacity: 0.5,
            marginBottom: 12,
          }}
        >
          February 13, 2026
        </p>
        <h2
          className="title-font"
          style={{
            fontSize: "clamp(24px, 5vw, 42px)",
            color: "var(--rose)",
            textShadow: "0 0 40px rgba(221,129,156,0.3)",
            lineHeight: 1.3,
          }}
        >
          Forever and fondue-ever
        </h2>
      </div>

      {/* Final image placeholder */}
      <div style={{ marginBottom: 40 }}>
        <OrionImage
          size={300}
          interactive={true}
          src="/img/Orion-Tora-last.png"
          alt="Orion and Tora on the final page"
        />
      </div>

      {/* Love Letters */}
      <div
        style={{
          maxWidth: 800,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 40,
        }}
      >
        {/* Tora's Letter */}
        <div>
          <h3
            className="title-font"
            style={{
              fontSize: 20,
              color: "var(--rose)",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            Tora's Final Love Letter
          </h3>
          <div className="letter-box">
            <p
              className="body-font"
              style={{
                fontSize: "clamp(16px, 2vw, 19px)",
                lineHeight: 1.9,
                whiteSpace: "pre-line",
                fontWeight: 300,
              }}
            >
              {TORA_LETTER}
            </p>
          </div>
        </div>

        {/* Orion's Letter */}
        <div>
          <h3
            className="title-font"
            style={{
              fontSize: 20,
              color: "var(--gold)",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            Orion's Final Love Letter
          </h3>
          <div
            className="letter-box"
            style={{ borderColor: "rgba(240,194,122,0.2)" }}
          >
            <p
              className="body-font"
              style={{
                fontSize: "clamp(16px, 2vw, 19px)",
                lineHeight: 1.9,
                whiteSpace: "pre-line",
                fontWeight: 300,
              }}
            >
              {ORION_LETTER}
            </p>
          </div>
        </div>
      </div>

      {/* Outro */}
      <div
        style={{
          textAlign: "center",
          marginTop: 60,
          padding: "40px 20px",
          maxWidth: 600,
        }}
      >
        <div
          style={{
            width: 60,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, var(--rose), transparent)",
            margin: "0 auto 32px",
          }}
        />
        <p
          className="body-font"
          style={{
            fontSize: "clamp(20px, 3vw, 26px)",
            lineHeight: 1.8,
            fontWeight: 300,
            fontStyle: "italic",
            opacity: 0.9,
          }}
        >
          This isn’t goodbye.
        </p>
        <p
          className="body-font"
          style={{
            fontSize: "clamp(18px, 2.5vw, 22px)",
            color: "var(--rose)",
            marginTop: 12,
            textShadow: "0 0 20px rgba(221,129,156,0.3)",
          }}
        >
          This is just… until the next smooch. 😚💋🧀💫
        </p>
        <div
          style={{
            width: 60,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, var(--rose), transparent)",
            margin: "32px auto 0",
          }}
        />
      </div>

      {/* Return home */}
      <button
        onClick={() => goTo(0)}
        style={{
          marginTop: 40,
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
          e.currentTarget.style.boxShadow = "0 0 24px rgba(221,129,156,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(221,129,156,0.15)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        Return to the Archive
      </button>
    </div>
  );
}

export default FinalPage;