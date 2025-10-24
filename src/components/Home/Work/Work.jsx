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
    <div className="overflow-x-hidden bg-black m-0">
      <div className="image-container flex justify-center items-center gap-5 h-screen overflow-hidden">
        <img
          className="left flex-shrink-0 w-[30vw] h-[40vh] -translate-x-[100vw] opacity-0 rounded-lg object-cover"
          src="https://images.pexels.com/photos/34154499/pexels-photo-34154499.jpeg"
          alt="Image 1"
        />
        <img
          className="center flex-shrink-0 w-[90vw] h-[90vh] opacity-100 rounded-lg object-cover"
          src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg"
          alt="Image 2"
        />
        <img
          className="right flex-shrink-0 w-[30vw] h-[40vh] translate-x-[100vw] opacity-0 rounded-lg object-cover"
          src="https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg"
          alt="Image 3"
        />
      </div>
    </div>
  );
};

export default Work;
