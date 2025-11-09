"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../Button/Button";

const Work = () => {
  const [imgs, setImgs] = useState([
    "https://images.pexels.com/photos/33430991/pexels-photo-33430991.jpeg",
    "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg",
    "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg",
    "https://images.pexels.com/photos/34154499/pexels-photo-34154499.jpeg",
    "https://images.pexels.com/photos/34410855/pexels-photo-34410855.jpeg",
  ]);

  const containerRef = useRef(null);
  const isAnimating = useRef(false);
  const lastX = useRef(0);
  const mouseOverCenter = useRef(false);

  // GSAP Context for safe cleanup
  useEffect(() => {
    const ctx = gsap.context(() => {}, containerRef);
    return () => ctx.revert();
  }, []);

  // ScrollTrigger + Shrink Animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const duration = 2500;

    ScrollTrigger.create({
      trigger: ".image-container",
      start: "top top",
      end: `+=${duration}`,
      pin: true,
      scrub: 1.5,
      pinSpacing: true,
      anticipatePin: 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".image-container",
        start: "top top",
        end: `+=${duration}`,
        scrub: 1.5,
      },
    });

    tl.fromTo(
      ".slide",
      { width: "95vw", height: "95vh" },
      {
        width: "30vw",
        height: "40vh",
        ease: "power2.inOut",
        stagger: 0,
      }
    );
  }, []);

  // Slide Function (GSAP + React Sync)
  const slide = (direction) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const slides = containerRef.current.querySelectorAll(".slide");

    // get current slide width (in px)
    const slideWidth = slides[0].offsetWidth;
    const moveX = direction === "right" ? -slideWidth - 20 : slideWidth + 20;
    // 20px -> small gap adjustment

    gsap.to(slides, {
      x: moveX,
      duration: 1.2,
      ease: "power2.inOut",
      onComplete: () => {
        // Update images
        setImgs((prev) => {
          const updated = [...prev];
          if (direction === "right") {
            const first = updated.shift();
            updated.push(first);
          } else {
            const last = updated.pop();
            updated.unshift(last);
          }
          return updated;
        });

        // Reset to new slight offset after re-render
        requestAnimationFrame(() => {
          const newSlides = containerRef.current.querySelectorAll(".slide");

          gsap.set(newSlides, {
            x: direction === "right" ? 14 : -14,
          });

          isAnimating.current = false;
        });
      },
    });
  };

  // Mouse Drag on Center Slide
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const centerSlide = container.querySelector(".center");

    const handleMouseEnter = (e) => {
      mouseOverCenter.current = true;
      lastX.current = e.clientX;
    };

    const handleMouseLeave = () => {
      mouseOverCenter.current = false;
    };

    const handleMouseMove = (e) => {
      if (!mouseOverCenter.current || isAnimating.current) return;
      const deltaX = e.clientX - lastX.current;
      if (Math.abs(deltaX) > 100) {
        slide(deltaX > 0 ? "left" : "right");
        lastX.current = e.clientX;
      }
    };

    centerSlide?.addEventListener("mouseenter", handleMouseEnter);
    centerSlide?.addEventListener("mouseleave", handleMouseLeave);
    centerSlide?.addEventListener("mousemove", handleMouseMove);

    return () => {
      centerSlide?.removeEventListener("mouseenter", handleMouseEnter);
      centerSlide?.removeEventListener("mouseleave", handleMouseLeave);
      centerSlide?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [imgs]); // Re-attach on imgs change

  return (
    <div className="overflow-x-hidden bg-black m-0 text-white">
      {/* Header Section */}
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
          portfolio reflects our commitment to excellence. Here's a peek at what
          we’ve been up to:
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
        }}
      >
        {imgs.map((src, i) => (
          <div
            key={src} // Stable key → no DOM destroy
            className={`slide ${
              i === 2 ? "center cursor-pointer" : ""
            } flex-shrink-0 w-[95vw] h-[95vh] relative overflow-hidden`}
            style={{
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
            }}
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

            {i === 2 && (
              <>
                <button
                  onClick={() => slide("left")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/70 transition z-10"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={() => slide("right")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/70 transition z-10"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Button Section */}
      <div className="button-container flex justify-center items-center py-16">
        <Button />
      </div>
    </div>
  );
};

export default Work;
