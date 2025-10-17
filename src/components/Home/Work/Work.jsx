"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Work = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for First Section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section",
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".image-section", {
      xPercent: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    }).from(
      ".content-section",
      {
        xPercent: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.8"
    );

    // Animation for Second Section
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          pin: true,
          scrub: 1,
        },
      })
      .fromTo(
        "#hero .hero-bg",
        { scale: 1 },
        { scale: 1.1, duration: 1, ease: "power3.out" }
      )
      .fromTo(
        "#hero .hero-overlay",
        { backgroundColor: "rgba(0, 0, 0, 0)" },
        {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          duration: 1,
          ease: "power3.out",
        },
        0
      )
      .fromTo(
        "#hero .content",
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
        0
      )
      .fromTo(
        "#hero .content h1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        "#hero .content p",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      );

    // Animation for Third Section
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero2",
          start: "top top",
          end: "bottom top",
          pin: true,
          scrub: 1,
        },
      })
      .fromTo(
        "#hero2 .hero-bg",
        { scale: 1 },
        { scale: 1.1, duration: 1, ease: "power3.out" }
      )
      .fromTo(
        "#hero2 .hero-overlay",
        { backgroundColor: "rgba(0, 0, 0, 0)" },
        {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          duration: 1,
          ease: "power3.out",
        },
        0
      )
      .fromTo(
        "#hero2 .content",
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
        0
      )
      .fromTo(
        "#hero2 .content h1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        "#hero2 .content p",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      );
  }, []);

  return (
    <div className="bg-black">
      {/* Heading Section */}
      <div className="text-center py-20 px-5 max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">Work</h2>
      </div>

      {/* First Section */}
      <div className="flex justify-between items-center w-full h-screen p-5 section overflow-hidden">
        <div className="h-[80vh] w-[50%] image-section">
          <img
            src="https://images.pexels.com/photos/31293423/pexels-photo-31293423.jpeg"
            alt="Sample"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
        <div className="h-[80vh] w-[45%] flex flex-col justify-center p-5 box-border content-section text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
            Stuff We’re Super Proud Of
          </h2>
          <p className="text-2xl md:text-3xl leading-relaxed">
            We’re proud of the problems we’ve solved and the stories we’ve told.
            From bold branding to immersive films for established brands, our
            portfolio reflects our commitment to excellence. Here's a peek at
            what we’ve been up to:
          </p>
        </div>
      </div>

      {/* Second Section */}
      <section
        id="hero"
        className="relative h-screen w-full flex items-end justify-start overflow-hidden"
      >
        <div className="hero-bg absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/31293423/pexels-photo-31293423.jpeg')] bg-center bg-cover z-[1] scale-100 origin-center"></div>
        <div className="hero-overlay absolute top-0 left-0 w-full h-full bg-black/0 z-[2]"></div>
        <div className="content opacity-0 text-white text-left text-[1.8em] p-[30px] m-10 max-w-[500px] -translate-x-[100px] z-[3]">
          <h1 className="text-[2.2em] m-0 mb-[15px]">
            Beti Bachao Beti Padhao
          </h1>
          <p className="text-[1.2em] m-0 mb-[15px]">
            A campaign that sparked meaningful conversations. Our work has been
            presented in front of our Prime Minister and is hugely appreciated
            for the visuals and story we tell
          </p>
        </div>
      </section>

      {/* Gap */}
      <section className="h-[10vh] w-full"></section>

      {/* Third Section */}
      <section
        id="hero2"
        className="relative h-screen w-full flex items-end justify-start overflow-hidden"
      >
        <div className="hero-bg absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/31293423/pexels-photo-31293423.jpeg')] bg-center bg-cover z-[1] scale-100 origin-center"></div>
        <div className="hero-overlay absolute top-0 left-0 w-full h-full bg-black/0 z-[2]"></div>
        <div className="content opacity-0 text-white text-left text-[1.8em] p-[30px] m-10 max-w-[500px] -translate-x-[100px] z-[3]">
          <h1 className="text-[2.2em] m-0 mb-[15px]">Music Videos</h1>
          <p className="text-[1.2em] m-0 mb-[15px]">
            Every Artist has a dream and we turn their dream into reality, their
            vision into story
          </p>
        </div>
      </section>
    </div>
  );
};

export default Work;
