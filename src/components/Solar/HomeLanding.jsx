"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Inter } from "next/font/google";
import "./HomeLanding.css";

const inter = Inter({ subsets: ["latin"] });

gsap.registerPlugin(ScrollTrigger);

export default function HomeLanding() {
  const wrapperRef = useRef(null);
  const videoRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const video = videoRef.current;
    const title = titleRef.current;
    const nextSection = document.getElementById("section-2");

    if (!wrapper || !video || !nextSection || !title) return;

    // Main Pinning
    ScrollTrigger.create({
      trigger: wrapper,
      start: "top top",
      endTrigger: nextSection,
      end: "top top",
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
    });

    // Video Zoom
    gsap.to(video, {
      scale: 1.4,
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    title.innerHTML = `
      <span class="part hey-part">Hey</span>
      <span class="part weare-part">,we are </span>
      <span class="part fynix-part">Fynix</span>
    `;

    const heyPart = title.querySelector(".hey-part");
    const weArePart = title.querySelector(".weare-part");
    const fynixPart = title.querySelector(".fynix-part");

    // === HOVER SHADOW ON WHOLE TEXT (exactly like old code) ===
    const defaultShadow = "drop-shadow(0 0 0 #bfbfbf)";
    const heyShadow =
      "drop-shadow(1px 0 0 #bfbfbf) drop-shadow(3px 0 0 #bfbfbf) drop-shadow(5px 0 0 #bfbfbf)";
    const fynixShadow =
      "drop-shadow(-1px 0 0 #bfbfbf) drop-shadow(-3px 0 0 #bfbfbf) drop-shadow(-5px 0 0 #bfbfbf)";

    // Sab par default shadow
    title.style.filter = defaultShadow;
    title.style.transition = "filter 0.4s cubic-bezier(0.22, 1, 0.36, 1)";

    // Hover on "Hey" → right shadow on whole text
    heyPart.addEventListener("mouseenter", () => {
      title.style.filter = heyShadow;
    });
    heyPart.addEventListener("mouseleave", () => {
      title.style.filter = defaultShadow;
    });

    // Hover on "Fynix" → left shadow on whole text
    fynixPart.addEventListener("mouseenter", () => {
      title.style.filter = fynixShadow;
    });
    fynixPart.addEventListener("mouseleave", () => {
      title.style.filter = defaultShadow;
    });

    // === SCROLL ANIMATION ===
    requestAnimationFrame(() => {
      const fullGap = weArePart.offsetWidth || 0;
      const moveAmount = fullGap / 2 + 15;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top top+=1",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      tl.to(heyPart, { x: moveAmount, ease: "none" }, 0)
        .to(fynixPart, { x: -moveAmount, ease: "none" }, 0)
        .to(weArePart, { opacity: 0, ease: "none" }, 0);
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={wrapperRef} className="parallax-wrapper">
      <video
        ref={videoRef}
        className="landing-video"
        src="/textures/models/3.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/thumbnail.jpg"
      />
      <div className="overlay-center">
        <h1
          ref={titleRef}
          className="fancy-title"
          style={{ fontFamily: inter.style.fontFamily }}
        >
          Hey,we are Fynix
        </h1>
      </div>
    </div>
  );
}
