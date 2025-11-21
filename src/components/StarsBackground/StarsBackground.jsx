"use client";

import { useEffect, useRef } from "react";

export default function StarsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5;
        this.opacity = Math.random();
        this.twinkleSpeed = Math.random() * 0.05 + 0.01;
        this.direction = Math.random() > 0.5 ? 1 : -1;
        this.baseOpacity = this.opacity;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#fff";
        ctx.fill();
      }

      update() {
        this.opacity += this.direction * this.twinkleSpeed;
        if (this.opacity <= 0.2 || this.opacity >= 1) {
          this.direction *= -1;
        }
        this.draw();
      }
    }

    const stars = [];
    const starCount = window.innerWidth < 768 ? 150 : 300;

    for (let i = 0; i < starCount; i++) stars.push(new Star());

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => star.update());
      requestAnimationFrame(animate);
    }
    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="stars-canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // IMPORTANT: Keep background behind content
        background: "black",
      }}
    />
  );
}
