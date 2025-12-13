"use client";
import { useEffect, useRef } from "react";
import "../Solar/HomeLanding.css";

export default function CreativeText({
  startOffset = 0.72, // ← Ab yeh sahi value hai (tumhare page ke hisaab se)
  revealRange = 0.22,
  holdDuration = 0.11,
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

  // SCROLL PROGRESS FOR STARS PARALLAX
  const scrollProgressRef = useRef(0);

  // ============ STARS: SCROLL-CONTROLLED PARALLAX + TWINKLE + FADE CONTROL ============
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
    const starCount = window.innerWidth < 768 ? 500 : 200;

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

      // STARS SIRF TAB DIKHO JAB TEXT REVEAL SHURU HO RAHA HO
      const starsStart = startOffset - 0.15; // thoda baad mein start
      if (prog < starsStart) {
        time += 1;
        animationFrame = requestAnimationFrame(animateStars);
        return;
      }

      const parallaxProg = prog - starsStart;
      const offsetX = parallaxProg * 420;
      const offsetY = parallaxProg * -320;
      const scale = 1 + parallaxProg * 0.5;

      // Smooth fade-in of stars
      const starsOpacity = Math.min(parallaxProg / 0.12, 1);

      stars.forEach((star) => {
        let x = star.baseX + star.driftX * time * 20 + offsetX;
        let y = star.baseY + star.driftY * time * 20 + offsetY;

        // Infinite wrap
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
  }, [startOffset]);

  // ============ MAIN SCROLL + TEXT + PIN LOGIC ============
  useEffect(() => {
    let mounted = true;
    let retryInterval = null;
    let lastScrollY = 0;

    const findScrollContainer = () =>
      document.querySelector("#scrollContainer");

    const computeProgress = (scrollContainer) => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const containerHeight = scrollContainer?.offsetHeight || 0;
      const windowHeight = window.innerHeight;
      const maxScroll = containerHeight - windowHeight;
      if (maxScroll <= 0) return 0;

      const prog = scrollY / maxScroll;

      // Update stars progress
      scrollProgressRef.current = prog;

      // Agar bahut peeche scroll kar diya to progress 0 kar do
      if (prog < 0.65) {
        scrollProgressRef.current = 0;
      }

      return Math.max(0, prog);
    };

    const buildDOM = () => {
      const container = containerRef.current;
      if (!container) return null;

      let textWrapper = container.querySelector(".text-wrapper");
      if (!textWrapper) {
        textWrapper = document.createElement("div");
        textWrapper.className = "text-wrapper";
        Object.assign(textWrapper.style, {
          position: "relative",
          zIndex: "100",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 2rem",
        });
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
          white-space:nowrap;
        `;

        line.split("").forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char;
          span.style.cssText =
            "opacity:0; transform:translateX(-40px); display:inline-block; transition:opacity 0.6s ease, transform 0.6s ease;";
          lineDiv.appendChild(span);
          allSpans.push(span);
        });

        textWrapper.appendChild(lineDiv);
      });

      return allSpans;
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

    const check = () => {
      if (!mounted) return;

      const scrollContainer = findScrollContainer();
      if (!scrollContainer) {
        rafRef.current = requestAnimationFrame(check);
        return;
      }

      const currentScrollY = window.pageYOffset;
      const direction = currentScrollY > lastScrollY ? "down" : "up";
      lastScrollY = currentScrollY;

      const prog = computeProgress(scrollContainer);

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
        rafRef.current = requestAnimationFrame(check);
        return;
      }

      const revealStart = startOffset;
      const revealEnd = revealStart + revealRange;
      const holdEnd = revealEnd + holdDuration;

      let localProgress = 0;
      if (prog >= revealStart) {
        if (prog < revealEnd) {
          localProgress = (prog - revealStart) / revealRange;
        } else if (prog < holdEnd) {
          localProgress = 1;
        } else {
          localProgress = 1;
        }
      }
      localProgress = Math.max(0, Math.min(1, localProgress));

      const spans = stateRef.current.allSpans || [];
      const showCount = Math.floor(
        localProgress * stateRef.current.totalLetters * 1.15
      );

      spans.forEach((s, i) => {
        if (i < showCount) {
          s.style.opacity = "1";
          s.style.transform = "translateX(0)";
        } else {
          s.style.opacity = "0";
          s.style.transform = "translateX(-40px)";
        }
      });

      const shouldUnpin =
        prog >= holdEnd && direction === "down" && stateRef.current.isPinned;
      if (shouldUnpin && !stateRef.current.wasFullyRevealed) {
        stateRef.current.wasFullyRevealed = true;
        unpinElement();
      }

      if (!stateRef.current.isPinned && direction === "up") {
        const rect = containerRef.current.getBoundingClientRect();
        const diff = Math.abs(
          rect.top + rect.height / 2 - window.innerHeight / 2
        );
        if (diff <= stateRef.current.centerTolerance) {
          pinElement();
          stateRef.current.wasFullyRevealed = false;
        }
      }

      rafRef.current = requestAnimationFrame(check);
    };

    const onScroll = () => {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(check);
    };

    const start = () => {
      const sc = findScrollContainer();
      if (sc) {
        lastScrollY = window.pageYOffset;
        rafRef.current = requestAnimationFrame(check);
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
      } else {
        retryInterval = setInterval(() => {
          const sc2 = findScrollContainer();
          if (sc2) {
            clearInterval(retryInterval);
            start();
          }
        }, 80);
      }
    };

    start();

    return () => {
      mounted = false;
      if (retryInterval) clearInterval(retryInterval);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [startOffset, revealRange, holdDuration]);

  return (
    <div
      ref={containerRef}
      className="creativeText"
      style={{
        width: "100%",
        height: "200vh",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        opacity: 0,
        visibility: "hidden",
        transition: "opacity 0.4s ease",
        fontFamily: "var(--font-inter), sans-serif",
        color: "#fff",
        zIndex: 100,
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          background: "transparent",
          zIndex: 99,
        }}
      />

      <div
        className="text-wrapper"
        style={{
          position: "relative",
          zIndex: 100,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 2rem",
        }}
      />
    </div>
  );
}
