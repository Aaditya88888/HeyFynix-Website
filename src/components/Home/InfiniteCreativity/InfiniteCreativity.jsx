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

// "use client";

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const InfiniteCreativity = () => {
//   const sectionRef = useRef(null);
//   const videoContainerRef = useRef(null);
//   const textContainerRef = useRef(null);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const videoContainer = videoContainerRef.current;
//     const textContainer = textContainerRef.current;
//     const video = videoRef.current;

//     /* -------------------------------------------------
//        LUSION-STYLE SCROLLTRIGGER
//        ------------------------------------------------- */
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top top",
//         end: "+=320%", // long cinematic scroll (Lusion)
//         scrub: true, // ultra-smooth scrub
//         pin: true,
//         anticipatePin: 1,
//         // markers: true,
//       },
//     });

//     /* -------------------------------------------------
//        EXACT LUSION SEQUENCE
//        ------------------------------------------------- */

//     // 1. Text fades + slides up (early)
//     tl.to(
//       textContainer,
//       {
//         y: -280,
//         opacity: 0,
//         duration: 1.2,
//         ease: "power2.out",
//       },
//       0
//     )

//       // 2. Video container drifts down a little
//       .to(
//         videoContainer,
//         {
//           y: 130,
//           duration: 1.6,
//           ease: "power2.out",
//         },
//         0
//       )

//       // 3. VIDEO SCALES + LOCKS CENTER (Lusion hero)
//       .to(
//         video,
//         {
//           width: "78vw",
//           height: "78vh",
//           maxWidth: "90vw",
//           borderRadius: "1.5rem",
//           position: "fixed", // sticks to viewport
//           top: "50%",
//           left: "50%",
//           xPercent: -50,
//           yPercent: -50,
//           zIndex: 9999,
//           boxShadow: "0 40px 80px rgba(0,0,0,0.7)",
//           duration: 2.8,
//           ease: "expo.out", // Lusion’s signature easing
//         },
//         0.7
//       )

//       // 4. Original container fades out
//       .to(
//         videoContainer,
//         {
//           opacity: 0,
//           duration: 0.8,
//         },
//         1.4
//       );

//     // Cleanup
//     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
//   }, []);

//   return (
//     <>
//       <section
//         ref={sectionRef}
//         className="relative px-16 py-10 bg-black text-white overflow-hidden min-h-screen"
//       >
//         <div className="heading-container mb-8">
//           <h1 className="text-4xl md:text-5xl font-bold ml-50">
//             Beyond Boundary
//           </h1>
//           <h1 className="text-4xl md:text-5xl font-bold">
//             Infinite Creativity
//           </h1>
//         </div>

//         <div className="main-container flex flex-col md:flex-row gap-8 relative z-10">
//           {/* VIDEO CONTAINER */}
//           <div
//             ref={videoContainerRef}
//             className="video-container md:w-[50%] flex flex-col"
//           >
//             <video
//               ref={videoRef}
//               src="https://www.w3schools.com/html/mov_bbb.mp4"
//               className="w-full h-auto object-cover rounded-lg z-50"
//               autoPlay
//               muted
//               loop
//               playsInline
//             />
//             <p className="mt-4 text-lg font-medium">Check Out our Showreel</p>
//           </div>

//           {/* TEXT CONTAINER */}
//           <div
//             ref={textContainerRef}
//             className="text-container md:w-[60%] flex justify-center gap-5"
//           >
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

// ******************************************************************

// "use client";

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const InfiniteCreativity = () => {
//   const sectionRef = useRef(null);
//   const videoContainerRef = useRef(null);
//   const textContainerRef = useRef(null);
//   const videoRef = useRef(null);
//   const headingContainerRef = useRef(null); // NEW: for headings

//   useEffect(() => {
//     const section = sectionRef.current;
//     const videoContainer = videoContainerRef.current;
//     const textContainer = textContainerRef.current;
//     const video = videoRef.current;
//     const headingContainer = headingContainerRef.current; // NEW

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top top",
//         end: "+=320%",
//         scrub: true,
//         pin: true,
//         anticipatePin: 1,
//         // markers: true,
//       },
//     });

//     // === ALL ELEMENTS MOVE UPWARD TOGETHER ===
//     tl
//       // 1. Headings go upward
//       .to(
//         headingContainer,
//         {
//           y: -300,
//           opacity: 0,
//           duration: 1.4,
//           ease: "power2.out",
//         },
//         0
//       )

//       // 2. Text container goes upward
//       .to(
//         textContainer,
//         {
//           y: -280,
//           opacity: 0,
//           duration: 1.2,
//           ease: "power2.out",
//         },
//         0
//       )

//       // 3. Video container drifts down slightly
//       .to(
//         videoContainer,
//         {
//           y: 130,
//           duration: 1.6,
//           ease: "power2.out",
//         },
//         0
//       )

//       // 4. VIDEO SCALES + LOCKS CENTER (Lusion-style)
//       .to(
//         video,
//         {
//           width: "78vw",
//           height: "78vh",
//           maxWidth: "90vw",
//           borderRadius: "1.5rem",
//           position: "fixed",
//           top: "10%",
//           left: "110%",
//           xPercent: -50,
//           yPercent: -50,
//           zIndex: 9999,
//           boxShadow: "0 40px 80px rgba(0,0,0,0.7)",
//           duration: 2.8,
//           ease: "expo.out",
//         },
//         0.7
//       )

//       // 5. Original container fades
//       .to(
//         videoContainer,
//         {
//           // opacity: 0,
//           // duration: 0.8,
//         },
//         1.4
//       );

//     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
//   }, []);

//   return (
//     <>
//       <section
//         ref={sectionRef}
//         className="relative px-16 py-10 bg-black text-white overflow-hidden min-h-screen"
//       >
//         {/* HEADINGS - NOW ANIMATED UPWARD */}
//         <div ref={headingContainerRef} className="heading-container mb-8">
//           <h1 className="text-4xl md:text-5xl font-bold ml-50">
//             Beyond Boundary
//           </h1>
//           <h1 className="text-4xl md:text-5xl font-bold">
//             Infinite Creativity
//           </h1>
//         </div>

//         <div className="main-container flex flex-col md:flex-row gap-8 relative z-10">
//           {/* VIDEO CONTAINER */}
//           <div
//             ref={videoContainerRef}
//             className="video-container md:w-[50%] flex flex-col"
//           >
//             <video
//               ref={videoRef}
//               src="https://www.w3schools.com/html/mov_bbb.mp4"
//               className="w-full h-auto object-cover rounded-lg z-50"
//               autoPlay
//               muted
//               loop
//               playsInline
//             />
//             <p className="mt-4 text-lg font-medium">Check Out our Showreel</p>
//           </div>

//           {/* TEXT CONTAINER - ANIMATED UPWARD */}
//           <div
//             ref={textContainerRef}
//             className="text-container md:w-[60%] flex justify-center gap-5"
//           >
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

// ***************************************************************

// "use client";

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const InfiniteCreativity = () => {
//   const sectionRef = useRef(null);
//   const videoContainerRef = useRef(null);
//   const textContainerRef = useRef(null);
//   const videoRef = useRef(null);
//   const headingContainerRef = useRef(null);
//   const showreelTextRef = useRef(null); // Ref for "Check Out our Showreel"

//   useEffect(() => {
//     const section = sectionRef.current;
//     const videoContainer = videoContainerRef.current;
//     const textContainer = textContainerRef.current;
//     const video = videoRef.current;
//     const headingContainer = headingContainerRef.current;
//     const showreelText = showreelTextRef.current;

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top top",
//         end: "+=320%",
//         scrub: true,
//         pin: true,
//         anticipatePin: 1,
//         // markers: true,
//       },
//     });

//     // === ANIMATIONS ===
//     tl
//       // 0. HIDE "Check Out our Showreel" TEXT ON SCROLL START
//       .to(
//         showreelText,
//         {
//           opacity: 0,
//           y: -20,
//           duration: 0.6,
//           ease: "power2.out",
//           onComplete: () => {
//             if (showreelText) {
//               showreelText.style.display = "none";
//             }
//           },
//         },
//         0
//       )

//       // 1. Headings move upward
//       .to(
//         headingContainer,
//         {
//           y: -300,
//           opacity: 0,
//           duration: 1.4,
//           ease: "power2.out",
//         },
//         0
//       )

//       // 2. Text container moves upward
//       .to(
//         textContainer,
//         {
//           y: -280,
//           opacity: 0,
//           duration: 1.2,
//           ease: "power2.out",
//         },
//         0
//       )

//       // 3. Video container drifts down
//       .to(
//         videoContainer,
//         {
//           y: 130,
//           duration: 1.6,
//           ease: "power2.out",
//         },
//         0
//       )

//       // 4. Video scales and locks to center
//       .to(
//         video,
//         {
//           width: "78vw",
//           height: "78vh",
//           maxWidth: "90vw",
//           borderRadius: "1.5rem",
//           position: "fixed",
//           top: "10%",
//           left: "110%",
//           xPercent: -50,
//           yPercent: -50,
//           zIndex: 9999,
//           boxShadow: "0 40px 80px rgba(0,0,0,0.7)",
//           duration: 2.8,
//           ease: "expo.out",
//         },
//         0.7
//       );

//     // Cleanup on unmount
//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <>
//       <section
//         ref={sectionRef}
//         className="relative px-16 py-10 bg-black text-white overflow-hidden min-h-screen"
//       >
//         {/* HEADINGS */}
//         <div ref={headingContainerRef} className="heading-container mb-8">
//           <h1 className="text-4xl md:text-5xl font-bold ml-50">
//             Beyond Boundary
//           </h1>
//           <h1 className="text-4xl md:text-5xl font-bold">
//             Infinite Creativity
//           </h1>
//         </div>

//         <div className="main-container flex flex-col md:flex-row gap-8 relative z-10">
//           {/* VIDEO CONTAINER */}
//           <div
//             ref={videoContainerRef}
//             className="video-container md:w-[50%] flex flex-col"
//           >
//             <video
//               ref={videoRef}
//               src="https://www.w3schools.com/html/mov_bbb.mp4"
//               className="w-full h-auto object-cover rounded-lg z-50"
//               autoPlay
//               muted
//               loop
//               playsInline
//             />
//             {/* SHOWREEL TEXT - FADES OUT ON SCROLL */}
//             <p ref={showreelTextRef} className="mt-4 text-lg font-medium">
//               Check Out our Showreel
//             </p>
//           </div>

//           {/* TEXT CONTAINER */}
//           <div
//             ref={textContainerRef}
//             className="text-container md:w-[60%] flex justify-center gap-5"
//           >
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

// *******************************************************************************

// "use client";

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const InfiniteCreativity = () => {
//   const sectionRef = useRef(null);
//   const videoContainerRef = useRef(null);
//   const textContainerRef = useRef(null);
//   const videoRef = useRef(null);
//   const headingContainerRef = useRef(null);
//   const showreelTextRef = useRef(null); // Ref for "Check Out our Showreel"

//   useEffect(() => {
//     const section = sectionRef.current;
//     const videoContainer = videoContainerRef.current;
//     const textContainer = textContainerRef.current;
//     const video = videoRef.current;
//     const headingContainer = headingContainerRef.current;
//     const showreelText = showreelTextRef.current;

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top top",
//         end: "+=320%",
//         scrub: true,
//         pin: true,
//         anticipatePin: 1,
//         // markers: true,
//       },
//     });

//     // === ANIMATIONS ===
//     tl
//       // 0. HIDE "Check Out our Showreel" TEXT ON SCROLL START
//       .to(
//         showreelText,
//         {
//           opacity: 0,
//           y: -20,
//           duration: 0.6,
//           ease: "power2.out",
//           onComplete: () => {
//             if (showreelText) {
//               showreelText.style.display = "none";
//             }
//           },
//         },
//         0
//       )

//       // 1. Headings move upward
//       .to(
//         headingContainer,
//         {
//           y: -300,
//           opacity: 0,
//           duration: 1.4,
//           ease: "power2.out",
//         },
//         0
//       )

//       // 2. Text container moves upward
//       .to(
//         textContainer,
//         {
//           y: -280,
//           opacity: 0,
//           duration: 1.2,
//           ease: "power2.out",
//         },
//         0
//       )

//       // 3. Video container drifts down
//       .to(
//         videoContainer,
//         {
//           y: 130,
//           duration: 1.6,
//           ease: "power2.out",
//         },
//         0
//       )

//       // 4. Video scales and locks to center
//       .to(
//         video,
//         {
//           width: "78vw",
//           height: "78vh",
//           maxWidth: "90vw",
//           borderRadius: "1.5rem",
//           position: "fixed",
//           top: "10%",
//           left: "112%",
//           xPercent: -50,
//           yPercent: -40,
//           zIndex: 9999,
//           boxShadow: "0 40px 80px rgba(0,0,0,0.7)",
//           duration: 2.8,
//           ease: "expo.out",
//         },
//         0.7
//       );

//     // Cleanup on unmount
//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <>
//       <section
//         ref={sectionRef}
//         className="relative px-16 py-10 bg-black text-white overflow-hidden min-h-screen"
//       >
//         {/* HEADINGS */}
//         <div ref={headingContainerRef} className="heading-container mb-8">
//           <h1 className="text-4xl md:text-5xl font-bold ml-50">
//             Beyond Boundary
//           </h1>
//           <h1 className="text-4xl md:text-5xl font-bold">
//             Infinite Creativity
//           </h1>
//         </div>

//         <div className="main-container flex flex-col md:flex-row gap-8 relative z-10">
//           {/* VIDEO CONTAINER */}
//           <div
//             ref={videoContainerRef}
//             className="video-container md:w-[50%] flex flex-col"
//           >
//             <video
//               ref={videoRef}
//               src="https://www.w3schools.com/html/mov_bbb.mp4"
//               className="w-full h-auto object-cover rounded-lg z-50"
//               autoPlay
//               muted
//               loop
//               playsInline
//             />
//             {/* SHOWREEL TEXT - FADES OUT ON SCROLL */}
//             <p ref={showreelTextRef} className="mt-4 text-lg font-medium">
//               Check Out our Showreel
//             </p>
//           </div>

//           {/* TEXT CONTAINER */}
//           <div
//             ref={textContainerRef}
//             className="text-container md:w-[60%] flex justify-center gap-5"
//           >
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

// ********************************************************

// "use client";

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const InfiniteCreativity = () => {
//   const sectionRef = useRef(null);
//   const videoContainerRef = useRef(null);
//   const textContainerRef = useRef(null);
//   const videoRef = useRef(null);
//   const headingContainerRef = useRef(null);
//   const showreelTextRef = useRef(null); // Ref for "Check Out our Showreel"

//   useEffect(() => {
//     const section = sectionRef.current;
//     const videoContainer = videoContainerRef.current;
//     const textContainer = textContainerRef.current;
//     const video = videoRef.current;
//     const headingContainer = headingContainerRef.current;
//     const showreelText = showreelTextRef.current;

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top top",
//         end: "+=320%",
//         scrub: true,
//         pin: true,
//         anticipatePin: 1,
//         // markers: true,
//       },
//     });

//     // === ANIMATIONS ===
//     tl
//       // 0. HIDE "Check Out our Showreel" TEXT ON SCROLL START
//       .to(
//         showreelText,
//         {
//           opacity: 0,
//           y: -20,
//           duration: 0.6,
//           ease: "power2.out",
//           onComplete: () => {
//             if (showreelText) {
//               showreelText.style.display = "none";
//             }
//           },
//         },
//         0
//       )

//       // 1. Headings move upward
//       .to(
//         headingContainer,
//         {
//           y: -300,
//           opacity: 0,
//           duration: 1.4,
//           ease: "power2.out",
//         },
//         0
//       )

//       // 2. Text container moves upward
//       .to(
//         textContainer,
//         {
//           y: -280,
//           opacity: 0,
//           duration: 1.2,
//           ease: "power2.out",
//         },
//         0
//       )

//       // 3. Video container drifts down
//       .to(
//         videoContainer,
//         {
//           y: 130,
//           duration: 1.6,
//           ease: "power2.out",
//         },
//         0
//       )

//       // 4. Video scales and locks to center
//       .to(
//         video,
//         {
//           width: "78vw",
//           height: "78vh",
//           maxWidth: "90vw",
//           borderRadius: "1.5rem",
//           position: "fixed",
//           top: "10%",
//           left: "112%",
//           xPercent: -50,
//           yPercent: -40,
//           zIndex: 9999,
//           boxShadow: "0 40px 80px rgba(0,0,0,0.7)",
//           duration: 2.8,
//           ease: "expo.out",
//         },
//         0.7
//       );

//     // Cleanup on unmount
//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <>
//       <section
//         ref={sectionRef}
//         className="relative px-16 py-10 bg-black text-white overflow-hidden min-h-screen"
//       >
//         {/* HEADINGS */}
//         <div ref={headingContainerRef} className="heading-container mb-8">
//           <h1 className="text-4xl md:text-5xl font-bold ml-50">
//             Beyond Boundary
//           </h1>
//           <h1 className="text-4xl md:text-5xl font-bold">
//             Infinite Creativity
//           </h1>
//         </div>

//         <div className="main-container flex flex-col md:flex-row gap-8 relative z-10">
//           {/* VIDEO CONTAINER */}
//           <div
//             ref={videoContainerRef}
//             className="video-container md:w-[50%] flex flex-col"
//           >
//             <video
//               ref={videoRef}
//               src="https://www.w3schools.com/html/mov_bbb.mp4"
//               className="w-full h-auto object-cover rounded-lg z-50"
//               autoPlay
//               muted
//               loop
//               playsInline
//             />
//             {/* SHOWREEL TEXT - FADES OUT ON SCROLL */}
//             <p ref={showreelTextRef} className="mt-4 text-lg font-medium">
//               Check Out our Showreel
//             </p>
//           </div>

//           {/* TEXT CONTAINER */}
//           <div
//             ref={textContainerRef}
//             className="text-container md:w-[60%] flex justify-center gap-5"
//           >
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

//******************************************************************** */

// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { IoMdPlay } from "react-icons/io";
// import { FaPause } from "react-icons/fa";

// gsap.registerPlugin(ScrollTrigger);

// const InfiniteCreativity = () => {
//   const sectionRef = useRef(null);
//   const videoContainerRef = useRef(null);
//   const textContainerRef = useRef(null);
//   const videoWrapperRef = useRef(null);
//   const videoRef = useRef(null);
//   const headingContainerRef = useRef(null);

//   const boundaryRef = useRef(null);
//   const beyondRef = useRef(null);

//   const showreelTextRef = useRef(null);
//   const playReelRef = useRef(null);
//   const topPlusRef = useRef(null);
//   const bottomPlusRef = useRef(null);
//   const playButtonRef = useRef(null);

//   const [isHovering, setIsHovering] = useState(false);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [isFullVideo, setIsFullVideo] = useState(false);
//   const [isPlayingFullVideo, setIsPlayingFullVideo] = useState(false);

//   const enterFullscreen = () => {};
//   const exitFullscreen = () => {};

//   useEffect(() => {
//     const handleFullscreenChange = () => {};
//   }, [isFullscreen]);

//   const handlePlayClick = (e) => {
//     e.stopPropagation();
//     const video = videoRef.current;
//     if (!video) return;

//     if (!isPlayingFullVideo) {
//       setIsPlayingFullVideo(true);
//       setIsFullVideo(true);
//       video.loop = true;
//       video.play();
//     } else {
//       setIsPlayingFullVideo(false);
//       setIsFullVideo(false);
//       video.currentTime = 0;
//       video.loop = false;
//       video.play();
//     }
//   };

//   useEffect(() => {
//     const videoWrapper = videoWrapperRef.current;
//     const topPlus = topPlusRef.current;
//     const bottomPlus = bottomPlusRef.current;

//     gsap.set([topPlus, bottomPlus], { opacity: 0 });

//     /* -------------------------------------------
//    BEYOND & BOUNDARY — DROP FIRST, THEN SLIDE
// ------------------------------------------- */

//     const tlHeading = gsap.timeline({
//       scrollTrigger: {
//         trigger: headingContainerRef.current,
//         start: "top 85%",
//         end: "top 50%",
//         toggleActions: "restart none none reverse",
//       },
//     });

//     // Step 1 — Drop from top → bottom (50px)
//     tlHeading.fromTo(
//       [beyondRef.current, boundaryRef.current],
//       { y: 50, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.8, ease: "power4.out" }
//     );

//     // Step 2 — Slide left → right
//     tlHeading.fromTo(
//       boundaryRef.current,
//       { x: -200 },
//       { x: 0, duration: 0.8, ease: "expo.out" }
//     );

//     tlHeading.fromTo(
//       beyondRef.current,
//       { x: -200 },
//       {
//         x: 0,
//         duration: 0.7,
//         ease: "expo.out",
//         delay: 0.1,
//       }
//     );

//     /* -------------------------------------------
//    INFINITE CREATIVITY — DROP FROM TOP (50px)
// ------------------------------------------- */

//     gsap.fromTo(
//       headingContainerRef.current.querySelector("h1:nth-child(2)"),
//       { y: -50, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1.2,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: headingContainerRef.current,
//           start: "top 90%",
//           end: "top 60%",
//           toggleActions: "restart none none reverse",
//         },
//       }
//     );

//     gsap.set(videoWrapper, {
//       width: "43vw",
//       height: "50vh",
//       scale: 0.9,
//       transformOrigin: "bottom top",
//       filter: "grayscale(100%) brightness(90%) contrast(150%)",
//     });

//     const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

//     // FIX 1 — removed display: none
//     tl.to(showreelTextRef.current, {
//       opacity: 0,
//       duration: 0.6,
//     })
//       .to(
//         headingContainerRef.current,
//         { y: -300, opacity: 0, duration: 1.4 },
//         0
//       )
//       .to(textContainerRef.current, { y: -280, opacity: 0, duration: 1.2 }, 0)
//       .to(
//         videoWrapper,
//         {
//           width: "90vw",
//           height: "70vh",
//           scale: 1,
//           borderRadius: "1.5rem",
//           boxShadow: "0 40px 80px rgba(0,0,0,0.7)",
//           filter: "grayscale(0%) brightness(100%) contrast(110%)",
//           duration: 2.8,
//           ease: "power3.out",
//         },
//         0.7
//       )
//       .to(playReelRef.current, { opacity: 1, duration: 0.8 }, 1.4)
//       .to([topPlus, bottomPlus], { opacity: 1, duration: 1 }, 1.8);

//     ScrollTrigger.create({
//       trigger: videoWrapper,
//       start: "top 40%",
//       end: "+=1",
//       animation: tl,
//       toggleActions: "play reverse play reverse",
//       scrub: 2,
//       immediateRender: false, // FIX 2 added
//     });

//     return () => ScrollTrigger.killAll();
//   }, []);

//   useEffect(() => {
//     const topPlus = topPlusRef.current;
//     const bottomPlus = bottomPlusRef.current;
//     const button = playButtonRef.current;
//     const videoWrapper = videoWrapperRef.current;

//     if (!topPlus || !bottomPlus || !button || !videoWrapper) return;

//     let topCtx = null;
//     let bottomCtx = null;

//     const arrowSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="inline-block w-6 h-6 mb-1"><path d="M13 5l7 7-7 7M5 12h14"/></svg>`;

//     const createMarquee = (container, isBottom = false) => {
//       const text = `
//         <span class="px-79 text-base">${arrowSVG}${arrowSVG}${arrowSVG} PLAY REEL</span>
//         <span class="px-8 text-base">${arrowSVG}${arrowSVG}${arrowSVG} PLAY REEL</span>
//         <span class="px-79 text-base">${arrowSVG}${arrowSVG}${arrowSVG} PLAY REEL</span>
//         <span class="px-8 text-base">${arrowSVG}${arrowSVG}${arrowSVG} PLAY REEL</span>
//         <span class="px-79 text-base">${arrowSVG}${arrowSVG}${arrowSVG} PLAY REEL</span>
//         <span class="px-8 text-base">${arrowSVG}${arrowSVG}${arrowSVG} PLAY REEL</span>
//       `.trim();

//       container.innerHTML = `<div class="inline-block whitespace-nowrap">${text}${text}${text}</div>`;
//       const wrapper = container.querySelector("div");

//       const ctx = gsap.context(() => {
//         gsap.fromTo(
//           wrapper,
//           { x: isBottom ? "-33.33%" : 0 },
//           {
//             x: isBottom ? "0%" : "-33.33%",
//             duration: 14,
//             ease: "none",
//             repeat: -1,
//           }
//         );
//       }, container);

//       return ctx;
//     };

//     const handleMouseEnter = () => {
//       const scale = gsap.getProperty(videoWrapper, "scale");
//       if (scale < 1 || isFullscreen) return;

//       setIsHovering(true);
//       gsap.to([topPlus, bottomPlus], { opacity: 0, duration: 0.2 });

//       topCtx = createMarquee(topPlus, false);
//       bottomCtx = createMarquee(bottomPlus, true);

//       gsap.to([topPlus, bottomPlus], { opacity: 1, duration: 0.4, delay: 0.2 });
//     };

//     const handleMouseLeave = () => {
//       const scale = gsap.getProperty(videoWrapper, "scale");
//       if (scale < 1 || isFullscreen) return;

//       setIsHovering(false);
//       if (topCtx) topCtx.revert();
//       if (bottomCtx) bottomCtx.revert();

//       const plusHTML = `
//         <span class="px-8">+</span>
//         <span class="px-90">+</span>
//         <span class="px-8">+</span>
//         <span class="px-90">+</span>
//         <span class="px-8">+</span>
//       `;
//       topPlus.innerHTML = plusHTML;
//       bottomPlus.innerHTML = plusHTML;

//       gsap.to([topPlus, bottomPlus], { opacity: 1, duration: 0.3 });
//     };

//     button.addEventListener("mouseenter", handleMouseEnter);
//     button.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       button.removeEventListener("mouseenter", handleMouseEnter);
//       button.removeEventListener("mouseleave", handleMouseLeave);
//       if (topCtx) topCtx.revert();
//       if (bottomCtx) bottomCtx.revert();
//     };
//   }, [isFullscreen]);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleTimeUpdate = () => {
//       if (!isFullVideo && video.currentTime >= 5) {
//         video.currentTime = 0;
//         video.play();
//       }
//     };

//     video.addEventListener("timeupdate", handleTimeUpdate);

//     return () => video.removeEventListener("timeupdate", handleTimeUpdate);
//   }, [isFullVideo]);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative px-[4%] py-10 bg-black text-white overflow-hidden h-[130vh]"
//     >
//       <div ref={headingContainerRef} className="heading-container mb-20">
//         <h1 className="text-7xl md:text-8xl font-medium ml-50">
//           <span ref={beyondRef} className="inline-block">
//             Beyond&nbsp;
//           </span>
//           <span ref={boundaryRef} className="inline-block mr-4">
//             Boundary
//           </span>
//         </h1>
//         <h1 className="text-4xl md:text-8xl font-medium mt-7">
//           Infinite Creativity
//         </h1>
//       </div>

//       <div className="main-container flex flex-col md:flex-row relative z-10">
//         <div
//           ref={videoContainerRef}
//           className="video-container md:w-[50%] flex flex-col relative"
//         >
//           <div ref={topPlusRef} className="w-full flex text-3xl mb-3 opacity-0">
//             <span className="px-8">+</span>
//             <span className="px-90">+</span>
//             <span className="px-8">+</span>
//             <span className="px-90">+</span>
//             <span className="px-8">+</span>
//           </div>

//           <div
//             ref={videoWrapperRef}
//             className="relative rounded-lg z-50 will-change-transform mx-auto"
//           >
//             <video
//               ref={videoRef}
//               src="https://cdn.pixabay.com/video/2025/07/27/293788_tiny.mp4"
//               className="w-full h-full object-cover rounded-[30px] brightness-90 contrast-150"
//               autoPlay
//               muted
//               playsInline
//             />
//             <p ref={showreelTextRef} className="text-base font-normal mb-25">
//               Check Out our Showreel
//             </p>

//             <div
//               ref={playReelRef}
//               className="absolute inset-0 flex items-center justify-center text-white text-8xl font-medium opacity-0 z-[999] pointer-events-none"
//             >
//               <div className="flex items-center gap-4">
//                 <span>PLAY</span>
//                 <button
//                   ref={playButtonRef}
//                   onClick={handlePlayClick}
//                   className="pointer-events-auto relative overflow-hidden p-6 rounded-full group bg-white flex items-center justify-center"
//                 >
//                   <span className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
//                   {isPlayingFullVideo ? (
//                     <FaPause className="relative z-10 text-black group-hover:text-white text-4xl" />
//                   ) : (
//                     <IoMdPlay className="relative z-10 text-black group-hover:text-white text-4xl" />
//                   )}
//                 </button>
//                 <span>REEL</span>
//               </div>
//             </div>
//           </div>

//           <div
//             ref={bottomPlusRef}
//             className="w-full flex text-3xl mb-3 opacity-0 text-white"
//           >
//             <span className="px-8">+</span>
//             <span className="px-90">+</span>
//             <span className="px-8">+</span>
//             <span className="px-90">+</span>
//             <span className="px-8">+</span>
//           </div>
//         </div>

//         <div
//           ref={textContainerRef}
//           className="text-container md:w-[60%] flex justify-center gap-5 -mt-7"
//         >
//           <h4 className="text-3xl md:w-[40%] md:text-[2.5rem] leading-[2.75rem] font-regular text-[#ffffff]">
//             Creativity is the Foundation of what we do
//           </h4>
//           <p className="text-xl md:w-[60%] leading-[2.3rem] flex items-center mb-15">
//             Heyfynix is a digital production studio that brings your ideas to
//             life through visually captivating designs and interactive
//             experiences. With our talented team, we push boundaries by solving
//             complex problems, delivering tailored solutions that exceed
//             expectations and engage audiences.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InfiniteCreativity;

// ****88888888888888888888888888(************************************)

"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMdPlay } from "react-icons/io";
import { FaPause } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const InfiniteCreativity = () => {
  const sectionRef = useRef(null);
  const videoContainerRef = useRef(null);
  const textContainerRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const videoRef = useRef(null);
  const headingContainerRef = useRef(null);

  const boundaryRef = useRef(null);
  const beyondRef = useRef(null);

  const showreelTextRef = useRef(null);
  const playReelRef = useRef(null);
  const topPlusRef = useRef(null);
  const bottomPlusRef = useRef(null);
  const playButtonRef = useRef(null);

  const [isHovering, setIsHovering] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFullVideo, setIsFullVideo] = useState(false);
  const [isPlayingFullVideo, setIsPlayingFullVideo] = useState(false);

  const enterFullscreen = () => {};
  const exitFullscreen = () => {};

  useEffect(() => {
    const handleFullscreenChange = () => {};
  }, [isFullscreen]);

  const handlePlayClick = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (!isPlayingFullVideo) {
      setIsPlayingFullVideo(true);
      setIsFullVideo(true);
      video.loop = true;
      video.play();
    } else {
      setIsPlayingFullVideo(false);
      setIsFullVideo(false);
      video.currentTime = 0;
      video.loop = false;
      video.play();
    }
  };

  useEffect(() => {
    const videoWrapper = videoWrapperRef.current;
    const topPlus = topPlusRef.current;
    const bottomPlus = bottomPlusRef.current;

    gsap.set([topPlus, bottomPlus], { opacity: 0 });

    /* -------------------------------------------
       BEYOND & BOUNDARY — DROP FIRST, THEN SLIDE
    ------------------------------------------- */

    const tlHeading = gsap.timeline({
      scrollTrigger: {
        trigger: headingContainerRef.current,
        start: "top 85%",
        end: "top 50%",
        toggleActions: "restart none none reverse",
      },
    });

    tlHeading.fromTo(
      [beyondRef.current, boundaryRef.current],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power4.out" }
    );

    tlHeading.fromTo(
      boundaryRef.current,
      { x: -200 },
      { x: 0, duration: 0.8, ease: "expo.out" }
    );

    tlHeading.fromTo(
      beyondRef.current,
      { x: -200 },
      {
        x: 0,
        duration: 0.7,
        ease: "expo.out",
        delay: 0.1,
      }
    );

    /* -------------------------------------------
       INFINITE CREATIVITY — DROP FROM TOP (50px)
    ------------------------------------------- */

    gsap.fromTo(
      headingContainerRef.current.querySelector("h1:nth-child(2)"),
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headingContainerRef.current,
          start: "top 90%",
          end: "top 60%",
          toggleActions: "restart none none reverse",
        },
      }
    );

    gsap.set(videoWrapper, {
      width: "43vw",
      height: "50vh",
      scale: 0.9,
      transformOrigin: "bottom top",
      filter: "grayscale(100%) brightness(90%) contrast(150%)",
    });

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.to(showreelTextRef.current, {
      opacity: 0,
      duration: 0.6,
    })
      .to(
        headingContainerRef.current,
        { y: -300, opacity: 0, duration: 1.4 },
        0
      )
      .to(textContainerRef.current, { y: -280, opacity: 0, duration: 1.2 }, 0)
      .to(
        videoWrapper,
        {
          width: "90vw",
          height: "70vh",
          scale: 1,
          borderRadius: "1.5rem",
          boxShadow: "0 40px 80px rgba(0,0,0,0.7)",
          filter: "grayscale(0%) brightness(100%) contrast(110%)",
          duration: 2.8,
          ease: "power3.out",
        },
        0.7
      )
      .to(playReelRef.current, { opacity: 1, duration: 0.8 }, 1.4)
      .to([topPlus, bottomPlus], { opacity: 1, duration: 1 }, 1.8);

    ScrollTrigger.create({
      trigger: videoWrapper,
      start: "top 40%",
      end: "+=1",
      animation: tl,
      toggleActions: "play reverse play reverse",
      scrub: 2,
      immediateRender: false,
    });

    return () => ScrollTrigger.killAll();
  }, []);

  /* -------------------------------------------------------
     ✅ YOUR REQUESTED SCROLL ANIMATION FOR TEXT CONTAINER
  ------------------------------------------------------- */
  useEffect(() => {
    gsap.fromTo(
      textContainerRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: textContainerRef.current,
          start: "top 85%", // when fade-in starts
          end: "top 40%", // when fade-in ends
          scrub: true, // opacity changes based on scroll
        },
      }
    );
  }, []);

  useEffect(() => {
    const topPlus = topPlusRef.current;
    const bottomPlus = bottomPlusRef.current;
    const button = playButtonRef.current;
    const videoWrapper = videoWrapperRef.current;

    if (!topPlus || !bottomPlus || !button || !videoWrapper) return;

    let topCtx = null;
    let bottomCtx = null;

    const arrowSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="inline-block w-6 h-6 mb-1"><path d="M13 5l7 7-7 7M5 12h14"/></svg>`;

    const createMarquee = (container, isBottom = false) => {
      const text = `
        <span class="px-79 text-base">${arrowSVG}${arrowSVG}${arrowSVG} PLAY REEL</span>
        <span class="px-8 text-base">${arrowSVG}${arrowSVG}${arrowSVG} PLAY REEL</span>
        <span class="px-79 text-base">${arrowSVG}${arrowSVG}${arrowSVG} PLAY REEL</span>
        <span class="px-8 text-base">${arrowSVG}${arrowSVG}${arrowSVG} PLAY REEL</span>
        <span class="px-79 text-base">${arrowSVG}${arrowSVG}${arrowSVG} PLAY REEL</span>
        <span class="px-8 text-base">${arrowSVG}${arrowSVG}${arrowSVG} PLAY REEL</span>
      `.trim();

      container.innerHTML = `<div class="inline-block whitespace-nowrap">${text}${text}${text}</div>`;
      const wrapper = container.querySelector("div");

      const ctx = gsap.context(() => {
        gsap.fromTo(
          wrapper,
          { x: isBottom ? "-33.33%" : 0 },
          {
            x: isBottom ? "0%" : "-33.33%",
            duration: 14,
            ease: "none",
            repeat: -1,
          }
        );
      }, container);

      return ctx;
    };

    const handleMouseEnter = () => {
      const scale = gsap.getProperty(videoWrapper, "scale");
      if (scale < 1 || isFullscreen) return;

      setIsHovering(true);
      gsap.to([topPlus, bottomPlus], { opacity: 0, duration: 0.2 });

      topCtx = createMarquee(topPlus, false);
      bottomCtx = createMarquee(bottomPlus, true);

      gsap.to([topPlus, bottomPlus], { opacity: 1, duration: 0.4, delay: 0.2 });
    };

    const handleMouseLeave = () => {
      const scale = gsap.getProperty(videoWrapper, "scale");
      if (scale < 1 || isFullscreen) return;

      setIsHovering(false);
      if (topCtx) topCtx.revert();
      if (bottomCtx) bottomCtx.revert();

      const plusHTML = `
        <span class="px-8">+</span>
        <span class="px-90">+</span>
        <span class="px-8">+</span>
        <span class="px-90">+</span>
        <span class="px-8">+</span>
      `;
      topPlus.innerHTML = plusHTML;
      bottomPlus.innerHTML = plusHTML;

      gsap.to([topPlus, bottomPlus], { opacity: 1, duration: 0.3 });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      if (topCtx) topCtx.revert();
      if (bottomCtx) bottomCtx.revert();
    };
  }, [isFullscreen]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (!isFullVideo && video.currentTime >= 5) {
        video.currentTime = 0;
        video.play();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [isFullVideo]);

  return (
    <section
      ref={sectionRef}
      className="relative px-[4%] py-10 bg-transparent text-white overflow-hidden h-[130vh]"
    >
      <div ref={headingContainerRef} className="heading-container mb-20">
        <h1 className="text-7xl md:text-8xl font-medium ml-50">
          <span ref={beyondRef} className="inline-block">
            Beyond&nbsp;
          </span>
          <span ref={boundaryRef} className="inline-block mr-4">
            Boundary
          </span>
        </h1>
        <h1 className="text-4xl md:text-8xl font-medium mt-7">
          Infinite Creativity
        </h1>
      </div>

      <div className="main-container flex flex-col md:flex-row relative z-10">
        <div
          ref={videoContainerRef}
          className="video-container md:w-[50%] flex flex-col relative"
        >
          <div ref={topPlusRef} className="w-full flex text-3xl mb-3 opacity-0">
            <span className="px-8">+</span>
            <span className="px-90">+</span>
            <span className="px-8">+</span>
            <span className="px-90">+</span>
            <span className="px-8">+</span>
          </div>

          <div
            ref={videoWrapperRef}
            className="relative rounded-lg z-50 will-change-transform mx-auto"
          >
            <video
              ref={videoRef}
              src="https://cdn.pixabay.com/video/2025/07/27/293788_tiny.mp4"
              className="w-full h-full object-cover rounded-[30px] brightness-90 contrast-150"
              autoPlay
              muted
              playsInline
            />
            <p ref={showreelTextRef} className="text-base font-normal mb-25">
              Check Out our Showreel
            </p>

            <div
              ref={playReelRef}
              className="absolute inset-0 flex items-center justify-center text-white text-8xl font-medium opacity-0 z-[999] pointer-events-none"
            >
              {/* <div className="flex items-center gap-4">
                <span>PLAY</span>
                <button
                  ref={playButtonRef}
                  onClick={handlePlayClick}
                  className="pointer-events-auto relative overflow-hidden p-6 rounded-full group bg-white flex items-center justify-center"
                >
                  <span className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                  {isPlayingFullVideo ? (
                    <FaPause className="relative z-10 text-black group-hover:text-white text-4xl" />
                  ) : (
                    <IoMdPlay className="relative z-10 text-black group-hover:text-white text-4xl" />
                  )}
                </button>
                <span>REEL</span>
              </div> */}

              <div className="flex items-center gap-4 group">
                <span>PLAY</span>

                <button
                  ref={playButtonRef}
                  onClick={handlePlayClick}
                  className="pointer-events-auto relative overflow-hidden p-6 rounded-full bg-white flex items-center justify-center"
                >
                  <span className="absolute inset-0 bg-blue-500 z-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>

                  {isPlayingFullVideo ? (
                    <FaPause className="relative z-10 text-black group-hover:text-white text-4xl" />
                  ) : (
                    <IoMdPlay className="relative z-10 text-black group-hover:text-white text-4xl" />
                  )}
                </button>

                <span>REEL</span>
              </div>
            </div>
          </div>

          <div
            ref={bottomPlusRef}
            className="w-full flex text-3xl mb-3 opacity-0 text-white"
          >
            <span className="px-8">+</span>
            <span className="px-90">+</span>
            <span className="px-8">+</span>
            <span className="px-90">+</span>
            <span className="px-8">+</span>
          </div>
        </div>

        <div
          ref={textContainerRef}
          className="text-container md:w-[60%] flex justify-center gap-5 -mt-7"
        >
          <h4 className="text-2xl md:w-[40%] md:text-3xl leading-[2.75rem] font-regular text-[#ffffff]">
            Creativity is the Foundation of what we do
          </h4>
          <p className="text-xl md:w-[60%] leading-[2.3rem] flex items-center mb-15 text-justify">
            Heyfynix is a digital production studio that brings your ideas to
            life through visually captivating designs and interactive
            experiences. With our talented team, we push boundaries by solving
            complex problems, delivering tailored solutions that exceed
            expectations and engage audiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfiniteCreativity;
