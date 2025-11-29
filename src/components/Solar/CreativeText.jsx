"use client";
import { useEffect, useRef } from "react";
import "../Solar/HomeLanding.css";

export default function CreativeText({
  startOffset = 0.99,
  revealRange = 0.12,
  holdDuration = 0.5,
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

  // ============ STARS BACKGROUND EFFECT (Floating + Twinkling) ============
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrame;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const stars = [];
    const starCount = window.innerWidth < 768 ? 80 : 1000;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        radius: Math.random() * 1.4 + 0.4,
        opacity: Math.random() * 0.5 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
        // Floating speed — yeh naye hain
        vx: (Math.random() - 0.5) * 0.15, // left-right drift
        vy: Math.random() * 0.3 + 0.1, // slow downward (ya upward bhi chalega)
        driftRadius: Math.random() * 100 + 50, // circular/parallax feel ke liye
        driftSpeed: Math.random() * 0.005 + 0.002,
        driftAngle: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      stars.forEach((star) => {
        // Floating movement (slow drift + slight circular motion)
        star.driftAngle += star.driftSpeed;
        star.x += Math.cos(star.driftAngle) * 0.3 + star.vx;
        star.y += Math.sin(star.driftAngle) * 0.2 + star.vy;

        // Wrap around screen (infinite space feel)
        if (star.x < 0) star.x = canvas.offsetWidth;
        if (star.x > canvas.offsetWidth) star.x = 0;
        if (star.y < 0) star.y = canvas.offsetHeight;
        if (star.y > canvas.offsetHeight) star.y = 0;

        // Twinkle effect
        const twinkle =
          Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.3 + 0.7;
        const opacity = star.opacity * twinkle;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#ffffff";
        ctx.fill();
      });

      ctx.shadowBlur = 0;
      time += 1;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  // ============ MAIN LOGIC ============
  useEffect(() => {
    let mounted = true;
    let retryInterval = null;
    let lastScrollY = 0;

    const findScrollContainer = () =>
      document.querySelector("#scrollContainer");

    const buildDOM = () => {
      const container = containerRef.current;
      if (!container) return null;

      // Safe: only manipulate text-wrapper
      let textWrapper = container.querySelector(".text-wrapper");
      if (!textWrapper) {
        textWrapper = document.createElement("div");
        textWrapper.className = "text-wrapper";
        textWrapper.style.position = "relative";
        textWrapper.style.zIndex = "2";
        textWrapper.style.width = "100%";
        textWrapper.style.height = "100%";
        textWrapper.style.display = "flex";
        textWrapper.style.flexDirection = "column";
        textWrapper.style.justifyContent = "center";
        textWrapper.style.alignItems = "center";
        textWrapper.style.padding = "0 2rem";
        container.appendChild(textWrapper);
      } else {
        textWrapper.innerHTML = "";
      }

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
    };

    const computeContainerProgress = (scrollContainer) => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const containerHeight = scrollContainer.offsetHeight || 0;
      const windowHeight = window.innerHeight;

      // Ye line badal di → ab 1 se aage bhi ja sakta hai!
      const maxScroll = containerHeight - windowHeight;
      if (maxScroll <= 0) return 0;

      const progress = scrollY / maxScroll;
      return Math.max(0, progress); // ← Yaha Math.min(1, ...) hata diya!
    };

    const pinElement = () => {
      const el = containerRef.current;
      if (!el || stateRef.current.isPinned) return;
      el.style.position = "fixed";
      el.style.top = "50%";
      el.style.left = "50%";
      el.style.transform = "translate(-50%, -50%)";
      stateRef.current.isPinned = true;
    };

    const unpinElement = () => {
      const el = containerRef.current;
      if (!el || !stateRef.current.isPinned) return;
      const rect = el.getBoundingClientRect();
      const currentTop = window.scrollY + rect.top;
      el.style.position = "absolute";
      el.style.top = `${currentTop}px`;
      el.style.left = "50%";
      el.style.transform = "translateX(-50%)";
      stateRef.current.isPinned = false;
    };

    const checkPinStatus = () => {
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

      // Ye part replace kar de (checkPinStatus ke andar)
      const revealStart = startOffset; // 1.2 bhi allowed
      const revealEnd = revealStart + revealRange; // 1.2 + 0.18 = 1.38
      const holdEnd = revealEnd + holdDuration; // 1.38 + 0.1 = 1.48

      let localProgress = 0;

      if (prog >= revealStart) {
        if (prog < revealEnd) {
          localProgress = (prog - revealStart) / revealRange;
        } else if (prog < holdEnd) {
          localProgress = 1; // hold phase
        } else {
          localProgress = 1; // ready to unpin
        }
      }

      localProgress = Math.max(0, Math.min(1, localProgress));
      const isFullyRevealed = localProgress >= 1;

      // Unpin only after hold
      const shouldUnpin =
        prog >= holdEnd && direction === "down" && stateRef.current.isPinned;

      if (shouldUnpin && !stateRef.current.wasFullyRevealed) {
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
    };

    const onScroll = () => {
      if (!rafRef.current)
        rafRef.current = requestAnimationFrame(checkPinStatus);
    };

    const startWatching = () => {
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
    };

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
        textAlign: "center",
        opacity: 0,
        visibility: "hidden",
        transition: "opacity 0.3s ease",
        height: "360vh",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        fontFamily: "var(--font-inter), sans-serif",
        color: "#fff",
        zIndex: 9,
        overflow: "hidden",
      }}
    >
      {/* Stars */}
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

      {/* Text */}
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
        }}
      ></div>
    </div>
  );
}
