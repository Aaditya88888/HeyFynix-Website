//homelanding/solar/HomeLanding.jsx
"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Inter } from "next/font/google";
import * as THREE from "three";
import "../Solar/HomeLanding.css";

const inter = Inter({ subsets: ["latin"] });

export default function MyMainCode() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // === DOM ===
    root.innerHTML = `
      <div id="loader">
        <canvas id="loaderCanvas" width="300" height="300"></canvas>
        <div id="loading-bar-container"><div id="loading-bar"></div></div>
      </div>
      <div id="topText"></div>
      <div id="videoSection">
        <video class="bgVideo" id="astronautVideo" src="/textures/models/3.mp4" type="video/mp4"
          muted playsinline webkit-playsinline preload="auto" crossorigin="anonymous" loop></video>
      </div>
      <div id="scrollContainer"></div>
    `;

    const loaderDiv = root.querySelector("#loader");
    const loadingBar = root.querySelector("#loading-bar");
    const topText = root.querySelector("#topText");
    const astronautVideo = root.querySelector("#astronautVideo");
    const videoSection = root.querySelector("#videoSection");
    const scrollContainer = root.querySelector("#scrollContainer");

    // Scroll container
    scrollContainer.style.height =
      window.innerWidth <= 768 ? "1100vh" : "800vh";
    scrollContainer.style.width = "100%";
    scrollContainer.style.position = "relative";
    scrollContainer.style.zIndex = "10";
    scrollContainer.style.background = "transparent";

    // === VIDEO LOADING ===
    let loadedAssets = 0;
    const totalAssets = 1;

    function updateProgress() {
      const progress = Math.floor((loadedAssets / totalAssets) * 100);
      loadingBar.style.width = `${progress}%`;

      if (loadedAssets === totalAssets) {
        gsap.to(loaderDiv, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            loaderDiv.style.display = "none";
            window.scrollTo(0, 0);
            astronautVideo.currentTime = 0;
            astronautVideo.style.visibility = "visible";
            astronautVideo.style.opacity = 1;
            videoSection.style.visibility = "visible";
            videoSection.style.display = "flex";
            document.body.style.overflowY = "auto";

            showTextAnimation();
            initScrollControl();
            requestAnimationFrame(mainLoop);
          },
        });
      }
    }

    astronautVideo.addEventListener("canplaythrough", () => {
      loadedAssets++;
      updateProgress();
    });

    // Video ko turant play kar do jab load ho jaye
    astronautVideo.play().catch((err) => {
      console.log("Autoplay blocked, waiting for user interaction");
      const playOnInteract = () => {
        astronautVideo.play();
        document.removeEventListener("click", playOnInteract);
        document.removeEventListener("touchstart", playOnInteract);
      };
      document.addEventListener("click", playOnInteract, { once: true });
      document.addEventListener("touchstart", playOnInteract, { once: true });
    });

    // === TEXT ANIMATION ===
    function showTextAnimation() {
      const text = "Hey,we are Fynix";
      topText.style.fontFamily = "'Inter', sans-serif";
      topText.style.letterSpacing = "-0.02em";
      topText.innerHTML = "";

      const parts = text.split(",we are");
      const before = parts[0];
      const after = ",we are ";
      const last = parts[1];

      const textContainer = document.createElement("div");
      textContainer.style.display = "flex";
      textContainer.style.justifyContent = "center";
      textContainer.style.alignItems = "center";
      textContainer.style.width = "100%";
      textContainer.style.position = "relative";
      textContainer.style.fontSize = "clamp(2.5rem, 10vw, 8rem)";
      textContainer.style.fontWeight = "700";
      textContainer.style.letterSpacing = "-0.02em"; // FIXED

      const heySpan = document.createElement("span");
      heySpan.id = "heySpan";
      heySpan.style.display = "inline-block";
      heySpan.style.transition = "transform 0.5s ease-out";
      heySpan.style.pointerEvents = "auto"; // <-- allow hover on span
      heySpan.style.marginRight = "-0.1em";
      heySpan.textContent = before;

      const weAreSpan = document.createElement("span");
      weAreSpan.id = "weAreSpan";
      weAreSpan.style.display = "inline-block";
      weAreSpan.style.transition = "opacity 0.3s ease-out";
      weAreSpan.style.opacity = "0.9";
      weAreSpan.style.fontWeight = "700";
      weAreSpan.style.marginRight = "0.3em";
      weAreSpan.textContent = after;

      const fynixSpan = document.createElement("span");
      fynixSpan.id = "fynixSpan";
      fynixSpan.style.display = "inline-block";
      fynixSpan.style.transition = "transform 0.5s ease-out";
      fynixSpan.textContent = last;
      fynixSpan.style.marginLeft = "-0.2em";

      textContainer.append(heySpan, weAreSpan, fynixSpan);
      topText.appendChild(textContainer);
      let frozenWeAreWidth = 0;

      requestAnimationFrame(() => {
        frozenWeAreWidth = weAreSpan.offsetWidth;
        weAreSpan.style.width = frozenWeAreWidth + "px";
        weAreSpan.style.display = "inline-block";
      });

      gsap.fromTo(
        [heySpan, fynixSpan],
        { x: 0, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );

      const handleScroll = () => {
        if (!frozenWeAreWidth) return; // wait until width freeze happens

        const scrollY = window.scrollY;
        const scrollMax =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.min(scrollY / scrollMax, 1);

        const movePhaseEnd = 0.09;
        const fadeEnd = 0.27;
        const moveProgress = Math.min(scrollPercent / movePhaseEnd, 1);
        const eased = Math.pow(moveProgress, 0.7);

        const moveAmount = (frozenWeAreWidth / 2) * eased;

        if (scrollPercent <= movePhaseEnd) {
          heySpan._finalMove = moveAmount;
          fynixSpan._finalMove = moveAmount;

          heySpan.style.transform = `translateX(${moveAmount}px)`;
          fynixSpan.style.transform = `translateX(-${moveAmount}px)`;
          weAreSpan.style.opacity = `${1 - moveProgress}`;
        } else {
          heySpan.style.transform = `translateX(${heySpan._finalMove}px)`;
          fynixSpan.style.transform = `translateX(-${fynixSpan._finalMove}px)`;

          let fadeProgress =
            (scrollPercent - movePhaseEnd) / (fadeEnd - movePhaseEnd);
          fadeProgress = Math.min(Math.max(fadeProgress, 0), 1); // clamp

          // Smooth easing
          const easedFade = fadeProgress ** 1.4;

          // SMOOTH ZOOM-OUT
          const scale = 1 - easedFade * 0.6; // 1 → 0.4
          const opacity = 1 - easedFade * 1.3; // 1 → 0

          textContainer.style.transform = `scale(${scale}) translateY(-${
            easedFade * 40
          }px)`; // small upward move = professional effect
          textContainer.style.opacity = opacity;
          textContainer.style.visibility = opacity <= 0 ? "hidden" : "visible";

          // Video fade sync
          const videoOpacity = 1 - easedFade * 1.1;
          astronautVideo.style.opacity = videoOpacity;
          videoSection.style.display = videoOpacity <= 0 ? "none" : "flex";
        }
      };
      window.addEventListener("scroll", handleScroll);

      // Hover shadow
      topText.style.filter = "drop-shadow(0 0 0 #bfbfbf)";
      topText.style.transition = "filter 0.4s cubic-bezier(0.22, 1, 0.36, 1)";

      heySpan.addEventListener("mouseenter", () => {
        topText.style.filter =
          "drop-shadow(1px 0 0 #bfbfbf) drop-shadow(3px 0 0 #bfbfbf) drop-shadow(5px 0 0 #bfbfbf)";
      });
      heySpan.addEventListener("mouseleave", () => {
        topText.style.filter = "drop-shadow(0 0 0 #bfbfbf)";
      });

      fynixSpan.addEventListener("mouseenter", () => {
        topText.style.filter =
          "drop-shadow(-1px 0 0 #bfbfbf) drop-shadow(-3px 0 0 #bfbfbf) drop-shadow(-5px 0 0 #bfbfbf)";
      });
      fynixSpan.addEventListener("mouseleave", () => {
        topText.style.filter = "drop-shadow(0 0 0 #bfbfbf)";
      });

      // Parallax on "we are"
      let isHovering = false;
      let videoX = 0,
        videoY = 0,
        targetX = 0,
        targetY = 0;
      let parallaxFrame = null;

      function startParallax() {
        if (parallaxFrame) return;
        function animate() {
          videoX += (targetX - videoX) * 0.08;
          videoY += (targetY - videoY) * 0.08;
          gsap.set(astronautVideo, { x: videoX, y: videoY });
          parallaxFrame = requestAnimationFrame(animate);
        }
        parallaxFrame = requestAnimationFrame(animate);
      }

      function stopParallax() {
        if (parallaxFrame) cancelAnimationFrame(parallaxFrame);
        parallaxFrame = null;
        gsap.to(astronautVideo, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      weAreSpan.addEventListener("mouseenter", () => {
        isHovering = true;
        startParallax();
      });
      weAreSpan.addEventListener("mouseleave", () => {
        isHovering = false;
        stopParallax();
      });

      document.addEventListener("mousemove", (e) => {
        if (!isHovering) return;
        const rect = weAreSpan.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;

        const moveX = deltaX * 0.008;
        const moveY = deltaY * 0.008;
        const rotateY = deltaX * 0.0015;
        const rotateX = -deltaY * 0.0015;

        topText.style.transform = `translateX(-50%) translate(${moveX}px, ${moveY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        targetX = moveX * 3;
        targetY = moveY * 3;
      });
    }

    // === SCROLL + VIDEO + STARS CONTROL ===
    let targetProgress = 0;
    let currentProgress = 0;
    const smoothTime = 0.08;

    function initScrollControl() {
      let ticking = false;

      const scrollHandler = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const scrollY =
              window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight =
              Math.round(scrollContainer.offsetHeight) - window.innerHeight;

            if (scrollHeight > 0) {
              let progress = scrollY / scrollHeight;
              progress = Math.max(0, Math.min(progress, 1));

              // DEADZONE: अगर scrollY < 1px → force 0
              if (scrollY < 1) {
                targetProgress = 0;
              } else {
                targetProgress = progress;
              }
            }
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener("scroll", scrollHandler, { passive: true });
    }

    function mainLoop() {
      const maxScroll = 0.7;
      const clampedTarget = Math.min(targetProgress, maxScroll);

      currentProgress += (clampedTarget - currentProgress) * smoothTime;

      if (Math.abs(clampedTarget - currentProgress) < 0.001) {
        currentProgress = clampedTarget;
      }

      if (clampedTarget === 0) currentProgress = 0;
      if (clampedTarget === maxScroll) currentProgress = maxScroll;

      // === STARS PARALLAX — AB BILKUL PERFECT (NO REVERSE JERK EVER) ===

      requestAnimationFrame(mainLoop);
    }

    // === CLEANUP ===
    return () => {
      window.removeEventListener("scroll", () => {});
      root.innerHTML = "";
    };
  }, []);

  return (
    <>
      <div
        ref={rootRef}
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          overflow: "visible",
        }}
      />
    </>
  );
}
