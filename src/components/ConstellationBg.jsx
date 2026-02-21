function ConstellationBg() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.1,
        zIndex: 1,
      }}
    >
      <svg
        className="celestial-wheel"
        style={{
          width: "150vmax",
          height: "150vmax",
          color: "#dd819c",
        }}
        viewBox="0 0 100 100"
      >
        {/* Outer dashed ring */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.1"
          strokeDasharray="1 1"
        />
        {/* Inner solid ring */}
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.1"
        />
        {/* Cross lines */}
        <path
          d="M50 10 L50 90 M10 50 L90 50"
          stroke="currentColor"
          strokeWidth="0.1"
        />
        {/* X lines */}
        <path
          d="M22 22 L78 78 M22 78 L78 22"
          stroke="currentColor"
          strokeWidth="0.1"
        />
        {/* Cardinal dots */}
        <circle cx="50" cy="10" r="1" fill="currentColor" />
        <circle cx="50" cy="90" r="1" fill="currentColor" />
        <circle cx="10" cy="50" r="1" fill="currentColor" />
        <circle cx="90" cy="50" r="1" fill="currentColor" />
      </svg>
    </div>
  );
}

export default ConstellationBg;