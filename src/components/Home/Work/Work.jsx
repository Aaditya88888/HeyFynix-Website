"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../Button/Button";

const Work = () => {
  const [imgs, setImgs] = useState([
    "https://images.pexels.com/photos/34154499/pexels-photo-34154499.jpeg", // left
    "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg", // center
    "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg", // right
  ]);

  const containerRef = useRef(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const duration = 1000;

    ScrollTrigger.create({
      trigger: ".image-container",
      start: "top top",
      end: `+=${duration}`,
      pin: true,
      scrub: true,
    });

    gsap.to(".center", {
      scrollTrigger: {
        trigger: ".image-container",
        start: "top top",
        end: `+=${duration}`,
        scrub: true,
      },
      width: "30vw",
      height: "40vh",
    });

    gsap.to(".left", {
      scrollTrigger: {
        trigger: ".image-container",
        start: "top top",
        end: `+=${duration}`,
        scrub: true,
      },
      x: "0",
      opacity: 1,
    });

    gsap.to(".right", {
      scrollTrigger: {
        trigger: ".image-container",
        start: "top top",
        end: `+=${duration}`,
        scrub: true,
      },
      x: "0",
      opacity: 1,
    });
  }, []);

  // ✅ Fixed sliding logic (direction-accurate, smooth, infinite)
  const slide = (direction) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const slides = containerRef.current.querySelectorAll("img");
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power2.inOut" },
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    if (direction === "right") {
      // ✅ Right button → move images LEFT visually
      tl.to(slides, {
        xPercent: -100,
        stagger: 0,
        onComplete: () => {
          // rotate array left → right
          setImgs((prev) => {
            const updated = [...prev];
            const first = updated.shift();
            updated.push(first);
            return updated;
          });
          gsap.set(slides, { xPercent: 0 });
        },
      });
    } else {
      // ✅ Left button → move images RIGHT visually
      tl.to(slides, {
        xPercent: 100,
        stagger: 0,
        onComplete: () => {
          // rotate array right → left
          setImgs((prev) => {
            const updated = [...prev];
            const last = updated.pop();
            updated.unshift(last);
            return updated;
          });
          gsap.set(slides, { xPercent: 0 });
        },
      });
    }
  };

  const handleNext = () => slide("right"); // Right arrow click
  const handlePrev = () => slide("left"); // Left arrow click

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
        <img
          className="left flex-shrink-0 w-[30vw] h-[40vh] -translate-x-[100vw] opacity-0 object-cover"
          src={imgs[0]}
          alt="Image 1"
        />

        <div className="center flex-shrink-0 w-[90vw] h-[90vh] opacity-100 relative overflow-hidden">
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

        <img
          className="right flex-shrink-0 w-[30vw] h-[40vh] translate-x-[100vw] opacity-0 object-cover"
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
