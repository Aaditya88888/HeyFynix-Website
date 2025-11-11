"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../Button/Button";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const [imgs, setImgs] = useState([
    "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg",
    "https://images.pexels.com/photos/34950/pexels-photo.jpg",
    "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    "https://images.pexels.com/photos/2386149/pexels-photo-2386149.jpeg",
    "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg",
    "https://images.pexels.com/photos/33430991/pexels-photo-33430991.jpeg",
    "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg",
    "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg",
    "https://images.pexels.com/photos/34154499/pexels-photo-34154499.jpeg",
    "https://images.pexels.com/photos/34410855/pexels-photo-34410855.jpeg",
    "https://images.pexels.com/photos/6195951/pexels-photo-6195951.jpeg",
    "https://images.pexels.com/photos/4000376/pexels-photo-4000376.jpeg",
    "https://images.pexels.com/photos/2739141/pexels-photo-2739141.jpeg",
    "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
    "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg",
  ]);

  const containerRef = useRef(null);
  const slidesRef = useRef([]);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);
  const isAnimating = useRef(false);
  const dragStartX = useRef(0);
  const dragOffset = useRef(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const duration = 2500;

      // Prevent jhatka on pin
      gsap.set(containerRef.current, { y: 0 });

      // Kill any existing triggers
      ScrollTrigger.getAll().forEach((t) => t.kill());

      // 🟢 Smooth Pin Setup
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${duration}`,
        pin: true,
        scrub: 1.5,
        pinSpacing: true,
        anticipatePin: 1, // 👈 prevents jump!
      });

      // 🟢 Image shrink on scroll
      gsap.fromTo(
        slidesRef.current,
        { width: "95vw", height: "95vh" },
        {
          width: "33.33vw",
          height: "35vh",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${duration}`,
            scrub: 1.5,
          },
        }
      );

      // 🟢 Buttons move closer + scale down
      gsap.fromTo(
        [leftBtnRef.current, rightBtnRef.current],
        {
          x: (i) => (i === 0 ? "-40vw" : "40vw"),
          scale: 1,
        },
        {
          x: (i) => (i === 0 ? "-10vw" : "10vw"),
          scale: 0.7,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${duration}`,
            scrub: 1.5,
          },
        }
      );

      // 🟢 Slight delay for layout stabilization
      requestAnimationFrame(() => ScrollTrigger.refresh());
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [imgs]);

  // 🔹 Drag to Slide
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let isDragging = false;

    const handleStart = (e) => {
      if (isAnimating.current) return;
      isDragging = true;
      dragStartX.current = e.clientX;
      dragOffset.current = 0;
      gsap.killTweensOf(slidesRef.current);
      container.style.cursor = "grabbing";
    };

    const handleMove = (e) => {
      if (!isDragging) return;
      const diff = e.clientX - dragStartX.current;
      dragOffset.current = diff;
      gsap.set(slidesRef.current, { x: diff });
    };

    const handleEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      container.style.cursor = "grab";
      const threshold = window.innerWidth * 0.2;
      const slideWidth = slidesRef.current[0]?.offsetWidth || 0;
      const gap = 34;

      if (Math.abs(dragOffset.current) > threshold) {
        const direction = dragOffset.current > 0 ? "left" : "right";
        const moveX =
          direction === "right" ? -(slideWidth + gap) : slideWidth + gap;

        isAnimating.current = true;
        gsap.to(slidesRef.current, {
          x: moveX,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            setImgs((prev) => {
              const updated = [...prev];
              if (direction === "right") updated.push(updated.shift());
              else updated.unshift(updated.pop());
              return updated;
            });
            requestAnimationFrame(() => {
              gsap.set(slidesRef.current, { x: 0 });
              isAnimating.current = false;
              dragOffset.current = 0;
            });
          },
        });
      } else {
        gsap.to(slidesRef.current, {
          x: 0,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => (dragOffset.current = 0),
        });
      }
    };

    container.addEventListener("mousedown", handleStart);
    container.addEventListener("mousemove", handleMove);
    container.addEventListener("mouseup", handleEnd);
    container.addEventListener("mouseleave", handleEnd);

    return () => {
      container.removeEventListener("mousedown", handleStart);
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("mouseup", handleEnd);
      container.removeEventListener("mouseleave", handleEnd);
    };
  }, []);

  // 🔹 Manual Button Slide
  const slide = (direction) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    const slideWidth = slidesRef.current[0]?.offsetWidth || 0;
    const gap = 34;
    const moveX =
      direction === "right" ? -(slideWidth + gap) : slideWidth + gap;

    gsap.to(slidesRef.current, {
      x: moveX,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        setImgs((prev) => {
          const updated = [...prev];
          if (direction === "right") updated.push(updated.shift());
          else updated.unshift(updated.pop());
          return updated;
        });
        requestAnimationFrame(() => {
          gsap.set(slidesRef.current, { x: 0 });
          isAnimating.current = false;
        });
      },
    });
  };

  return (
    <div className="overflow-x-hidden bg-black text-white">
      {/* Header */}
      <div className="text-center py-16 px-6 md:px-12">
        <h1 className="text-[4vw] font-bold mb-4">Work</h1>
        <h2 className="text-[2.5vw] font-semibold mb-4">
          Stuff We’re Super Proud Of
        </h2>
        <p className="text-[1vw] text-gray-300 max-w-4xl mx-auto leading-relaxed">
          We’re proud of the problems we’ve solved and the stories we’ve told.
          From bold branding to immersive films, our portfolio reflects our
          commitment to excellence.
        </p>
      </div>

      {/* Images */}
      <div
        ref={containerRef}
        className="relative flex justify-center items-center gap-8 h-screen overflow-hidden"
        style={{
          contain: "layout",
          backfaceVisibility: "hidden",
          perspective: "1000px",
          cursor: "grab",
        }}
      >
        {imgs.map((src, i) => {
          const centerIndex = Math.floor(imgs.length / 2);

          const handleEnter = () => {
            if (i === centerIndex) {
              gsap.to([leftBtnRef.current, rightBtnRef.current], {
                opacity: 1,
                duration: 0.3,
                ease: "power2.out",
                pointerEvents: "auto",
              });
            }
          };

          const handleLeave = (e) => {
            const related = e.relatedTarget;
            if (
              related === leftBtnRef.current ||
              related === rightBtnRef.current ||
              leftBtnRef.current.contains(related) ||
              rightBtnRef.current.contains(related)
            )
              return;
            gsap.to([leftBtnRef.current, rightBtnRef.current], {
              opacity: 0,
              duration: 0.3,
              ease: "power2.out",
              pointerEvents: "none",
            });
          };

          return (
            <div
              key={src}
              ref={(el) => (slidesRef.current[i] = el)}
              className="slide flex-shrink-0 w-[95vw] h-[95vh] relative overflow-hidden"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <img
                src={src}
                alt={`Slide ${i}`}
                className="w-full h-full object-cover select-none pointer-events-none"
                loading="lazy"
              />
            </div>
          );
        })}

        {/* Buttons */}
        <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
          <button
            ref={leftBtnRef}
            onClick={() => slide("left")}
            className="pointer-events-auto p-0 m-0 bg-transparent border-none outline-none opacity-0 transition-opacity duration-300"
          >
            <ChevronLeft size={48} className="text-white" />
          </button>

          <button
            ref={rightBtnRef}
            onClick={() => slide("right")}
            className="pointer-events-auto p-0 m-0 bg-transparent border-none outline-none opacity-0 transition-opacity duration-300"
          >
            <ChevronRight size={48} className="text-white" />
          </button>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="flex justify-center py-16">
        <Button />
      </div>
    </div>
  );
};

export default Work;
