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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const duration = 2500;

    ScrollTrigger.create({
      trigger: ".image-container",
      start: "top top",
      end: `+=${duration}`,
      pin: true,
      scrub: 1.5,
      anticipatePin: 1,
    });

    // ✅ Animate all slides on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".image-container",
        start: "top top",
        end: `+=${duration}`,
        scrub: 1.5,
      },
    });

    // ✅ All slides shrink together
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

  // ✅ Slide Function
  const slide = (direction) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const slides = containerRef.current.querySelectorAll(".slide");
    const moveX = direction === "right" ? -107.1 : 107.1;

    // Animate slides movement
    gsap.to(slides, {
      xPercent: moveX,
      duration: 1.2,
      ease: "power2.inOut",
      onComplete: () => {
        // ✅ Update images only AFTER animation ends (no overlap)
        setImgs((prevImgs) => {
          const updated = [...prevImgs];
          if (direction === "right") {
            const first = updated.shift();
            updated.push(first);
          } else {
            const last = updated.pop();
            updated.unshift(last);
          }
          return updated;
        });

        // ✅ Wait for React to finish re-render, then reset instantly
        requestAnimationFrame(() => {
          gsap.set(slides, { xPercent: 0 });
          isAnimating.current = false;
        });
      },
    });
  };

  const handleNext = () => slide("right");
  const handlePrev = () => slide("left");

  // ✅ Mouse-based slide trigger (center only)
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
      if (Math.abs(deltaX) > 80) {
        if (deltaX > 0) slide("left");
        else slide("right");
        lastX.current = e.clientX;
      }
    };

    centerSlide.addEventListener("mouseenter", handleMouseEnter);
    centerSlide.addEventListener("mouseleave", handleMouseLeave);
    centerSlide.addEventListener("mousemove", handleMouseMove);

    return () => {
      centerSlide.removeEventListener("mouseenter", handleMouseEnter);
      centerSlide.removeEventListener("mouseleave", handleMouseLeave);
      centerSlide.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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

      {/* ✅ Image Container */}
      <div
        ref={containerRef}
        className="image-container flex justify-center items-center gap-8.5 h-screen overflow-hidden relative will-change-transform"
        style={{
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          perspective: "1000px",
        }}
      >
        {imgs.map((src, i) => (
          <div
            key={i}
            className={`slide ${
              i === 2 ? "center cursor-pointer" : ""
            } flex-shrink-0 w-[95vw] h-[95vh] relative overflow-hidden`}
            style={{
              opacity: i < 5 ? 1 : 0,
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
            }}
          >
            <img
              src={src}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover select-none pointer-events-none [backface-visibility:hidden] [transform:translateZ(0)]"
            />

            {i === 2 && (
              <>
                <button
                  onClick={() => slide("left")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/70 transition"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={() => slide("right")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/70 transition"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}
          </div>
        ))}
      </div>

      {/* ✅ Button Section */}
      <div className="button-container flex justify-center items-center py-16">
        <Button />
      </div>
    </div>
  );
};

export default Work;      if (direction === "right") {
        gsap.set(newSlides[2], { xPercent: 100, opacity: 0 });
        gsap.to(newSlides[2], {
          xPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => (isAnimating.current = false),
        });
      } else {
        gsap.set(newSlides[0], { xPercent: -100, opacity: 0 });
        gsap.to(newSlides[0], {
          xPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => (isAnimating.current = false),
        });
      }
    });
  };

  const handleNext = () => slide("right");
  const handlePrev = () => slide("left");

  return (
    <div className="overflow-x-hidden bg-black m-0 text-white">
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

      {/* ✅ Image Section */}
      <div
        ref={containerRef}
        className="image-container flex justify-center items-center gap-5 h-screen overflow-hidden relative"
      >
        {/* Left image */}
        <img
          className="slide left flex-shrink-0 w-[30vw] h-[40vh] -translate-x-[100vw] opacity-0 object-cover"
          src={imgs[0]}
          alt="Image 1"
        />

        {/* Center image */}
        <div className="slide center flex-shrink-0 w-[90vw] h-[90vh] opacity-100 relative overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={imgs[1]}
            alt="Image 2"
          />

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/70 transition"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/70 transition"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Right image */}
        <img
          className="slide right flex-shrink-0 w-[30vw] h-[40vh] translate-x-[100vw] opacity-0 object-cover"
          src={imgs[2]}
          alt="Image 3"
        />
      </div>

      {/* ✅ Button Section */}
      <div className="button-container flex justify-center items-center py-16">
        <Button />
      </div>
    </div>
  );
};

export default Work;
