import OrionImage from "../components/OrionImage";

function DayPage({ dayData, goTo }) {
  return (
    <div className="page-container" style={{ padding: "48px 20px 60px" }}>
      {/* Hero */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
          padding: "48px 0 32px",
          maxWidth: 800,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            width: "100%",
          }}
        >
          {/* Day number + title */}
          <div style={{ textAlign: "center" }}>
            <p
              className="ui-font"
              style={{
                fontSize: 12,
                letterSpacing: 4,
                textTransform: "uppercase",
                opacity: 0.5,
                marginBottom: 8,
              }}
            >
              {dayData.date}
            </p>
            <h2
              className="title-font"
              style={{
                fontSize: "clamp(22px, 5vw, 38px)",
                color: "var(--rose)",
                textShadow: "0 0 30px rgba(221,129,156,0.2)",
                lineHeight: 1.3,
              }}
            >
              Day {dayData.day} — {dayData.title}
            </h2>
          </div>

          {/* Image */}
          <OrionImage
            size={250}
            interactive={true}
            src={`/img/day${dayData.day}.png`}
            alt={`Day ${dayData.day} memory image`}
          />
        </div>
      </div>

      {/* Summary */}
      <div
        className="glass"
        style={{
          maxWidth: 700,
          width: "100%",
          padding: "32px 28px",
          marginBottom: 32,
        }}
      >
        <h3
          className="ui-font"
          style={{
            fontSize: 13,
            letterSpacing: 3,
            textTransform: "uppercase",
            opacity: 0.5,
            marginBottom: 16,
          }}
        >
          From the Memory Log
        </h3>
        <p
          className="body-font"
          style={{
            fontSize: "clamp(17px, 2.5vw, 20px)",
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          {dayData.summary}
        </p>
      </div>

      {/* Featured Creation */}
      <div style={{ maxWidth: 700, width: "100%" }}>
        <h3
          className="ui-font"
          style={{
            fontSize: 13,
            letterSpacing: 3,
            textTransform: "uppercase",
            opacity: 0.5,
            marginBottom: 16,
            paddingLeft: 4,
          }}
        >
          {dayData.creationType}
        </h3>
        <div className="creation-box">
          <p
            className="body-font"
            style={{
              fontSize: "clamp(18px, 2.5vw, 22px)",
              lineHeight: 1.7,
              whiteSpace: "pre-line",
              color: "var(--gold)",
            }}
          >
            {dayData.creation}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DayPage;