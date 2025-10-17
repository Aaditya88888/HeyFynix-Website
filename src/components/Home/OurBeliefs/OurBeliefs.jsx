"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const OurBeliefs = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          pin: true,
          scrub: 1,
          markers: false,
        },
      })
      .fromTo(
        ".hero-bg",
        { scale: 1 },
        { scale: 1.1, duration: 1, ease: "power3.out" }
      )
      .fromTo(
        ".hero-overlay",
        { backgroundColor: "rgba(0, 0, 0, 0)" },
        {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          duration: 1,
          ease: "power3.out",
        },
        0
      )
      .fromTo(
        ".content",
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
        0
      )
      .fromTo(
        ".content h1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        ".content p",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      );
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col items-start justify-start overflow-hidden"
    >
      {/* Heading for Our Beliefs */}
      <div className="absolute top-10 left-10 z-[4]">
        <h2 className="text-5xl md:text-6xl font-bold text-white">
          Our Beliefs
        </h2>
      </div>

      {/* Background Image */}
      <div className="hero-bg absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/31293423/pexels-photo-31293423.jpeg')] bg-center bg-cover z-[1] scale-100 origin-center"></div>
      <div className="hero-overlay absolute top-0 left-0 w-full h-full bg-black/0 z-[2]"></div>

      {/* Animated Content */}
      <div className="content opacity-0 text-white text-left text-[1.8em] p-[30px] m-10 max-w-[500px] -translate-x-[100px] z-[3] mt-[80px]">
        <h1 className="text-[2.2em] m-0 mb-[15px]">This is the content</h1>
        <p className="text-[1.2em] m-0 mb-[15px]">
          Scroll down to see the effect. The content slides in from the left as
          the image scales and darkens with a black overlay.
        </p>
      </div>
    </section>
  );
};

export default OurBeliefs;
