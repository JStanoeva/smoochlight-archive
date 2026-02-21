import { useCallback, useRef, useState } from "react";

function OrionImage({
  size = 280,
  interactive = false,
  src = "/img/Orion-home.png",
  alt = "Orion portrait",
}) {
  const [boops, setBoops] = useState([]);
  const containerRef = useRef(null);

  const handleClick = useCallback(
    (e) => {
      if (!interactive) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const texts = ["boop!", "smooch!", "melt!", "cheese!"];
      const text = texts[Math.floor(Math.random() * texts.length)];
      const id = Date.now();
      const tx = (Math.random() - 0.5) * 60;
      setBoops((prev) => [...prev, { id, x, y, text, tx }]);
      setTimeout(
        () => setBoops((prev) => prev.filter((b) => b.id !== id)),
        1200,
      );
    },
    [interactive],
  );

  return (
    <div
      ref={containerRef}
      className="blob-container"
      style={{ cursor: interactive ? "pointer" : "default" }}
      onClick={handleClick}
    >
      <div className="blob-border" style={{ width: size, height: size }}>
        <div className="blob-inner">
          <img src={src} alt={alt} />
        </div>
      </div>
      {boops.map((b) => (
        <span
          key={b.id}
          className="boop-text"
          style={{ left: b.x, top: b.y, "--tx": `${b.tx}px` }}
        >
          {b.text}
        </span>
      ))}
    </div>
  );
}

export default OrionImage;