"use client";
import { useEffect, useRef } from "react";
import "../Solar/HomeLanding.css";

export default function CreativeText({
  startOffset = 0.9,
  revealRange = 0.12,
}) {
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const stateRef = useRef({
    initialized: false,
    allSpans: null,
    totalLetters: 0,
    isPinned: true,
    wasFullyRevealed: false,
    centerTolerance: 30,
  });

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
      container.innerHTML = "";

      const lines = ["A Creative Space", "Designed by Designers for Designers"];
      const allSpans = [];

      lines.forEach((line, i) => {
        const lineDiv = document.createElement("div");
        lineDiv.style.cssText = `
          text-align:center;
          margin-bottom:${i === 0 ? "0.1em" : "0"};
          font-size:${
            i === 0 ? "clamp(2rem,6vw,6rem)" : "clamp(1.2rem,3.5vw,3rem)"
          };
          font-weight:${i === 0 ? "900" : "400"};
          font-style:italic;
          letter-spacing:1px;
          line-height:1.1;
          white-space: nowrap;
        `;

        line.split("").forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char;
          span.style.opacity = "0";
          span.style.transform = "translateX(-30px)";
          span.style.display = "inline-block";
          span.style.transition = "opacity 0.4s ease, transform 0.4s ease";
          lineDiv.appendChild(span);
          allSpans.push(span);
        });
        container.appendChild(lineDiv);
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
      el.style.width = "100%";
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
      el.style.width = "100%";
      stateRef.current.isPinned = false;
    }

    function checkPinStatus() {
      const scrollContainer = findScrollContainer();
      if (!scrollContainer) return;

      const currentScrollY = window.pageYOffset;
      const direction = currentScrollY > lastScrollY ? "down" : "up";
      lastScrollY = currentScrollY;

      const prog = computeContainerProgress(scrollContainer);

      // === INITIALIZE DOM + SHOW TEXT ===
      if (!stateRef.current.initialized && prog >= startOffset) {
        stateRef.current.allSpans = buildDOM();
        stateRef.current.totalLetters = stateRef.current.allSpans.length;
        stateRef.current.initialized = true;

        const el = containerRef.current;
        if (el) {
          el.style.opacity = "1"; // ← YEH MISSING THA!
          el.style.visibility = "visible"; // ← YEH BHI!
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

      // === UNPIN ===
      if (
        isFullyRevealed &&
        direction === "down" &&
        stateRef.current.isPinned
      ) {
        stateRef.current.wasFullyRevealed = true;
        unpinElement();
      }

      // === REPIN ===
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

      // === REVEAL ANIMATION ===
      const spans = stateRef.current.allSpans || [];
      const total = stateRef.current.totalLetters;
      const showCount = Math.floor(localProgress * total);

      spans.forEach((s, i) => {
        if (i < showCount) {
          s.style.opacity = "1";
          s.style.transform = "translateX(0px)";
        } else {
          s.style.opacity = "0";
          s.style.transform = "translateX(-30px)";
        }
      });

      // Continue loop
      if (mounted) {
        rafRef.current = requestAnimationFrame(checkPinStatus);
      }
    }

    function onScroll() {
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(checkPinStatus);
      }
    }

    function startWatching() {
      const sc = findScrollContainer();
      if (sc) {
        lastScrollY = window.pageYOffset;

        // Start RAF loop
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
          } else if (tries > 40) {
            clearInterval(retryInterval);
          }
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
        textAlign: "center",
        opacity: 0, // ← Start hidden
        visibility: "hidden", // ← Start hidden
        transition: "opacity 0.3s ease",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 900,
        pointerEvents: "none",
        fontFamily: "var(--font-inter), sans-serif",
        color: "#fff",
      }}
    />
  );
}
