// StarsBackground.jsx
import { useEffect, useRef } from "react";

export default function StarsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // ── Étoiles statiques ──
    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.02 + 0.005,
    }));

    // ── Étoiles filantes ──
    const shootingStars = [];

    const createShootingStar = () => {
      shootingStars.push({
        x: Math.random() * width * 0.8,
        y: Math.random() * height * 0.5,
        len: Math.random() * 80 + 50,
        speed: Math.random() * 12 + 8,
        angle: Math.PI / 4 + (Math.random() * 0.1 - 0.05),
      });
    };

    const maxShootingStars = 2; // Nombre maximum à l'écran
    let shootingInterval = 0;

    // ── Planète ──
    const planet = {
      x: width * 0.8,
      y: height * 0.2,
      radius: 60,
      angle: 0,
      speed: 0.0015,
    };

    const draw = () => {
        // ── Remplir le fond noir à chaque frame ──
        ctx.fillStyle = "#000000"; // couleur de l'espace
        ctx.fillRect(0, 0, width, height);

        // ── Étoiles statiques ──
        stars.forEach((s) => {
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
            ctx.fill();
            s.alpha += s.speed;
            if (s.alpha > 1 || s.alpha < 0.2) s.speed *= -1;
        });

        // ── Étoiles filantes ──
        shootingStars.forEach((star, i) => {
            star.x += Math.cos(star.angle) * star.speed;
            star.y += Math.sin(star.angle) * star.speed;
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(star.x - Math.cos(star.angle) * star.len, star.y - Math.sin(star.angle) * star.len);
            ctx.strokeStyle = "rgba(255, 255, 240, 0.8)";
            ctx.lineWidth = 1;
            ctx.stroke();
            if (star.x > width || star.y > height) shootingStars.splice(i, 1);
        });

        // ── Nouvelle étoile filante aléatoire ──
        shootingInterval++;
        if (shootingInterval % 200 === 0 && shootingStars.length < maxShootingStars) {
            createShootingStar();
        }

        // ── Planète ──
        planet.angle += planet.speed;
        const planetX = planet.x + Math.cos(planet.angle) * 20;
        const planetY = planet.y + Math.sin(planet.angle) * 10;
        const gradient = ctx.createRadialGradient(planetX, planetY, 10, planetX, planetY, planet.radius);
        gradient.addColorStop(0, "rgba(255, 174, 0, 0.8)");
        gradient.addColorStop(1, "rgba(50,50,80,0.0)");
        ctx.beginPath();
        ctx.arc(planetX, planetY, planet.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        const nebulaGradient = ctx.createRadialGradient(width/2, height/3, 0, width/2, height/3, width/1.5);
            nebulaGradient.addColorStop(0, "rgba(100, 50, 200, 0.15)");
            nebulaGradient.addColorStop(1, "rgba(0,0,0,0)");
            ctx.fillStyle = nebulaGradient;
            ctx.fillRect(0, 0, width, height);

        requestAnimationFrame(draw);
        };

    draw();


    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
}

