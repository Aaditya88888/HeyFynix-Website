// "use client";

// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ChevronLeft, ChevronRight } from "lucide-react"; // ✅ Added icons

// const Work = () => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const duration = 1000; // scroll distance for animation

//     // Pin the container
//     ScrollTrigger.create({
//       trigger: ".image-container",
//       start: "top top",
//       end: `+=${duration}`,
//       pin: true,
//       scrub: true,
//     });

//     // Animate center image
//     gsap.to(".center", {
//       scrollTrigger: {
//         trigger: ".image-container",
//         start: "top top",
//         end: `+=${duration}`,
//         scrub: true,
//       },
//       width: "30vw",
//       height: "40vh",
//     });

//     // Animate left image
//     gsap.to(".left", {
//       scrollTrigger: {
//         trigger: ".image-container",
//         start: "top top",
//         end: `+=${duration}`,
//         scrub: true,
//       },
//       x: "0",
//       opacity: 1,
//     });

//     // Animate right image
//     gsap.to(".right", {
//       scrollTrigger: {
//         trigger: ".image-container",
//         start: "top top",
//         end: `+=${duration}`,
//         scrub: true,
//       },
//       x: "0",
//       opacity: 1,
//     });
//   }, []);

//   return (
//     <div className="overflow-x-hidden bg-black m-0 text-white">
//       {/* Section Heading and Content */}
//       <div className="text-center py-16 px-6 md:px-12">
//         <h1 className="text-[4vw] sm:text-[3vw] md:text-[2.5vw] font-bold mb-4">
//           Work
//         </h1>
//         <h2 className="text-[2.5vw] sm:text-[2vw] md:text-[1.8vw] font-semibold mb-4">
//           Stuff We’re Super Proud Of
//         </h2>
//         <p className="text-[1.3vw] sm:text-[1.1vw] md:text-[1vw] text-gray-300 max-w-4xl mx-auto leading-relaxed">
//           We’re proud of the problems we’ve solved and the stories we’ve told.
//           From bold branding to immersive films for established brands, our
//           portfolio reflects our commitment to excellence. Here's a peek at what
//           we’ve been up to:
//         </p>
//       </div>

//       {/* Image Animation Section */}
//       <div className="image-container flex justify-center items-center gap-5 h-screen overflow-hidden relative">
//         <img
//           className="left flex-shrink-0 w-[30vw] h-[40vh] -translate-x-[100vw] opacity-0 object-cover"
//           src="https://images.pexels.com/photos/34154499/pexels-photo-34154499.jpeg"
//           alt="Image 1"
//         />

//         <div className="center flex-shrink-0 w-[90vw] h-[90vh] opacity-100 relative">
//           <img
//             className="w-full h-full object-cover"
//             src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg"
//             alt="Image 2"
//           />

//           {/* ✅ Added Left & Right Buttons */}
//           <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/70 transition">
//             <ChevronLeft size={28} />
//           </button>
//           <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/70 transition">
//             <ChevronRight size={28} />
//           </button>
//         </div>

//         <img
//           className="right flex-shrink-0 w-[30vw] h-[40vh] translate-x-[100vw] opacity-0 object-cover"
//           src="https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg"
//           alt="Image 3"
//         />
//       </div>
//     </div>
//   );
// };

// export default Work;

// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const Work = () => {
//   const leftRef = useRef(null);
//   const centerRef = useRef(null);
//   const rightRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const duration = 1000;

//     // Pin section
//     ScrollTrigger.create({
//       trigger: ".image-container",
//       start: "top top",
//       end: `+=${duration}`,
//       pin: true,
//       scrub: true,
//     });

//     // Existing animations
//     gsap.to(".center", {
//       scrollTrigger: {
//         trigger: ".image-container",
//         start: "top top",
//         end: `+=${duration}`,
//         scrub: true,
//       },
//       width: "30vw",
//       height: "40vh",
//     });

//     gsap.to(".left", {
//       scrollTrigger: {
//         trigger: ".image-container",
//         start: "top top",
//         end: `+=${duration}`,
//         scrub: true,
//       },
//       x: "0",
//       opacity: 1,
//     });

//     gsap.to(".right", {
//       scrollTrigger: {
//         trigger: ".image-container",
//         start: "top top",
//         end: `+=${duration}`,
//         scrub: true,
//       },
//       x: "0",
//       opacity: 1,
//     });
//   }, []);

//   const swapImages = (direction) => {
//     const left = leftRef.current;
//     const center = centerRef.current;
//     const right = rightRef.current;

//     if (direction === "right") {
//       // Animate center → right and right → center
//       gsap.to(center, {
//         x: "100vw",
//         duration: 0.6,
//         ease: "power2.inOut",
//         onComplete: () => {
//           center.parentNode.insertBefore(right, center);
//           gsap.set(center, { x: 0 });
//         },
//       });

//       gsap.fromTo(
//         right,
//         { x: "100vw" },
//         { x: "0vw", duration: 0.6, ease: "power2.inOut" }
//       );

//       // Swap refs
//       const temp = centerRef.current;
//       centerRef.current = rightRef.current;
//       rightRef.current = temp;
//     }

//     if (direction === "left") {
//       // Animate center → left and left → center
//       gsap.to(center, {
//         x: "-100vw",
//         duration: 0.6,
//         ease: "power2.inOut",
//         onComplete: () => {
//           center.parentNode.insertBefore(center, left);
//           gsap.set(center, { x: 0 });
//         },
//       });

//       gsap.fromTo(
//         left,
//         { x: "-100vw" },
//         { x: "0vw", duration: 0.6, ease: "power2.inOut" }
//       );

//       // Swap refs
//       const temp = centerRef.current;
//       centerRef.current = leftRef.current;
//       leftRef.current = temp;
//     }
//   };

//   return (
//     <div className="overflow-x-hidden bg-black m-0 text-white">
//       {/* Section Heading */}
//       <div className="text-center py-16 px-6 md:px-12">
//         <h1 className="text-[4vw] sm:text-[3vw] md:text-[2.5vw] font-bold mb-4">
//           Work
//         </h1>
//         <h2 className="text-[2.5vw] sm:text-[2vw] md:text-[1.8vw] font-semibold mb-4">
//           Stuff We’re Super Proud Of
//         </h2>
//         <p className="text-[1.3vw] sm:text-[1.1vw] md:text-[1vw] text-gray-300 max-w-4xl mx-auto leading-relaxed">
//           We’re proud of the problems we’ve solved and the stories we’ve told.
//           From bold branding to immersive films for established brands, our
//           portfolio reflects our commitment to excellence. Here's a peek at what
//           we’ve been up to:
//         </p>
//       </div>

//       {/* Image Section */}
//       <div className="image-container flex justify-center items-center gap-5 h-screen overflow-hidden relative">
//         <img
//           ref={leftRef}
//           className="left flex-shrink-0 w-[30vw] h-[40vh] -translate-x-[100vw] opacity-0 object-cover"
//           src="https://images.pexels.com/photos/34154499/pexels-photo-34154499.jpeg"
//           alt="Image 1"
//         />

//         <div
//           ref={centerRef}
//           className="center flex-shrink-0 w-[90vw] h-[90vh] opacity-100 relative"
//         >
//           <img
//             className="w-full h-full object-cover"
//             src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg"
//             alt="Image 2"
//           />
//           <button
//             onClick={() => swapImages("left")}
//             className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 p-3 rounded-full"
//           >
//             <ChevronLeft className="w-6 h-6 text-white" />
//           </button>
//           <button
//             onClick={() => swapImages("right")}
//             className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 p-3 rounded-full"
//           >
//             <ChevronRight className="w-6 h-6 text-white" />
//           </button>
//         </div>

//         <img
//           ref={rightRef}
//           className="right flex-shrink-0 w-[30vw] h-[40vh] translate-x-[100vw] opacity-0 object-cover"
//           src="https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg"
//           alt="Image 3"
//         />
//       </div>
//     </div>
//   );
// };

// export default Work;

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Work = () => {
  const leftRef = useRef(null);
  const centerRef = useRef(null);
  const rightRef = useRef(null);
  const ctaRef = useRef(null); // ✅ for GSAP button animation

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const duration = 1000;

    // Pin section
    ScrollTrigger.create({
      trigger: ".image-container",
      start: "top top",
      end: `+=${duration}`,
      pin: true,
      scrub: true,
    });

    // Animations for image scroll
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

    // ✅ Animate CTA button when it enters view
    gsap.from(ctaRef.current, {
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 90%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const swapImages = (direction) => {
    const left = leftRef.current;
    const center = centerRef.current;
    const right = rightRef.current;

    if (direction === "right") {
      // Animate center → right and right → center
      gsap.to(center, {
        x: "100vw",
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          center.parentNode.insertBefore(right, center);
          gsap.set(center, { x: 0 });
        },
      });

      gsap.fromTo(
        right,
        { x: "100vw" },
        { x: "0vw", duration: 0.6, ease: "power2.inOut" }
      );

      // Swap refs
      const temp = centerRef.current;
      centerRef.current = rightRef.current;
      rightRef.current = temp;
    }

    if (direction === "left") {
      // Animate center → left and left → center
      gsap.to(center, {
        x: "-100vw",
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          center.parentNode.insertBefore(center, left);
          gsap.set(center, { x: 0 });
        },
      });

      gsap.fromTo(
        left,
        { x: "-100vw" },
        { x: "0vw", duration: 0.6, ease: "power2.inOut" }
      );

      // Swap refs
      const temp = centerRef.current;
      centerRef.current = leftRef.current;
      leftRef.current = temp;
    }
  };

  return (
    <div className="overflow-x-hidden bg-black text-white">
      {/* Section Heading */}
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

      {/* Image Section */}
      <div className="image-container flex justify-center items-center gap-5 h-screen overflow-hidden relative">
        <img
          ref={leftRef}
          className="left flex-shrink-0 w-[30vw] h-[40vh] -translate-x-[100vw] opacity-0 object-cover"
          src="https://images.pexels.com/photos/34154499/pexels-photo-34154499.jpeg"
          alt="Image 1"
        />

        <div
          ref={centerRef}
          className="center flex-shrink-0 w-[90vw] h-[90vh] opacity-100 relative"
        >
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg"
            alt="Image 2"
          />
          <button
            onClick={() => swapImages("left")}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 p-3 rounded-full"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => swapImages("right")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 p-3 rounded-full"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        <img
          ref={rightRef}
          className="right flex-shrink-0 w-[30vw] h-[40vh] translate-x-[100vw] opacity-0 object-cover"
          src="https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg"
          alt="Image 3"
        />
      </div>

      {/* ✅ CTA Button Section */}
      <div className="flex justify-center items-center py-24">
        <a
          ref={ctaRef}
          id="home-featured-cta"
          href="/projects"
          target="_blank"
          className="cta-button"
        >
          <span id="home-featured-cta-dot"></span>
          <span id="home-featured-cta-text">About Us</span>
          <span id="home-featured-cta-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.343 8h11.314m0 0L8.673 3.016M13.657 8l-4.984 4.984"
              />
            </svg>
          </span>
        </a>
      </div>

      {/* ✅ Button Styles */}
      <style jsx>{`
        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-decoration: none;
          color: #fff;
          border: 2px solid #fff;
          padding: 12px 24px;
          border-radius: 40px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: #fff;
          color: #000;
        }

        #home-featured-cta-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #fff;
          transform: scale(1);
          transition: all 0.3s ease;
        }

        .cta-button:hover #home-featured-cta-dot {
          transform: scale(1.5);
          background: #000;
        }

        #home-featured-cta-text {
          font-weight: 500;
          font-size: 15px;
          letter-spacing: 0.5px;
          position: relative;
        }

        #home-featured-cta-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .cta-button:hover #home-featured-cta-arrow {
          transform: translateX(6px);
        }

        #home-featured-cta-arrow svg {
          width: 16px;
          height: 16px;
        }
      `}</style>
    </div>
  );
};

export default Work;
