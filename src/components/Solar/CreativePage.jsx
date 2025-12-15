"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CreativePage.css";

gsap.registerPlugin(ScrollTrigger);

export default function CreativePage() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);

  // Scroll progress for stars
  const scrollProgressRef = useRef(0);

  // ============ STARS BACKGROUND (EXACT SAME AS CreativeText) ============
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrame;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const stars = [];
    const starCount = window.innerWidth < 768 ? 1050 : 1500; // Optimized count

    for (let i = 0; i < starCount; i++) {
      stars.push({
        baseX: Math.random() * canvas.offsetWidth * 1.3,
        baseY: Math.random() * canvas.offsetHeight * 1.3,
        radius: Math.random() * 0.9 + 0.3,
        opacity: Math.random() * 0.5 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.008,
        twinklePhase: Math.random() * Math.PI * 2,
        driftX: (Math.random() - 0.5) * 0.03,
        driftY: (Math.random() - 0.5) * 0.04,
      });
    }

    const animateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const prog = scrollProgressRef.current;

      // Remove the early return – stars ab hamesha draw honge
      // const starsStart = 0.6;
      // if (prog < starsStart) { ... return; }  ← Yeh poora block hata do

      // Parallax aur scale effect ab bhi scroll se depend karega
      const parallaxProg = Math.max(prog - 0.3, 0); // Thoda jaldi shuru ho parallax (optional)
      const offsetX = parallaxProg * 420;
      const offsetY = parallaxProg * -320;
      const scale = 1 + parallaxProg * 0.5;

      // Opacity ab page shuru hote hi dikhegi, aur smoothly badhegi
      const starsOpacity = Math.min(prog / 0.3 + 0.3, 1);
      // ↑ Yeh ensure karta hai ki starting mein ~30% opacity ho, aur scroll karne pe full ho jaye

      stars.forEach((star) => {
        let x = star.baseX + star.driftX * time * 20 + offsetX;
        let y = star.baseY + star.driftY * time * 20 + offsetY;

        // Infinite wrap (same as before)
        if (x < -100) x += canvas.offsetWidth + 200;
        if (x > canvas.offsetWidth + 100) x -= canvas.offsetWidth + 200;
        if (y < -100) y += canvas.offsetHeight + 200;
        if (y > canvas.offsetHeight + 100) y -= canvas.offsetHeight + 200;

        const twinkle =
          Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.4 + 0.7;
        const finalOpacity = star.opacity * twinkle * starsOpacity;

        ctx.save();
        ctx.translate(x, y);
        ctx.scale(scale, scale);
        ctx.translate(-x, -y);

        ctx.beginPath();
        ctx.arc(x, y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = "#fff";
        ctx.fill();
        ctx.restore();
      });

      ctx.shadowBlur = 0;
      time += 1;
      animationFrame = requestAnimationFrame(animateStars);
    };

    animateStars();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  // ============ TEXT ANIMATION + SCROLL PROGRESS ============
  useEffect(() => {
    const container = containerRef.current;
    const title1 = title1Ref.current;
    const title2 = title2Ref.current;

    if (!container || !title1 || !title2) return;

    const splitText = (element) => {
      const text = element.textContent.trim();
      element.innerHTML = text
        .split("")
        .map((char) =>
          char === " " ? "&nbsp;" : `<span class="letter">${char}</span>`
        )
        .join("");
    };

    splitText(title1);
    splitText(title2);

    const letters1 = title1.querySelectorAll(".letter");
    const letters2 = title2.querySelectorAll(".letter");

    gsap.set([letters1, letters2], { opacity: 0, y: 100 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        onUpdate: (self) => {
          scrollProgressRef.current = self.progress; // Stars ke liye progress update
        },
      },
    });

    tl.to(letters1, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.05,
      ease: "power2.out",
    });

    tl.to(
      letters2,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.04,
        ease: "power2.out",
      },
      "-=0.6"
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section ref={containerRef} id="section-2" className="creative-page">
      {/* Stars Canvas Background */}
      <canvas ref={canvasRef} className="stars-canvas" />

      <div className="creative-content">
        <h1 ref={title1Ref} className="creative-title line-1">
          A Creative Space
        </h1>
        <h1 ref={title2Ref} className="creative-title line-2">
          Designed by Designers for Designers
        </h1>
      </div>
    </section>
  );
}
