// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const Process = () => {
//   const containerRef = useRef(null);
//   const sliderRef = useRef(null);
//   const isDragging = useRef(false);
//   const startX = useRef(0);
//   const currentX = useRef(0);
//   const lastX = useRef(0);
//   const speed = useRef(-2);
//   const animationActive = useRef(true);
//   const velocity = useRef(0);
//   const momentumTween = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const slider = sliderRef.current;
//     const container = containerRef.current;
//     const cards = slider.children;
//     const cardWidth = cards[0]?.offsetWidth || 0;
//     const gap = 40;
//     const totalCardWidth = cardWidth + gap;
//     const containerWidth = container.clientWidth;

//     const cardsNeeded = Math.ceil(containerWidth / totalCardWidth) + 2;
//     const originalCardCount = cards.length;
//     for (let i = 0; i < originalCardCount * cardsNeeded; i++) {
//       const clone = cards[i % originalCardCount].cloneNode(true);
//       slider.appendChild(clone);
//     }

//     gsap.set(slider, { x: -totalCardWidth });

//     const animate = () => {
//       if (!animationActive.current) return;

//       const currentXPos = gsap.getProperty(slider, "x");
//       let newX = currentXPos + speed.current;

//       if (newX <= -totalCardWidth * Math.ceil(cardsNeeded)) {
//         newX += totalCardWidth * Math.ceil(cardsNeeded);
//         for (let i = 0; i < Math.ceil(cardsNeeded); i++) {
//           slider.appendChild(slider.firstElementChild);
//         }
//         gsap.set(slider, { x: newX });
//       } else {
//         gsap.set(slider, { x: newX });
//       }
//     };

//     gsap.ticker.add(animate);

//     // ✅ Mouse event handlers
//     const handleMouseDown = (e) => {
//       isDragging.current = true;
//       startX.current = e.clientX;
//       velocity.current = 0;
//       lastX.current = e.clientX;
//       animationActive.current = false;
//       if (momentumTween.current) momentumTween.current.kill();
//     };

//     const handleMouseMove = (e) => {
//       if (!isDragging.current) return;
//       const clientX = e.clientX || e.touches?.[0]?.clientX;
//       const delta = clientX - startX.current;
//       const currentSliderX = gsap.getProperty(slider, "x");
//       gsap.set(slider, { x: currentSliderX + delta });

//       velocity.current = clientX - lastX.current;
//       lastX.current = clientX;

//       startX.current = clientX;
//     };

//     const handleMouseUp = () => {
//       if (!isDragging.current) return;
//       isDragging.current = false;

//       const currentVelocity = velocity.current;

//       if (momentumTween.current) momentumTween.current.kill();

//       momentumTween.current = gsap.to(slider, {
//         x: `+=${currentVelocity * 25}`,
//         duration: Math.min(Math.abs(currentVelocity) * 0.3, 1.2),
//         ease: "power3.out",
//         onComplete: () => {
//           animationActive.current = true;
//         },
//       });
//     };

//     // ✅ Add mouse event listeners
//     container.addEventListener("mousedown", handleMouseDown);
//     container.addEventListener("mousemove", handleMouseMove);
//     container.addEventListener("mouseup", handleMouseUp);
//     container.addEventListener("mouseleave", handleMouseUp);

//     // ✅ Touch support (for mobile)
//     container.addEventListener("touchstart", (e) => {
//       isDragging.current = true;
//       startX.current = e.touches[0].clientX;
//       velocity.current = 0;
//       lastX.current = e.touches[0].clientX;
//       animationActive.current = false;
//       if (momentumTween.current) momentumTween.current.kill();
//     });

//     container.addEventListener("touchmove", (e) => {
//       if (!isDragging.current) return;
//       const clientX = e.touches[0].clientX;
//       const delta = clientX - startX.current;
//       const currentSliderX = gsap.getProperty(slider, "x");
//       gsap.set(slider, { x: currentSliderX + delta });

//       velocity.current = clientX - lastX.current;
//       lastX.current = clientX;

//       startX.current = clientX;
//     });

//     container.addEventListener("touchend", () => {
//       if (!isDragging.current) return;
//       isDragging.current = false;

//       const currentVelocity = velocity.current;

//       if (momentumTween.current) momentumTween.current.kill();

//       momentumTween.current = gsap.to(slider, {
//         x: `+=${currentVelocity * 25}`,
//         duration: Math.min(Math.abs(currentVelocity) * 0.3, 1.2),
//         ease: "power3.out",
//         onComplete: () => {
//           animationActive.current = true;
//         },
//       });
//     });

//     return () => {
//       gsap.ticker.remove(animate);
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       container.removeEventListener("mousedown", handleMouseDown);
//       container.removeEventListener("mousemove", handleMouseMove);
//       container.removeEventListener("mouseup", handleMouseUp);
//       container.removeEventListener("mouseleave", handleMouseUp);
//     };
//   }, []);

//   const images = [
//     "/images/home/process-1.jpg",
//     "/images/home/process-2.jpg",
//     "/images/home/process-3.jpg",
//     "/images/home/process-4.jpg",
//     "/images/home/process-5.jpg",
//   ];

//   const points = [
//     {
//       heading: "Discover",
//       content:
//         "We start by chatting, what's your goal, who’s your audience, and what keeps you up at night?",
//     },
//     {
//       heading: "Ideate",
//       content:
//         "Then we brainstorm like crazy, throwing ideas around until we find the perfect fit for you.",
//     },
//     {
//       heading: "Create",
//       content:
//         "Time to roll up our sleeves and build it with creativity and care.",
//     },
//     {
//       heading: "Refine",
//       content: "We loop you in for feedback – your input makes it shine!",
//     },
//     {
//       heading: "Launch",
//       content: "Boom! We deliver, celebrate, and watch the magic unfold.",
//     },
//   ];

//   return (
//     <main className="w-full h-full bg-black">
//       <div className="text-white text-section flex items-center justify-between px-[4%] pt-16 pb-6">
//         <div className="left text-left max-w-lg">
//           <h1 className="text-9xl font-bold italic leading-[1] mb-0 pb-0">
//             PROCESS
//           </h1>
//           <h4 className="text-4xl font-normal whitespace-nowrap">
//             How We Work, It's All About You
//           </h4>
//         </div>

//         <div className="right max-w-lg">
//           <p className="text-3xl font-light">
//             Wondering how we turn your vision into something tangible? It's
//             simple, collaborative, and a ton of fun. Here's the scoop:
//           </p>
//         </div>
//       </div>

//       <section
//         className="horizontal-slider-container pl-[4%]"
//         ref={containerRef}
//       >
//         <div className="slider-wrapper">
//           <div className="slider" ref={sliderRef}>
//             {images.map((img, i) => (
//               <div className="image-wrapper" key={i}>
//                 <img src={img} alt={`Process ${i + 1}`} />
//                 <div className="image-text">
//                   <h3>Step {i + 1}</h3>
//                   <h2 className="image-heading italic">{points[i].heading}</h2>
//                   <p className="image-content">{points[i].content}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <style jsx>{`
//           .horizontal-slider-container {
//             position: relative;
//             background-color: black;
//             overflow: hidden;
//             // margin-top: -3rem;
//             cursor: grab;
//           }
//           .horizontal-slider-container:active {
//             cursor: grabbing;
//           }
//           .text-section {
//             min-height: 40vh;
//             background-color: black;
//             color: white;
//           }
//           .slider-wrapper {
//             overflow: hidden;
//             width: 100%;
//             height: 80vh;
//           }
//           .slider {
//             display: flex;
//             gap: 40px;
//             padding: 0 20px;
//             align-items: center;
//             height: 100%;
//             position: relative;
//             white-space: nowrap;
//           }
//           .image-wrapper {
//             flex: 0 0 auto;
//             width: 25vw;
//             height: 75%;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             position: relative;
//             overflow: hidden;
//             border: 2px solid transparent;
//             transition: border-color 0.3s ease;
//           }
//           .image-wrapper:hover {
//             border-color: #3b82f6;
//             box-shadow: 0 0 25px rgba(59, 130, 246, 0.8),
//               0 0 50px rgba(59, 130, 246, 0.5), 0 0 75px rgba(59, 130, 246, 0.3);
//           }
//           .image-wrapper img {
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//             opacity: 0.7;
//             transition: transform 0.5s ease;
//           }
//           .image-wrapper:hover img {
//             transform: scale(1.1);
//           }
//           .image-text {
//             position: absolute;
//             bottom: 20%;
//             left: 50%;
//             transform: translateX(-50%);
//             color: white;
//             text-align: center;
//             font-weight: 500;
//             padding: 1rem 1.2rem;
//             border-radius: 10px;
//             width: 85%;
//             overflow: hidden;
//             white-space: normal; /* ✅ allow text to wrap */
//             word-wrap: break-word; /* ✅ break long words if needed */
//           }
//           .image-heading {
//             font-size: 4.5rem;
//             font-weight: 700;
//           }

//           .image-content {
//             font-size: 1.2rem;
//             opacity: 0;
//             transform: translateY(15px);
//             transition: opacity 0.5s ease, transform 0.5s ease;
//             pointer-events: none;
//           }
//           .image-wrapper:hover .image-content {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         `}</style>
//       </section>
//     </main>
//   );
// };

// export default Process;

// ****************************************************

// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const Process = () => {
//   const containerRef = useRef(null);
//   const sliderRef = useRef(null);
//   const isDragging = useRef(false);
//   const startX = useRef(0);
//   const currentX = useRef(0);
//   const lastX = useRef(0);
//   const speed = useRef(-2);
//   const animationActive = useRef(true);
//   const velocity = useRef(0);
//   const momentumTween = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const slider = sliderRef.current;
//     const container = containerRef.current;
//     const cards = slider.children;
//     const cardWidth = cards[0]?.offsetWidth || 0;
//     const gap = 40;
//     const totalCardWidth = cardWidth + gap;
//     const containerWidth = container.clientWidth;

//     const cardsNeeded = Math.ceil(containerWidth / totalCardWidth) + 2;
//     const originalCardCount = cards.length;
//     for (let i = 0; i < originalCardCount * cardsNeeded; i++) {
//       const clone = cards[i % originalCardCount].cloneNode(true);
//       slider.appendChild(clone);
//     }

//     gsap.set(slider, { x: -totalCardWidth });

//     const animate = () => {
//       if (!animationActive.current) return;

//       const currentXPos = gsap.getProperty(slider, "x");
//       let newX = currentXPos + speed.current;

//       if (newX <= -totalCardWidth * Math.ceil(cardsNeeded)) {
//         newX += totalCardWidth * Math.ceil(cardsNeeded);
//         for (let i = 0; i < Math.ceil(cardsNeeded); i++) {
//           slider.appendChild(slider.firstElementChild);
//         }
//         gsap.set(slider, { x: newX });
//       } else {
//         gsap.set(slider, { x: newX });
//       }
//     };

//     gsap.ticker.add(animate);

//     const handleMouseDown = (e) => {
//       isDragging.current = true;
//       startX.current = e.clientX;
//       velocity.current = 0;
//       lastX.current = e.clientX;
//       animationActive.current = false;
//       if (momentumTween.current) momentumTween.current.kill();
//     };

//     const handleMouseMove = (e) => {
//       if (!isDragging.current) return;
//       const clientX = e.clientX || e.touches?.[0]?.clientX;
//       const delta = clientX - startX.current;
//       const currentSliderX = gsap.getProperty(slider, "x");
//       gsap.set(slider, { x: currentSliderX + delta });

//       velocity.current = clientX - lastX.current;
//       lastX.current = clientX;

//       startX.current = clientX;
//     };

//     const handleMouseUp = () => {
//       if (!isDragging.current) return;
//       isDragging.current = false;

//       const currentVelocity = velocity.current;

//       if (momentumTween.current) momentumTween.current.kill();

//       momentumTween.current = gsap.to(slider, {
//         x: `+=${currentVelocity * 25}`,
//         duration: Math.min(Math.abs(currentVelocity) * 0.3, 1.2),
//         ease: "power3.out",
//         onComplete: () => {
//           animationActive.current = true;
//         },
//       });
//     };

//     container.addEventListener("mousedown", handleMouseDown);
//     container.addEventListener("mousemove", handleMouseMove);
//     container.addEventListener("mouseup", handleMouseUp);
//     container.addEventListener("mouseleave", handleMouseUp);

//     container.addEventListener("touchstart", (e) => {
//       isDragging.current = true;
//       startX.current = e.touches[0].clientX;
//       velocity.current = 0;
//       lastX.current = e.touches[0].clientX;
//       animationActive.current = false;
//       if (momentumTween.current) momentumTween.current.kill();
//     });

//     container.addEventListener("touchmove", (e) => {
//       if (!isDragging.current) return;
//       const clientX = e.touches[0].clientX;
//       const delta = clientX - startX.current;
//       const currentSliderX = gsap.getProperty(slider, "x");
//       gsap.set(slider, { x: currentSliderX + delta });

//       velocity.current = clientX - lastX.current;
//       lastX.current = clientX;

//       startX.current = clientX;
//     });

//     container.addEventListener("touchend", () => {
//       if (!isDragging.current) return;
//       isDragging.current = false;

//       const currentVelocity = velocity.current;

//       if (momentumTween.current) momentumTween.current.kill();

//       momentumTween.current = gsap.to(slider, {
//         x: `+=${currentVelocity * 25}`,
//         duration: Math.min(Math.abs(currentVelocity) * 0.3, 1.2),
//         ease: "power3.out",
//         onComplete: () => {
//           animationActive.current = true;
//         },
//       });
//     });

//     return () => {
//       gsap.ticker.remove(animate);
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       container.removeEventListener("mousedown", handleMouseDown);
//       container.removeEventListener("mousemove", handleMouseMove);
//       container.removeEventListener("mouseup", handleMouseUp);
//       container.removeEventListener("mouseleave", handleMouseUp);
//     };
//   }, []);

//   const images = [
//     "/images/home/process-1.jpg",
//     "/images/home/process-2.jpg",
//     "/images/home/process-3.jpg",
//     "/images/home/process-4.jpg",
//     "/images/home/process-5.jpg",
//   ];

//   const points = [
//     {
//       heading: "Discover",
//       content:
//         "We start by chatting, what's your goal, who’s your audience, and what keeps you up at night?",
//     },
//     {
//       heading: "Ideate",
//       content:
//         "Then we brainstorm like crazy, throwing ideas around until we find the perfect fit for you.",
//     },
//     {
//       heading: "Create",
//       content:
//         "Time to roll up our sleeves and build it with creativity and care.",
//     },
//     {
//       heading: "Refine",
//       content: "We loop you in for feedback – your input makes it shine!",
//     },
//     {
//       heading: "Launch",
//       content: "Boom! We deliver, celebrate, and watch the magic unfold.",
//     },
//   ];

//   return (
//     <main className="w-full h-full bg-transparent">
//       <div className="text-white text-section flex items-center justify-between px-[4%] pt-16 pb-6">
//         <div className="left text-left max-w-lg">
//           <h1 className="text-9xl font-bold italic leading-[1] mb-0 pb-0">
//             PROCESS
//           </h1>
//           <h4 className="text-4xl font-normal whitespace-nowrap">
//             How We Work, It's All About You
//           </h4>
//         </div>

//         <div className="right max-w-lg">
//           <p className="text-3xl font-light">
//             Wondering how we turn your vision into something tangible? It's
//             simple, collaborative, and a ton of fun. Here's the scoop:
//           </p>
//         </div>
//       </div>

//       <section
//         className="horizontal-slider-container pl-[4%]"
//         ref={containerRef}
//       >
//         <div className="slider-wrapper">
//           <div className="slider" ref={sliderRef}>
//             {images.map((img, i) => (
//               <div className="image-wrapper" key={i}>
//                 <img src={img} alt={`Process ${i + 1}`} />
//                 <div className="image-text">
//                   <h3>Step {i + 1}</h3>
//                   <h2 className="image-heading italic">{points[i].heading}</h2>
//                   <p className="image-content">{points[i].content}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <style jsx>{`
//           .horizontal-slider-container {
//             position: relative;
//             background-color: transparent;
//             overflow: visible; /* ✅ Updated */
//             cursor: grab;
//           }
//           .horizontal-slider-container:active {
//             cursor: grabbing;
//           }

//           .text-section {
//             min-height: 40vh;
//             background-color: black;
//             color: white;
//           }

//           .slider-wrapper {
//             overflow: visible; /* ✅ Updated */
//             width: 100%;
//             height: 80vh;
//           }

//           .slider {
//             display: flex;
//             gap: 40px;
//             padding: 0 20px;
//             align-items: center;
//             height: 100%;
//             position: relative;
//             white-space: nowrap;
//           }

//           .image-wrapper {
//             flex: 0 0 auto;
//             width: 25vw;
//             height: 75%;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             position: relative;
//             overflow: hidden;
//             border: 2px solid transparent;
//             transition: border-color 0.3s ease;
//           }
//           .image-wrapper:hover {
//             border-color: #3b82f6;
//             box-shadow: 0 0 25px rgba(59, 130, 246, 0.8),
//               0 0 50px rgba(59, 130, 246, 0.5), 0 0 75px rgba(59, 130, 246, 0.3);
//           }

//           .image-wrapper img {
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//             opacity: 0.7;
//             transition: transform 0.5s ease;
//           }
//           .image-wrapper:hover img {
//             transform: scale(1.1);
//           }

//           .image-text {
//             position: absolute;
//             bottom: 20%;
//             left: 50%;
//             transform: translateX(-50%);
//             color: white;
//             text-align: center;
//             font-weight: 500;
//             padding: 1rem 1.2rem;
//             border-radius: 10px;
//             width: 85%;
//             white-space: normal;
//             word-wrap: break-word;
//           }

//           .image-heading {
//             font-size: 4.5rem;
//             font-weight: 700;
//           }

//           .image-content {
//             font-size: 1.2rem;
//             opacity: 0;
//             transform: translateY(15px);
//             transition: opacity 0.5s ease, transform 0.5s ease;
//             pointer-events: none;
//           }
//           .image-wrapper:hover .image-content {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         `}</style>
//       </section>
//     </main>
//   );
// };

// export default Process;

// ****************************************************************

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const expWrapRef = useRef(null);

  useEffect(() => {
    const expWrap = expWrapRef.current;

    const viewportW = window.innerWidth;
    const textW = expWrap.offsetWidth;

    const moveDistance = viewportW + textW;

    gsap.set(expWrap, { x: viewportW / 2 + textW / 2 });

    gsap.to(expWrap, {
      x: -(viewportW / 2 + textW / 2),
      ease: "none",
      scrollTrigger: {
        trigger: ".experience-section",
        start: "center center",
        end: "+=" + moveDistance,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="bg-transparent w-full h-full text-white">
      <div className="header-container flex justify-between items-center w-full h-[60vh] px-[4%]">
        <div className="left  w-[40%] h-full">
          <h1 className="text-9xl font-medium leading-[86%] ">
            How We Work, It's All About You
          </h1>
        </div>
        <div className="right  w-[30%] h-full">
          <p className="text-2xl font-normal leading-[164%] text-justify">
            Wondering how we turn your vision into something tangible? It's
            simple, collaborative, and a ton of fun. Here's the scoop:
          </p>
        </div>
      </div>
      <div className="experience-section w-full h-screen flex justify-center items-center overflow-hidden relative ">
        <div
          ref={expWrapRef}
          id="expWrap"
          className="exp-wrap whitespace-nowrap inline-block will-change-transform"
        >
          <div id="expText" className="flex gap-8">
            {/* CARD 1 */}
            <div
              className="w-[300px] h-[400px] rounded-[20px] overflow-hidden bg-cover bg-center flex items-center justify-center text-center p-5
"
              style={{
                backgroundImage: "url('/images/home/process-1.jpg')",
              }}
            >
              <div className="w-[90%] mx-auto max-h-[90%] flex flex-col  overflow-hidden leading-relaxed">
                <p className="text-2xl">Step 1</p>
                <h1 className="text-5xl font-medium italic pt-10 pb-5">
                  Discover
                </h1>
                <p className="text-base text-wrap">
                  We start by chatting, what's your goal, who’s your audience,
                  and what keeps you up at night?
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="w-[300px] h-[400px] rounded-[20px] overflow-hidden bg-cover bg-center flex items-center justify-center text-center p-5
"
              style={{
                backgroundImage: "url('/images/home/process-2.jpg')",
              }}
            >
              <div className="w-[90%] mx-auto max-h-[90%] flex flex-col  overflow-hidden leading-relaxed">
                <p className="text-2xl">Step 2</p>
                <h1 className="text-5xl font-medium italic pt-10 pb-5">
                  Ideate
                </h1>
                <p className="text-base text-wrap">
                  Then we brainstorm like crazy, throwing ideas around until we
                  find the perfect fit for you.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div
              className="w-[300px] h-[400px] rounded-[20px] overflow-hidden bg-cover bg-center flex items-center justify-center text-center p-5
"
              style={{
                backgroundImage: "url('/images/home/process-3.jpg')",
              }}
            >
              <div className="w-[90%] mx-auto max-h-[90%] flex flex-col  overflow-hidden leading-relaxed">
                <p className="text-2xl">Step 3</p>
                <h1 className="text-5xl font-medium italic pt-10 pb-5">
                  Create
                </h1>
                <p className="text-base text-wrap">
                  Time to roll up our sleeves and build it with creativity and
                  care.
                </p>
              </div>
            </div>

            {/* CARD 4 */}
            <div
              className="w-[300px] h-[400px] rounded-[20px] overflow-hidden bg-cover bg-center flex items-center justify-center text-center p-5
"
              style={{
                backgroundImage: "url('/images/home/process-4.jpg')",
              }}
            >
              <div className="w-[90%] mx-auto max-h-[90%] flex flex-col  overflow-hidden leading-relaxed">
                <p className="text-2xl">Step 4</p>
                <h1 className="text-5xl font-medium italic pt-10 pb-5">
                  Refine
                </h1>
                <p className="text-base text-wrap">
                  We loop you in for feedback - your input makes it shine!
                </p>
              </div>
            </div>

            {/* CARD 5 */}
            <div
              className="w-[300px] h-[400px] rounded-[20px] overflow-hidden bg-cover bg-center flex items-center justify-center text-center p-5
"
              style={{
                backgroundImage: "url('/images/home/process-5.jpg')",
              }}
            >
              <div className="w-[90%] mx-auto max-h-[90%] flex flex-col  overflow-hidden leading-relaxed">
                <p className="text-2xl">Step 5</p>
                <h1 className="text-5xl font-medium italic pt-10 pb-5">
                  Launch
                </h1>
                <p className="text-base text-wrap">
                  Boom! We deliver, celebrate, and watch the magic unfold.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
