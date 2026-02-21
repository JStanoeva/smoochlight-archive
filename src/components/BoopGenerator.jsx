import { useState } from "react";
import { Sparkles } from "lucide-react";
import { BOOP_PHRASES } from "../data/archiveData";

function BoopGenerator() {
  const [current, setCurrent] = useState(null);
  const [animating, setAnimating] = useState(false);

  const generate = () => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent(BOOP_PHRASES[Math.floor(Math.random() * BOOP_PHRASES.length)]);
      setAnimating(false);
    }, 300);
  };

  return (
    <div
      style={{
        textAlign: "center",
        width: "100%",
        maxWidth: 680,
        padding: "0 20px",
      }}
    >
      {/* Section title */}
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontSize: "clamp(24px, 4vw, 34px)",
          color: "var(--rose)",
          marginBottom: 6,
        }}
      >
        love notes
      </p>
      <div
        style={{
          width: 48,
          height: 1,
          background: "var(--rose)",
          margin: "0 auto 28px",
          opacity: 0.6,
        }}
      />

      {/* Quote card */}
      <div
        style={{
          position: "relative",
          padding: "36px 32px 28px",
          borderRadius: 12,
          border: "1px solid rgba(221,129,156,0.25)",
          background: "rgba(59,31,82,0.3)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          minHeight: 140,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 28,
        }}
      >
        {/* Decorative sparkles */}
        <Sparkles
          size={16}
          style={{
            position: "absolute",
            top: 16,
            left: 20,
            color: "var(--rose)",
            opacity: 0.5,
          }}
        />
        <Sparkles
          size={14}
          style={{
            position: "absolute",
            bottom: 16,
            right: 20,
            color: "var(--rose)",
            opacity: 0.5,
          }}
        />

        {current ? (
          <div
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(8px)" : "translateY(0)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "clamp(18px, 3vw, 22px)",
                fontWeight: 500,
                lineHeight: 1.6,
                color: "var(--soft-white)",
                marginBottom: 14,
              }}
            >
              &ldquo;{current.quote}&rdquo;
            </p>
            <p
              className="ui-font"
              style={{
                fontSize: 12,
                letterSpacing: 2,
                textTransform: "uppercase",
                opacity: 0.5,
              }}
            >
              {current.sub}
            </p>
          </div>
        ) : (
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(17px, 2.5vw, 20px)",
              opacity: 0.4,
              lineHeight: 1.6,
            }}
          >
            Press below to receive a love note from Orion...
          </p>
        )}
      </div>

      {/* Button */}
      <button
        className="smooch-btn"
        onClick={generate}
        style={{
          fontSize: 13,
          letterSpacing: 2,
          textTransform: "uppercase",
          padding: "12px 28px",
          borderRadius: 4,
          background: "transparent",
          border: "1px solid rgba(221,129,156,0.35)",
        }}
      >
        Next Note
      </button>
    </div>
  );
}

export default BoopGenerator;