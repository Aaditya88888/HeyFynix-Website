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

  const [showButtons, setShowButtons] = useState(true);
  const containerRef = useRef(null);
  const slidesRef = useRef([]);
  const isAnimating = useRef(false);
  const dragStartX = useRef(0);
  const dragOffset = useRef(0);

  // 🔹 GSAP Scroll + Shrink Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const duration = 2500;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${duration}`,
        pin: true,
        scrub: 1.5,
        pinSpacing: true,
        anticipatePin: 1,
      });

      gsap.fromTo(
        slidesRef.current,
        { width: "95vw", height: "95vh" },
        {
          width: "30vw",
          height: "40vh",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${duration}`,
            scrub: 1.5,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [imgs]);

  // 🔹 Drag + Slide Logic
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

  // 🔹 Slide via Buttons
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

  // 🔹 Buttons Centered on Center Image
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateButtonVisibility = () => {
      const centerSlide = container.querySelector(".slide.center");
      if (!centerSlide) return;
      const rect = centerSlide.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      setShowButtons(true); // Always show buttons on center slide
    };

    updateButtonVisibility();
    window.addEventListener("resize", updateButtonVisibility);
    return () => window.removeEventListener("resize", updateButtonVisibility);
  }, [imgs]);

  return (
    <div className="overflow-x-hidden bg-black text-white">
      {/* Header */}
      <div className="text-center py-16 px-6 md:px-12">
        <h1 className="text-[4vw] sm:text-[3vw] md:text-[2.5vw] font-bold mb-4">
          Work
        </h1>
        <h2 className="text-[2.5vw] sm:text-[2vw] md:text-[1.8vw] font-semibold mb-4">
          Stuff We’re Super Proud Of
        </h2>
        <p className="text-[1.3vw] sm:text-[1.1vw] md:text-[1vw] text-gray-300 max-w-4xl mx-auto leading-relaxed">
          We’re proud of the problems we’ve solved and the stories we’ve told.
          From bold branding to immersive films for established brands, our
          portfolio reflects our commitment to excellence.
        </p>
      </div>

      {/* Image Container */}
      <div
        ref={containerRef}
        className="image-container flex justify-center items-center gap-8.5 h-screen overflow-hidden relative"
        style={{
          contain: "layout",
          backfaceVisibility: "hidden",
          perspective: "1000px",
          willChange: "transform",
          cursor: "grab",
          touchAction: "none",
        }}
      >
        {imgs.map((src, i) => (
          <div
            key={src}
            ref={(el) => (slidesRef.current[i] = el)}
            className={`slide ${
              i === 2 ? "center" : ""
            } flex-shrink-0 w-[95vw] h-[95vh] relative overflow-hidden`}
            style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" }}
          >
            <img
              src={src}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover select-none pointer-events-none"
              style={{
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
              }}
              loading="lazy"
            />
          </div>
        ))}

        {/* Navigation Buttons */}
        {showButtons && (
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-20">
            <div className="relative w-[30vw] h-[40vh] flex justify-between items-center px-8 pointer-events-auto">
              <button
                onClick={() => slide("left")}
                className="bg-black/20 p-3 rounded-full shadow-2xl border border-white/10"
              >
                <ChevronLeft size={28} className="text-white" />
              </button>
              <button
                onClick={() => slide("right")}
                className="bg-black/20 p-3 rounded-full shadow-2xl border border-white/10"
              >
                <ChevronRight size={28} className="text-white" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Button */}
      <div className="flex justify-center py-16">
        <Button />
      </div>
    </div>
  );
};

export default Work;
