"use client";
import { useEffect, useRef } from "react";
import "../Solar/HomeLanding.css";

export default function CreativeText({
  startOffset = 0.9,
  revealRange = 0.12,
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const stateRef = useRef({
    initialized: false,
    allSpans: null,
    totalLetters: 0,
    isPinned: true,
    wasFullyRevealed: false,
    centerTolerance: 30,
  });

  // ============ STARS BACKGROUND EFFECT ============
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrame;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create stars
    const stars = [];
    const starCount = window.innerWidth < 768 ? 80 : 150;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        radius: Math.random() * 1.3 + 0.4,
        opacity: Math.random() * 0.5 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      stars.forEach((star) => {
        const twinkle =
          Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.2 + 0.4;
        const opacity = star.opacity * twinkle;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#ffffff";
        ctx.fill();
      });

      ctx.shadowBlur = 0;
      time += 0.8;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  // ============ MAIN LOGIC (Same as before) ============
  useEffect(() => {
    let mounted = true;
    let retryInterval = null;
    let lastScrollY = 0;

    function findScrollContainer() {
      return document.querySelector("#scrollContainer");
    }

    function buildDOM() {
      const container = containerRef.current;
      if (!container) return null;
      const textWrapper = container.querySelector(".text-wrapper") || container;
      textWrapper.innerHTML = "";

      const lines = ["A Creative Space", "Designed by Designers for Designers"];
      const allSpans = [];

      lines.forEach((line, i) => {
        const lineDiv = document.createElement("div");
        lineDiv.style.cssText = `
          text-align:center;
          margin-bottom:${i === 0 ? "0.1em" : "0"};
          font-size:${
            i === 0 ? "clamp(2.5rem,7vw,7rem)" : "clamp(1.4rem,4vw,3.5rem)"
          };
          font-weight:${i === 0 ? "900" : "500"};
          font-style:italic;
          letter-spacing:1.5px;
          line-height:1.1;
          white-space: nowrap;
        `;

        line.split("").forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char;
          span.style.opacity = "0";
          span.style.transform = "translateX(-40px)";
          span.style.display = "inline-block";
          span.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          lineDiv.appendChild(span);
          allSpans.push(span);
        });
        textWrapper.appendChild(lineDiv);
      });
      return allSpans;
    }

    function computeContainerProgress(scrollContainer) {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const containerHeight = Math.max(
        0,
        (scrollContainer.offsetHeight || 0) - window.innerHeight
      );
      if (containerHeight <= 0) return 0;
      return Math.max(0, Math.min(1, scrollY / containerHeight));
    }

    function pinElement() {
      const el = containerRef.current;
      if (!el || stateRef.current.isPinned) return;
      el.style.position = "fixed";
      el.style.top = "50%";
      el.style.left = "50%";
      el.style.transform = "translate(-50%, -50%)";
      stateRef.current.isPinned = true;
    }

    function unpinElement() {
      const el = containerRef.current;
      if (!el || !stateRef.current.isPinned) return;
      const rect = el.getBoundingClientRect();
      const currentTop = window.scrollY + rect.top;
      el.style.position = "absolute";
      el.style.top = `${currentTop}px`;
      el.style.left = "50%";
      el.style.transform = "translateX(-50%)";
      stateRef.current.isPinned = false;
    }

    function checkPinStatus() {
      const scrollContainer = findScrollContainer();
      if (!scrollContainer) return;

      const currentScrollY = window.pageYOffset;
      const direction = currentScrollY > lastScrollY ? "down" : "up";
      lastScrollY = currentScrollY;
      const prog = computeContainerProgress(scrollContainer);

      if (!stateRef.current.initialized && prog >= startOffset) {
        stateRef.current.allSpans = buildDOM();
        stateRef.current.totalLetters = stateRef.current.allSpans.length;
        stateRef.current.initialized = true;

        const el = containerRef.current;
        if (el) {
          el.style.opacity = "1";
          el.style.visibility = "visible";
        }
      }

      if (!stateRef.current.initialized) {
        if (mounted) rafRef.current = requestAnimationFrame(checkPinStatus);
        return;
      }

      const el = containerRef.current;
      if (!el) return;

      const localProgress = Math.max(
        0,
        Math.min(1, (prog - startOffset) / revealRange)
      );
      const isFullyRevealed = localProgress >= 1;

      if (
        isFullyRevealed &&
        direction === "down" &&
        stateRef.current.isPinned
      ) {
        stateRef.current.wasFullyRevealed = true;
        unpinElement();
      }

      if (!stateRef.current.isPinned && direction === "up") {
        const rect = el.getBoundingClientRect();
        const centerY = window.innerHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        const diff = Math.abs(elementCenter - centerY);
        if (diff <= stateRef.current.centerTolerance) {
          pinElement();
          stateRef.current.wasFullyRevealed = false;
        }
      }

      const spans = stateRef.current.allSpans || [];
      const total = stateRef.current.totalLetters;
      const showCount = Math.floor(localProgress * total * 1.1);

      spans.forEach((s, i) => {
        if (i < showCount) {
          s.style.opacity = "1";
          s.style.transform = "translateX(0px)";
        } else {
          s.style.opacity = "0";
          s.style.transform = "translateX(-40px)";
        }
      });

      if (mounted) rafRef.current = requestAnimationFrame(checkPinStatus);
    }

    function onScroll() {
      if (!rafRef.current)
        rafRef.current = requestAnimationFrame(checkPinStatus);
    }

    function startWatching() {
      const sc = findScrollContainer();
      if (sc) {
        lastScrollY = window.pageYOffset;
        rafRef.current = requestAnimationFrame(checkPinStatus);
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
      } else {
        let tries = 0;
        retryInterval = setInterval(() => {
          tries++;
          const sc2 = findScrollContainer();
          if (sc2) {
            clearInterval(retryInterval);
            startWatching();
          } else if (tries > 40) clearInterval(retryInterval);
        }, 60);
      }
    }

    startWatching();

    return () => {
      mounted = false;
      if (retryInterval) clearInterval(retryInterval);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [startOffset, revealRange]);

  return (
    <div
      ref={containerRef}
      className="creativeText"
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: "50%", // ← center vertically
        left: "50%", // ← center horizontally
        transform: "translate(-50%, -50%)", // ← proper centering
        opacity: 0,
        visibility: "hidden",
        pointerEvents: "none",
        zIndex: 900,
        overflow: "hidden",
      }}
    >
      {/* Stars Canvas Background */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          background: "transparent",
          zIndex: 1,
        }}
      />

      {/* Text Content */}
      <div
        className="text-wrapper"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 2rem",
          fontFamily: "var(--font-inter), sans-serif",
          color: "#fff",
        }}
      />
    </div>
  );
}
