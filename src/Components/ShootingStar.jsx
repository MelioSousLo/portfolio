// ─── Shooting Star ─────────────────────────────────────────────
import { useEffect, useRef } from "react";

export default function ShootingStar({ onDone }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    let x = Math.random() * canvas.width * 0.5;
    let y = Math.random() * canvas.height * 0.3;
    const angle = Math.PI / 6 + Math.random() * 0.3;
    const speed = 18;
    const tail = [];
    let done = false;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      x += Math.cos(angle) * speed;
      y += Math.sin(angle) * speed;
      tail.push({ x, y });
      if (tail.length > 18) tail.shift();
      tail.forEach((pt, i) => {
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 1.5 * (i / tail.length), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,240,${i / tail.length * 0.9})`;
        ctx.fill();
      });
      if (x > canvas.width + 50 || y > canvas.height + 50) { done = true; onDone(); }
      if (!done) requestAnimationFrame(draw);
    };
    draw();
  }, [onDone]);

  return <canvas ref={canvasRef} className="fixed inset-0 z-50 pointer-events-none" />;
}