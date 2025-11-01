// "use client";

// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const WhoWeAre = () => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#reveal-section",
//         pin: true,
//         start: "top top",
//         end: "+=300%",
//         scrub: 0.8,
//         anticipatePin: 1,
//         invalidateOnRefresh: true,
//       },
//     });

//     // Panels open (duration: 3) — this creates the main timeline progress
//     tl.to("#top-panel", { yPercent: -100, duration: 3, ease: "none" }, 0)
//       .to("#bottom-panel", { yPercent: 100, duration: 3, ease: "none" }, 0)
//       .to(
//         "#content",
//         {
//           scale: 1,
//           duration: 1,
//           ease: "power3.out",
//           onUpdate: function () {
//             const progress = this.progress();
//             gsap.set("#content", { scale: 0.95 + progress * 0.05 });
//           },
//         },
//         0
//       );

//     // === IMAGES: move in proportion to the panels' progress ===
//     // Put image tweens on the same timeline, same start (0) and same duration (3).
//     // Use ease: "none" so motion maps linearly to timeline progress.
//     tl.fromTo(
//       "#inner-left",
//       { xPercent: -120, opacity: 0 },
//       { xPercent: 0, opacity: 1, duration: 3, ease: "none" },
//       0
//     );

//     tl.fromTo(
//       "#inner-right-top",
//       { yPercent: -150, opacity: 0 }, // image starts above
//       { yPercent: 0, opacity: 1, duration: 3, ease: "none" }, // moves down proportionally
//       0
//     );

//     tl.fromTo(
//       "#inner-right-bottom",
//       { xPercent: 120, opacity: 0 },
//       { xPercent: 0, opacity: 1, duration: 3, ease: "none" },
//       0
//     );

//     const handleResize = () => {
//       ScrollTrigger.refresh();
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div className="w-full overflow-x-hidden">
//       <div id="pin-spacer" className="relative w-full">
//         <div
//           id="reveal-section"
//           className="relative w-full min-h-[70vh] sm:min-h-[80vh] md:h-screen overflow-hidden bg-black"
//         >
//           {/* Top Panel */}
//           <div
//             id="top-panel"
//             className="absolute top-0 left-0 w-full h-1/2 bg-black z-30"
//           ></div>

//           {/* Content Section */}
//           <section
//             id="content"
//             className="absolute inset-0 flex items-center justify-center w-full h-full overflow-hidden px-10 sm:px-6 md:px-16 bg-black text-white font-sans pb-16 md:pb-0 z-20 will-change-transform"
//           >
//             {/* Subtle Background */}
//             <div className="absolute top-0 left-0 w-full h-full">
//               <div className="absolute w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-white/10 rounded-full animate-pulse blur-3xl -top-16 sm:-top-20 md:-top-24 -left-16 sm:-left-20 md:-left-24"></div>
//               <div className="absolute w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-white/5 rounded-full animate-pulse blur-3xl -bottom-20 sm:-bottom-24 md:-bottom-32 -right-20 sm:-right-24 md:-right-32"></div>
//             </div>

//             {/* === IMAGES INSIDE CONTENT (initial offscreen, will move in proportion) === */}
//             <div className="absolute inset-0 pointer-events-none z-0">
//               {/* Left Image */}
//               <div
//                 className="absolute left-10 top-1/2 transform -translate-y-1/2"
//                 id="inner-left"
//               >
//                 <img
//                   src="https://images.pexels.com/photos/33430991/pexels-photo-33430991.jpeg"
//                   alt="Left"
//                   className="w-40 sm:w-56 md:w-100 md:h-70 shadow-2xl object-cover"
//                 />
//               </div>

//               {/* Right Stacked Images */}
//               <div
//                 className="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-10 items-end"
//                 style={{ pointerEvents: "none" }}
//               >
//                 <div id="inner-right-top">
//                   <img
//                     src="https://images.pexels.com/photos/34410855/pexels-photo-34410855.jpeg"
//                     alt="Right Top"
//                     className="w-36 sm:w-48 md:w-100 md:h-70 shadow-2xl object-cover"
//                   />
//                 </div>
//                 <div id="inner-right-bottom">
//                   <img
//                     src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg"
//                     alt="Right Bottom"
//                     className="w-36 sm:w-48 md:w-100 md:h-70 shadow-2xl object-cover"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Text Content */}
//             <div className="relative max-w-[90%] sm:max-w-[80%] md:max-w-3xl lg:max-w-4xl text-center space-y-6 sm:space-y-8 z-10">
//               <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-200 drop-shadow-lg">
//                 Who We Are
//               </h1>

//               <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed animate-paragraph">
//                 Imagine a team that's as excited about your ideas as you are.
//                 That's us! We're a bunch of passionate creatives who live for
//                 solving problems with a dash of fun and a whole lot of heart.
//                 Whether it's crafting a killer brand story or dreaming up
//                 digital experiences, we're all about making things that connect
//                 on a human level.
//               </p>

//               <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 font-semibold animate-paragraph">
//                 What's your story? We'd love to hear it and help you tell it
//                 better. Join the fun!
//               </p>

//               <button className="relative mt-4 sm:mt-6 px-6 py-3 sm:px-8 sm:py-4 font-semibold text-black bg-white rounded-full overflow-hidden shadow-lg transition-all duration-500 group cursor-pointer">
//                 <span className="absolute inset-0 bg-gradient-to-r from-white to-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
//                 <span className="relative z-10 group-hover:text-black transition-colors duration-500">
//                   Join Us
//                 </span>
//                 <span className="absolute inset-0 rounded-full border-2 border-white group-hover:border-gray-300 blur-[1px] group-hover:blur-sm transition-all duration-500"></span>
//               </button>
//             </div>
//           </section>

//           {/* Bottom Panel */}
//           <div
//             id="bottom-panel"
//             className="absolute bottom-0 left-0 w-full h-1/2 bg-black z-30"
//           ></div>

//           {/* Panel Text Styles */}
//           <style jsx>{`
//             #top-panel::before,
//             #bottom-panel::before {
//               content: "Hey, Nice to Meet You!";
//               position: absolute;
//               width: 100%;
//               text-align: center;
//               font-size: clamp(7rem, 5vw, 3rem);
//               text-transform: uppercase;
//               font-weight: 700;
//               letter-spacing: 0.1em;
//               color: #fff;
//               text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
//               margin: 0;
//             }
//             #top-panel::before {
//               bottom: 0;
//               clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
//               transform: translateY(50%);
//             }
//             #bottom-panel::before {
//               top: 0;
//               clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
//               transform: translateY(-50%);
//             }
//           `}</style>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhoWeAre;

"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhoWeAre = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#reveal-section",
        pin: true,
        start: "top top",
        end: "+=300%",
        scrub: 0.8,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Panels open (duration: 3) — this creates the main timeline progress
    tl.to("#top-panel", { yPercent: -100, duration: 3, ease: "none" }, 0)
      .to("#bottom-panel", { yPercent: 100, duration: 3, ease: "none" }, 0)
      .to(
        "#content",
        {
          scale: 1,
          duration: 1,
          ease: "power3.out",
          onUpdate: function () {
            const progress = this.progress();
            gsap.set("#content", { scale: 0.95 + progress * 0.05 });
          },
        },
        0
      );

    // === IMAGES: move in proportion to the panels' progress ===
    // Put image tweens on the same timeline, same start (0) and same duration (3).
    // Use ease: "none" so motion maps linearly to timeline progress.
    tl.fromTo(
      "#inner-left",
      { xPercent: -120, opacity: 0 },
      { xPercent: 0, opacity: 1, duration: 3, ease: "none" },
      0
    );

    tl.fromTo(
      "#inner-right-top",
      { yPercent: -150, opacity: 0 }, // image starts above
      { yPercent: 0, opacity: 1, duration: 3, ease: "none" }, // moves down proportionally
      0
    );

    tl.fromTo(
      "#inner-right-bottom",
      { xPercent: 120, opacity: 0 },
      { xPercent: -20, opacity: 1, duration: 3, ease: "none" },
      0
    );

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <div id="pin-spacer" className="relative w-full">
        <div
          id="reveal-section"
          className="relative w-full min-h-[70vh] sm:min-h-[80vh] md:h-screen overflow-hidden bg-black"
        >
          {/* Top Panel */}
          <div
            id="top-panel"
            className="absolute top-0 left-0 w-full h-1/2 bg-black z-30"
          ></div>

          {/* Content Section */}
          <section
            id="content"
            className="absolute inset-0 flex items-center justify-center w-full h-full overflow-hidden px-10 sm:px-6 md:px-16 bg-black text-white font-sans pb-16 md:pb-0 z-20 will-change-transform"
          >
            {/* Subtle Background */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-white/10 rounded-full animate-pulse blur-3xl -top-16 sm:-top-20 md:-top-24 -left-16 sm:-left-20 md:-left-24"></div>
              <div className="absolute w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-white/5 rounded-full animate-pulse blur-3xl -bottom-20 sm:-bottom-24 md:-bottom-32 -right-20 sm:-right-24 md:-right-32"></div>
            </div>

            {/* === IMAGES INSIDE CONTENT (initial offscreen, will move in proportion) === */}
            <div className="absolute inset-0 pointer-events-none z-0">
              {/* Left Image */}
              <div
                className="absolute left-10 top-1/2 transform -translate-y-1/2"
                id="inner-left"
              >
                <img
                  src="https://images.pexels.com/photos/33430991/pexels-photo-33430991.jpeg"
                  alt="Left"
                  className="w-40 sm:w-56 md:w-100 md:h-70 shadow-2xl object-cover"
                />
              </div>

              {/* Right Stacked Images */}
              <div
                className="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-10 items-end"
                style={{ pointerEvents: "none" }}
              >
                <div id="inner-right-top">
                  <img
                    src="https://images.pexels.com/photos/34410855/pexels-photo-34410855.jpeg"
                    alt="Right Top"
                    className="w-36 sm:w-48 md:w-100 md:h-70 shadow-2xl object-cover"
                  />
                </div>
                <div id="inner-right-bottom">
                  <img
                    src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg"
                    alt="Right Bottom"
                    className="w-36 sm:w-48 md:w-100 md:h-70 shadow-2xl object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="relative max-w-[90%] sm:max-w-[80%] md:max-w-3xl lg:max-w-4xl text-center space-y-6 sm:space-y-8 z-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-200 drop-shadow-lg">
                Who We Are
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed animate-paragraph">
                Imagine a team that's as excited about your ideas as you are.
                That's us! We're a bunch of passionate creatives who live for
                solving problems with a dash of fun and a whole lot of heart.
                Whether it's crafting a killer brand story or dreaming up
                digital experiences, we're all about making things that connect
                on a human level.
              </p>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 font-semibold animate-paragraph">
                What's your story? We'd love to hear it and help you tell it
                better. Join the fun!
              </p>

              <button className="relative mt-4 sm:mt-6 px-6 py-3 sm:px-8 sm:py-4 font-semibold text-black bg-white rounded-full overflow-hidden shadow-lg transition-all duration-500 group cursor-pointer">
                <span className="absolute inset-0 bg-gradient-to-r from-white to-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                  Join Us
                </span>
                <span className="absolute inset-0 rounded-full border-2 border-white group-hover:border-gray-300 blur-[1px] group-hover:blur-sm transition-all duration-500"></span>
              </button>
            </div>
          </section>

          {/* Bottom Panel */}
          <div
            id="bottom-panel"
            className="absolute bottom-0 left-0 w-full h-1/2 bg-black z-30"
          ></div>

          {/* Panel Text Styles */}
          <style jsx>{`
            #top-panel::before,
            #bottom-panel::before {
              content: "Hey, Nice to Meet You!";
              position: absolute;
              width: 100%;
              text-align: center;
              font-size: clamp(7rem, 5vw, 3rem);
              text-transform: uppercase;
              font-weight: 700;
              letter-spacing: 0.1em;
              color: #fff;
              text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
              margin: 0;
            }
            #top-panel::before {
              bottom: 0;
              clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
              transform: translateY(50%);
            }
            #bottom-panel::before {
              top: 0;
              clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
              transform: translateY(-50%);
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
