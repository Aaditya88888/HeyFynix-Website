"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Work = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const duration = 1000; // scroll distance for animation

    // Pin the container
    ScrollTrigger.create({
      trigger: ".image-container",
      start: "top top",
      end: `+=${duration}`,
      pin: true,
      scrub: true,
    });

    // Animate center image
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

    // Animate left image
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

    // Animate right image
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

  return (
    <div className="overflow-x-hidden bg-black m-0 text-white">
      {/* Section Heading and Content */}
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

      {/* Image Animation Section */}
      <div className="image-container flex justify-center items-center gap-5 h-screen overflow-hidden relative">
        <img
          className="left flex-shrink-0 w-[30vw] h-[40vh] -translate-x-[100vw] opacity-0 object-cover"
          src="https://images.pexels.com/photos/34154499/pexels-photo-34154499.jpeg"
          alt="Image 1"
        />
        <div className="center flex-shrink-0 w-[90vw] h-[90vh] opacity-100 relative">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg"
            alt="Image 2"
          />
        </div>
        <img
          className="right flex-shrink-0 w-[30vw] h-[40vh] translate-x-[100vw] opacity-0 object-cover"
          src="https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg"
          alt="Image 3"
        />
      </div>
    </div>
  );
};

export default Work;
