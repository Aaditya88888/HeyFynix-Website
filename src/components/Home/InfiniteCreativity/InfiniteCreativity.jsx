// "use client";

// import React from "react";

// const InfiniteCreativity = () => {
//   return (
//     <>
//       <section className="px-16 py-10 bg-black text-white">
//         <div className="heading-container mb-8">
//           <h1 className="text-4xl md:text-5xl font-bold ml-50">
//             Beyond Boundary
//           </h1>
//           <h1 className="text-4xl md:text-5xl font-bold">
//             Infinite Creativity
//           </h1>
//         </div>

//         <div className="main-container flex flex-col md:flex-row gap-8">
//           {/* Video Container - 50% width */}
//           <div className="video-container md:w-[50%] flex flex-col">
//             <video
//               src="https://www.w3schools.com/html/mov_bbb.mp4"
//               className="w-full h-auto object-cover rounded-lg z-50"
//               autoPlay
//               muted
//               loop
//               playsInline
//             />
//             <p className="mt-4 text-lg font-medium">Check Out our Showreel</p>
//           </div>

//           {/* Text Container - 60% width */}
//           <div className="text-container md:w-[60%] flex justify-center gap-5">
//             <h4 className="text-2xl md:w-[45%] md:text-3xl font-semibold mb-4">
//               Creativity is the Foundation of what we do
//             </h4>
//             <p className="text-lg md:w-[55%] leading-relaxed flex items-end">
//               Heyfynix is a digital production studio that brings your ideas to
//               life through visually captivating designs and interactive
//               experiences. With our talented team, we push boundaries by solving
//               complex problems, delivering tailored solutions that exceed
//               expectations and engage audiences.
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default InfiniteCreativity;

// ******************************************************

// "use client";

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const InfiniteCreativity = () => {
//   const videoContainer = useRef(null); // the div.video-container
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const videoWrap = videoContainer.current; // .video-container (keep this visible)
//     const sectionEl = sectionRef.current;
//     if (!videoWrap || !sectionEl) return;

//     // Helper: hide/show
//     const hideNodes = (nodes) =>
//       gsap.set(nodes, {
//         opacity: 0,
//         visibility: "hidden",
//         pointerEvents: "none",
//       });
//     const showNodes = (nodes) =>
//       gsap.set(nodes, {
//         opacity: 1,
//         visibility: "visible",
//         pointerEvents: "auto",
//       });

//     // 1) Collect direct children of the section (top-level blocks)
//     const directChildren = Array.from(sectionEl.children);

//     // 2) We'll hide:
//     //    - All direct children of the section EXCEPT the main-container (we'll handle it separately).
//     //    - Inside main-container, hide all children except the .video-container.
//     const mainContainer = sectionEl.querySelector(".main-container");

//     // Targets to hide when trigger hits
//     const toHide = [];

//     directChildren.forEach((child) => {
//       // If there's no main-container found: hide everything except the videoWrap's ancestor chain.
//       if (mainContainer) {
//         // hide any direct child that is NOT the main-container
//         if (child !== mainContainer) {
//           toHide.push(child);
//         }
//       } else {
//         // fallback: hide direct children except the ancestor chain of the videoWrap
//         if (!child.contains(videoWrap) && child !== videoWrap) {
//           toHide.push(child);
//         }
//       }
//     });

//     if (mainContainer) {
//       // inside mainContainer, hide all children except the video container element
//       const inside = Array.from(mainContainer.children);
//       inside.forEach((ch) => {
//         if (!ch.classList.contains("video-container")) {
//           toHide.push(ch);
//         }
//       });
//       // do NOT hide mainContainer itself (so videoWrap stays visible)
//     } else {
//       // fallback: if mainContainer not present, hide everything in section except videoWrap and its ancestors
//       const all = Array.from(sectionEl.querySelectorAll("*"));
//       all.forEach((el) => {
//         if (
//           el !== videoWrap &&
//           !videoWrap.contains(el) &&
//           !el.contains(videoWrap)
//         ) {
//           toHide.push(el);
//         }
//       });
//     }

//     // remove duplicates
//     const uniqueToHide = Array.from(new Set(toHide));

//     // ScrollTrigger timeline
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: videoWrap,
//         start: "top 25%", // when top of video hits 30% viewport height
//         end: "+=120%",
//         scrub: true,
//         pin: true,
//         onEnter: () => {
//           // hide everything except videoWrap (instant)
//           hideNodes(uniqueToHide);
//         },
//         onLeaveBack: () => {
//           // restore when scrolling back up
//           showNodes(uniqueToHide);
//         },
//       },
//     });

//     // Video animation (zoom to visually ~80% and then move up)
//     tl.to(videoWrap, {
//       scale: 1.6,
//       xPercent: -50,
//       yPercent: -50,
//       top: "50%",
//       left: "50%",
//       position: "fixed",
//       zIndex: 9999,
//       ease: "power2.out",
//     }).to(videoWrap, {
//       yPercent: -200,
//       ease: "power2.inOut",
//     });

//     // cleanup
//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//       tl.kill();
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative px-16 py-10 bg-black text-white overflow-hidden"
//     >
//       {/* Heading (will be hidden when video hits 30%) */}
//       <div className="heading-container mb-8">
//         <h1 className="text-4xl md:text-5xl font-bold ml-50">
//           Beyond Boundary
//         </h1>
//         <h1 className="text-4xl md:text-5xl font-bold">Infinite Creativity</h1>
//       </div>

//       {/* Main container (kept visible as the wrapper for the video) */}
//       <div className="main-container flex flex-col md:flex-row gap-8">
//         {/* Video container (this MUST remain visible) */}
//         <div
//           ref={videoContainer}
//           className="video-container md:w-[50%] flex flex-col relative z-50"
//         >
//           <video
//             src="https://www.w3schools.com/html/mov_bbb.mp4"
//             className="w-full h-auto object-cover rounded-lg"
//             autoPlay
//             muted
//             loop
//             playsInline
//           />
//           <p className="mt-4 text-lg font-medium">Check Out our Showreel</p>
//         </div>

//         {/* Text (will be hidden) */}
//         <div className="text-container md:w-[60%] flex justify-center gap-5">
//           <h4 className="text-2xl md:w-[45%] md:text-3xl font-semibold mb-4">
//             Creativity is the Foundation of what we do
//           </h4>
//           <p className="text-lg md:w-[55%] leading-relaxed flex items-end">
//             Heyfynix is a digital production studio that brings your ideas to
//             life through visually captivating designs and interactive
//             experiences. With our talented team, we push boundaries by solving
//             complex problems, delivering tailored solutions that exceed
//             expectations and engage audiences.
//           </p>
//         </div>
//       </div>
//       <div className="h-[60vh] bg-gradient-to-b from-black to-gray-900 mt-20 flex items-center justify-center">
//         <h2 className="text-3xl font-bold text-gray-300">
//           Continue Scrolling — More Content Appears 🚀
//         </h2>
//       </div>
//     </section>
//   );
// };

// export default InfiniteCreativity;

// *********************************************************

"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InfiniteCreativity = () => {
  const sectionRef = useRef(null);
  const videoContainerRef = useRef(null);
  const textContainerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const videoContainer = videoContainerRef.current;
    const textContainer = textContainerRef.current;
    const video = videoRef.current;

    // Pin the whole section and drive the animation with scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top", // pin when top of section hits top of viewport
        end: "+=180%", // long enough for a smooth “reveal”
        scrub: 1, // buttery-smooth scroll-linked animation
        pin: true,
        anticipatePin: 1,
        // markers: true,          // uncomment for debugging
      },
    });

    /* ---------- ANIMATION SEQUENCE (Lusion style) ---------- */

    // 1. Text moves up and fades out
    tl.to(textContainer, {
      y: -400,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    })

      // 2. Video container slides down a bit (helps the transition)
      .to(
        videoContainer,
        {
          y: 180,
          duration: 1,
          ease: "power2.inOut",
        },
        0
      )

      // 3. Video scales + centers perfectly (the hero moment)
      .to(
        video,
        {
          width: "80vw",
          height: "80vh",
          maxWidth: "90vw",
          borderRadius: "2rem",
          position: "absolute",
          top: "50%",
          left: "50%",
          xPercent: -50,
          yPercent: -50,
          zIndex: 200,
          boxShadow: "0 30px 60px -12px rgba(0,0,0,0.6)",
          duration: 1.4,
          ease: "power3.out",
        },
        0.4
      )

      // 4. Fade the original container away (so only the animated video remains)
      .to(
        videoContainer,
        {
          opacity: 0,
          duration: 0.6,
        },
        0.9
      );

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative px-16 py-10 bg-black text-white overflow-hidden"
      >
        {/* ---------- HEADINGS ---------- */}
        <div className="heading-container mb-8">
          <h1 className="text-4xl md:text-5xl font-bold ml-50">
            Beyond Boundary
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold">
            Infinite Creativity
          </h1>
        </div>

        {/* ---------- MAIN CONTENT ---------- */}
        <div className="main-container flex flex-col md:flex-row gap-8 relative z-10">
          {/* VIDEO CONTAINER */}
          <div
            ref={videoContainerRef}
            className="video-container md:w-[50%] flex flex-col"
          >
            <video
              ref={videoRef}
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              className="w-full h-auto object-cover rounded-lg z-50"
              autoPlay
              muted
              loop
              playsInline
            />
            <p className="mt-4 text-lg font-medium">Check Out our Showreel</p>
          </div>

          {/* TEXT CONTAINER */}
          <div
            ref={textContainerRef}
            className="text-container md:w-[60%] flex justify-center gap-5"
          >
            <h4 className="text-2xl md:w-[45%] md:text-3xl font-semibold mb-4">
              Creativity is the Foundation of what we do
            </h4>
            <p className="text-lg md:w-[55%] leading-relaxed flex items-end">
              Heyfynix is a digital production studio that brings your ideas to
              life through visually captivating designs and interactive
              experiences. With our talented team, we push boundaries by solving
              complex problems, delivering tailored solutions that exceed
              expectations and engage audiences.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfiniteCreativity;
