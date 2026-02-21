import { useEffect, useRef } from "react";

function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width, height;
    let animId;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    class Sparkle {
      constructor() {
        this.init();
      }
      init() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.opacity = Math.random();
        this.speedY = Math.random() * -0.5 - 0.1;
        this.fade = Math.random() * 0.01 + 0.005;
      }
      update() {
        this.y += this.speedY;
        this.opacity -= this.fade;
        if (this.opacity <= 0) this.init();
      }
      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const sparkles = [];
    for (let i = 0; i < 120; i++) sparkles.push(new Sparkle());

    function animate() {
      ctx.clearRect(0, 0, width, height);
      sparkles.forEach((s) => {
        s.update();
        s.draw();
      });
      animId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="sparkle-canvas" />;
}

export default StarField;