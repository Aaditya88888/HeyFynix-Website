"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function LoadingOverlay() {
  let overlayEl = null;
  let spinnerEl = null;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.pointerEvents = "none";

    if (!overlayEl || !spinnerEl) return;

    const tl = gsap.timeline();

    // 🌀 Circle rotate (one time)
    tl.fromTo(
      spinnerEl,
      { rotation: 0 },
      {
        rotation: 360,
        duration: 1.4,
        ease: "power2.inOut",
      }
    );

    // ⬆️ PAGE SLIDE UP (loader goes up)
    tl.to(overlayEl, {
      yPercent: -100, // 👈 poora page upar
      duration: 1.2,
      ease: "power4.inOut",
    });

    // 🧹 Cleanup
    tl.set(overlayEl, {
      display: "none",
      onComplete: () => {
        document.body.style.overflow = "";
        document.body.style.pointerEvents = "";
      },
    });
  }, []);

  return (
    <div className="loading-overlay-gsap" ref={(el) => (overlayEl = el)}>
      <div className="gsap-spinner" ref={(el) => (spinnerEl = el)}>
        <svg width="110" height="110" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="6"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke="#ffffff"
            strokeWidth="6"
            fill="none"
            strokeDasharray="264"
            strokeDashoffset="264"
            className="loader-circle"
          />
        </svg>
      </div>

      <h2 className="loader-text">Loading Creative Space</h2>
    </div>
  );
}
