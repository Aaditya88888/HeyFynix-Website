// "use client";
// import { useEffect, useState } from "react";

// const WhatWeDo = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   useEffect(() => {
//     const bgOverlay = document.getElementById("bgOverlay");
//     const cards = document.querySelectorAll(".group");

//     cards.forEach((card) => {
//       card.addEventListener("mouseenter", () => {
//         const hoverImage = card.getAttribute("data-image");
//         bgOverlay.style.backgroundImage = `url(${hoverImage})`;
//       });
//     });

//     return () => {
//       cards.forEach((card) => {
//         card.removeEventListener("mouseenter", () => {});
//       });
//     };
//   }, []);

//   const sections = [
//     {
//       title: "Branding",
//       desc: "Who are you when no one’s watching? That’s what we help you define.",
//       extra:
//         "We build unique brand identities that help people remember you. When your visuals and story stay consistent, you can increase your revenue by 23%.",
//       img: "https://images.pexels.com/photos/6606317/pexels-photo-6606317.jpeg",
//     },
//     {
//       title: "Filmmaking",
//       desc: "People forget ads. They remember stories.",
//       extra:
//         "A strong story builds a connection, and video is the best way to tell it. Our brand films and commercials boost awareness by 54%.",
//       img: "https://images.pexels.com/photos/11001143/pexels-photo-11001143.jpeg",
//     },
//     {
//       title: "Content Creation",
//       desc: "Scroll. Scroll. Skip. Stop. That “stop” moment? That’s us.",
//       extra:
//         "People scroll fast, we help stop the scroll with stunning visuals. Because brands with high-quality content with visuals get 650% more engagement than low quality ones.",
//       img: "https://images.pexels.com/photos/31293423/pexels-photo-31293423.jpeg",
//     },
//     {
//       title: "Marketing",
//       desc: "Marketing is not about being loud. It’s about being remembered.",
//       extra:
//         "We turn social pages into growing communities that drive real business. 78% of people are more likely to buy from brands they follow and feel connected to.",
//       img: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg",
//     },
//     {
//       title: "Web Design",
//       desc: "Your website isn’t just a link. It’s your first impression.",
//       extra:
//         "We create websites that don’t just exist, they work. They guide, convert, and tell your story with clarity and style. 88% of users leave if the experience is poor.",
//       img: "https://images.pexels.com/photos/1009949/pexels-photo-1009949.jpeg",
//     },
//     {
//       title: "Creative Consultancy",
//       desc: "Feeling stuck? Let’s talk about strategy.",
//       extra:
//         "Confused about how to position your brand? We help you find clarity. We believe clear positioning can help brands grow 2x faster.",
//       img: "https://images.pexels.com/photos/34188758/pexels-photo-34188758.jpeg",
//     },
//   ];

//   return (
//     <div className="font-poppins bg-black text-white overflow-x-hidden">
//       {/* Centered Heading Section */}
//       {/* Centered Heading Section */}
//       <div className="flex flex-col items-center justify-center text-center min-h-[60vh] px-6 relative z-20">
//         <h1 className="text-4xl md:text-5xl font-semibold mb-6 max-w-4xl">
//           Let's Dive In
//         </h1>
//         <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl leading-relaxed">
//           Your challenges are our playground. Here’s how we can team up to make
//           things happen (and we're pretty darn good at it).
//         </p>
//       </div>

//       {/* Cards Grid */}
//       <div
//         className="grid grid-cols-3 grid-rows-2 w-full min-h-screen relative z-10"
//         id="container"
//       >
//         {/* BG overlay */}
//         <div
//           id="bgOverlay"
//           className="absolute inset-0 bg-black bg-cover bg-center transition-all duration-500 z-0"
//         ></div>

//         {sections.map((section, idx) => (
//           <div
//             key={idx}
//             className="relative flex items-center justify-center overflow-hidden cursor-pointer border border-white/5 group z-10"
//             data-image={section.img}
//             onMouseEnter={() => setHoveredIndex(idx)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             {/* Gradient overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent transition-all duration-500 group-hover:from-[#001446]/80 group-hover:to-transparent"></div>

//             {/* Centered Text content container */}
//             <div
//               className={`absolute inset-0 flex flex-col items-center justify-center text-center p-10 z-10 transition-all duration-500 ease-out ${
//                 hoveredIndex === idx ? "-translate-y-6" : "translate-y-0"
//               }`}
//             >
//               <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-white transition-all duration-500">
//                 {section.title}
//               </h3>
//               <p className="text-lg md:text-xl leading-8 text-gray-300 max-w-[450px] mx-auto transition-all duration-500">
//                 {section.desc}
//               </p>

//               {/* Extra text on hover */}
//               <div
//                 className={`text-base md:text-lg leading-8 text-gray-400 max-w-[450px] mx-auto mt-4 transition-all duration-500 ease-out ${
//                   hoveredIndex === idx
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-5"
//                 }`}
//               >
//                 {section.extra}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WhatWeDo;

// *****************************************************************

// "use client";
// import { useEffect, useState, useRef } from "react";

// const WhatWeDo = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     // ==== STARS BACKGROUND ====
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let width = (canvas.width = window.innerWidth);
//     let height = (canvas.height = window.innerHeight);

//     const stars = Array.from({ length: 150 }, () => ({
//       x: Math.random() * width,
//       y: Math.random() * height,
//       r: Math.random() * 1.5,
//       alpha: Math.random(),
//       dAlpha: 0.02 + Math.random() * 0.02,
//     }));

//     function drawStars() {
//       ctx.clearRect(0, 0, width, height);
//       stars.forEach((s) => {
//         ctx.beginPath();
//         ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
//         ctx.fill();
//       });
//     }

//     function animateStars() {
//       stars.forEach((s) => {
//         s.alpha += s.dAlpha;
//         if (s.alpha <= 0 || s.alpha >= 1) s.dAlpha = -s.dAlpha;
//       });
//       drawStars();
//       requestAnimationFrame(animateStars);
//     }

//     animateStars();

//     // Resize handler
//     const handleResize = () => {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = window.innerHeight;
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   // ==== IMAGE HOVER LOGIC + DEFAULT IMAGE ====
//   useEffect(() => {
//     const bgOverlay = document.getElementById("bgOverlay");
//     const cards = document.querySelectorAll(".group");

//     // ⭐ DEFAULT BACKGROUND IMAGE (process-1)
//     bgOverlay.style.backgroundImage = `url(/images/home/process-1.jpg)`;

//     cards.forEach((card) => {
//       card.addEventListener("mouseenter", () => {
//         const hoverImage = card.getAttribute("data-image");
//         bgOverlay.style.backgroundImage = `url(${hoverImage})`;
//       });
//     });

//     return () => {
//       cards.forEach((card) => {
//         card.removeEventListener("mouseenter", () => {});
//       });
//     };
//   }, []);

//   const sections = [
//     {
//       title: "Branding",
//       desc: "Who are you when no one’s watching? That’s what we help you define.",
//       extra:
//         "We build unique brand identities that help people remember you. When your visuals and story stay consistent, you can increase your revenue by 23%.",
//       img: "/images/home/process-1.jpg",
//     },
//     {
//       title: "Filmmaking",
//       desc: "People forget ads. They remember stories.",
//       extra:
//         "A strong story builds a connection, and video is the best way to tell it. Our brand films and commercials boost awareness by 54%.",
//       img: "/images/home/process-2.jpg",
//     },
//     {
//       title: "Content Creation",
//       desc: "Scroll. Scroll. Skip. Stop. That “stop” moment? That’s us.",
//       extra:
//         "People scroll fast, we help stop the scroll with stunning visuals. Because brands with high-quality content with visuals get 650% more engagement than low quality ones.",
//       img: "/images/home/process-3.jpg",
//     },
//     {
//       title: "Marketing",
//       desc: "Marketing is not about being loud. It’s about being remembered.",
//       extra:
//         "We turn social pages into growing communities that drive real business. 78% of people are more likely to buy from brands they follow and feel connected to.",
//       img: "/images/home/process-4.jpg",
//     },
//     {
//       title: "Web Design",
//       desc: "Your website isn’t just a link. It’s your first impression.",
//       extra:
//         "We create websites that don’t just exist, they work. They guide, convert, and tell your story with clarity and style. 88% of users leave if the experience is poor.",
//       img: "/images/home/process-5.jpg",
//     },
//     {
//       title: "Creative Consultancy",
//       desc: "Feeling stuck? Let’s talk about strategy.",
//       extra:
//         "Confused about how to position your brand? We help you find clarity. We believe clear positioning can help brands grow 2x faster.",
//       img: "/images/home/process-1.jpg",
//     },
//   ];

//   return (
//     <div className="font-poppins bg-transparent text-white overflow-x-hidden relative">
//       {/* === STAR CANVAS BACKGROUND === */}
//       <canvas
//         ref={canvasRef}
//         className="absolute top-0 left-0 w-full h-full z-0"
//       />

//       {/* === CONTENT === */}
//       <div className="relative z-10 px-20">
//         {/* Centered Heading Section */}

//         <div className="flex h-[40vh]">
//           <div className="left w-[40%]  flex justify-start items-center pb-15">
//             <h1 className="text-8xl font-medium whitespace-nowrap ">
//               What We do
//             </h1>
//           </div>
//           <div className="center w-[30%]  text-2xl font-normal  flex justify-center items-end">
//             <p className="pb-10">
//               Your challenges are our playground. Here’s how we can team up to
//               make things happen
//             </p>
//           </div>

//           <div className="right w-[30%] flex flex-col justify-between items-end pb-3 ">
//             <img
//               src="https://cdn.pixabay.com/photo/2019/07/03/12/14/saturn-4314403_1280.png"
//               alt=""
//               className="w-[320px] h-[150px] object-cover"
//             />
//             <p className="text-xl">(and we're pretty darn good at it)</p>
//           </div>
//         </div>

//         {/* Cards Grid */}
//         <div
//           className="grid grid-cols-3 grid-rows-2 w-full h-[70vh] relative z-10"
//           id="container"
//         >
//           {/* BG overlay */}
//           <div
//             id="bgOverlay"
//             className="absolute inset-0 bg-black bg-cover bg-center transition-all duration-500 z-0"
//           ></div>

//           {sections.map((section, idx) => (
//             <div
//               key={idx}
//               className="relative flex items-center justify-center overflow-hidden cursor-pointer border border-white/5 group z-10"
//               data-image={section.img}
//               onMouseEnter={() => setHoveredIndex(idx)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               {/* Gradient overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent transition-all duration-500 group-hover:from-[#001446]/80 group-hover:to-transparent"></div>

//               {/* Text content */}
//               <div
//                 className={`absolute inset-0 flex flex-col items-center justify-center text-center p-10 z-10 transition-all duration-500 ease-out ${
//                   hoveredIndex === idx ? "-translate-y-6" : "translate-y-0"
//                 }`}
//               >
//                 <h3 className="text-3xl md:text-3xl font-semibold mb-2 text-white transition-all duration-500">
//                   {section.title}
//                 </h3>
//                 <p className="text-lg md:text-xl  text-gray-300 max-w-[450px] mx-auto transition-all duration-500">
//                   {section.desc}
//                 </p>

//                 <div
//                   className={`text-base md:text-lg text-gray-400 max-w-[450px] mx-auto mt-4 transition-all duration-500 ease-out ${
//                     hoveredIndex === idx
//                       ? "opacity-100 translate-y-0"
//                       : "opacity-0 translate-y-5"
//                   }`}
//                 >
//                   {section.extra}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhatWeDo;

// ************************************************************************************

// "use client";
// import { useEffect, useState, useRef } from "react";

// const WhatWeDo = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     // ==== STARS BACKGROUND ====
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let width = (canvas.width = window.innerWidth);
//     let height = (canvas.height = window.innerHeight);

//     const stars = Array.from({ length: 150 }, () => ({
//       x: Math.random() * width,
//       y: Math.random() * height,
//       r: Math.random() * 1.5,
//       alpha: Math.random(),
//       dAlpha: 0.02 + Math.random() * 0.02,
//     }));

//     function drawStars() {
//       ctx.clearRect(0, 0, width, height);
//       stars.forEach((s) => {
//         ctx.beginPath();
//         ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
//         ctx.fill();
//       });
//     }

//     function animateStars() {
//       stars.forEach((s) => {
//         s.alpha += s.dAlpha;
//         if (s.alpha <= 0 || s.alpha >= 1) s.dAlpha = -s.dAlpha;
//       });
//       drawStars();
//       requestAnimationFrame(animateStars);
//     }

//     animateStars();

//     // Resize handler
//     const handleResize = () => {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = window.innerHeight;
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   // ==== IMAGE HOVER LOGIC + DEFAULT IMAGE ====
//   useEffect(() => {
//     const bgOverlay = document.getElementById("bgOverlay");
//     const cards = document.querySelectorAll(".group");

//     // ⭐ DEFAULT BACKGROUND IMAGE (process-1)
//     bgOverlay.style.backgroundImage = `url(/images/home/process-1.jpg)`;

//     cards.forEach((card) => {
//       card.addEventListener("mouseenter", () => {
//         const hoverImage = card.getAttribute("data-image");
//         bgOverlay.style.backgroundImage = `url(${hoverImage})`;
//       });
//     });

//     return () => {
//       cards.forEach((card) => {
//         card.removeEventListener("mouseenter", () => {});
//       });
//     };
//   }, []);

//   const sections = [
//     {
//       title: "Branding",
//       desc: "Who are you when no one’s watching? That’s what we help you define.",
//       extra:
//         "We build unique brand identities that help people remember you. When your visuals and story stay consistent, you can increase your revenue by 23%.",
//       img: "/images/home/process-1.jpg",
//     },
//     {
//       title: "Filmmaking",
//       desc: "People forget ads. They remember stories.",
//       extra:
//         "A strong story builds a connection, and video is the best way to tell it. Our brand films and commercials boost awareness by 54%.",
//       img: "/images/home/process-2.jpg",
//     },
//     {
//       title: "Content Creation",
//       desc: "Scroll. Scroll. Skip. Stop. That “stop” moment? That’s us.",
//       extra:
//         "People scroll fast, we help stop the scroll with stunning visuals. Because brands with high-quality content with visuals get 650% more engagement than low quality ones.",
//       img: "/images/home/process-3.jpg",
//     },
//     {
//       title: "Marketing",
//       desc: "Marketing is not about being loud. It’s about being remembered.",
//       extra:
//         "We turn social pages into growing communities that drive real business. 78% of people are more likely to buy from brands they follow and feel connected to.",
//       img: "/images/home/process-4.jpg",
//     },
//     {
//       title: "Web Design",
//       desc: "Your website isn’t just a link. It’s your first impression.",
//       extra:
//         "We create websites that don’t just exist, they work. They guide, convert, and tell your story with clarity and style. 88% of users leave if the experience is poor.",
//       img: "/images/home/process-5.jpg",
//     },
//     {
//       title: "Creative Consultancy",
//       desc: "Feeling stuck? Let’s talk about strategy.",
//       extra:
//         "Confused about how to position your brand? We help you find clarity. We believe clear positioning can help brands grow 2x faster.",
//       img: "/images/home/process-1.jpg",
//     },
//   ];

//   return (
//     <div className="font-poppins bg-transparent text-white overflow-x-hidden relative">
//       {/* === STAR CANVAS BACKGROUND === */}
//       <canvas
//         ref={canvasRef}
//         className="absolute top-0 left-0 w-full h-full z-0"
//       />

//       {/* === CONTENT === */}
//       <div className="relative z-10 px-20">
//         {/* Centered Heading Section */}

//         {/* <div className="flex items-center justify-center text-center min-h-[60vh]  relative z-20">
//           <div className="left w-1/2  h-full text-left">
//             <div className="w-fit">
//               <h1 className="text-9xl font-medium">What We do</h1>
//               <p className="text-2xl font-medium text-right">
//                 (and we're pretty darn good at it)
//               </p>
//             </div>
//           </div>

//           <div className="right w-1/2  flex flex-col items-end text-right gap-20">
//             <img
//               src="https://images.pexels.com/photos/596134/pexels-photo-596134.jpeg"
//               alt=""
//               className="w-[445px] h-[230px] object-cover"
//             />
//             <p className="text-2xl font-normal text-left">
//               Your challenges are our playground. Here’s how we can team up to
//               make things happen
//             </p>
//           </div>
//         </div> */}

//         <div className="flex h-[50vh]">
//           <div className="left w-[40%]  flex justify-start items-center pb-15">
//             <h1 className="text-8xl font-medium whitespace-nowrap ">
//               What We do
//             </h1>
//           </div>
//           <div className="center w-[30%] text-2xl font-normal  flex justify-center items-end">
//             <p className="pb-10">
//               Your challenges are our playground. Here’s how we can team up to
//               make things happen
//             </p>
//           </div>

//           <div className="right w-[30%] h-[50vh] leading-[123%] flex flex-col justify-between items-end">
//             <img
//               src="/images/home/whatwedo-astro.png"
//               alt=""
//               className="w-[20rem] h-[20rem] object-contain"
//             />
//             <p className="text-xl">(and we're pretty darn good at it)</p>
//           </div>
//         </div>

//         {/* Cards Grid */}
//         <div
//           className="grid grid-cols-3 grid-rows-2 w-full h-[70vh] relative z-10"
//           id="container"
//         >
//           {/* BG overlay */}
//           <div
//             id="bgOverlay"
//             className="absolute inset-0 bg-black bg-cover bg-center transition-all duration-500 z-0"
//           ></div>

//           {sections.map((section, idx) => (
//             <div
//               key={idx}
//               className="relative flex items-center justify-center overflow-hidden cursor-pointer border border-white/5 group z-10"
//               data-image={section.img}
//               onMouseEnter={() => setHoveredIndex(idx)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               {/* Gradient overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent transition-all duration-500 group-hover:from-[#001446]/80 group-hover:to-transparent"></div>

//               {/* Text content */}
//               <div
//                 className={`absolute inset-0 flex flex-col items-center justify-center text-center p-10 z-10 transition-all duration-500 ease-out ${
//                   hoveredIndex === idx ? "-translate-y-6" : "translate-y-0"
//                 }`}
//               >
//                 <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-white transition-all duration-500">
//                   {section.title}
//                 </h3>
//                 <p className="text-lg md:text-xl leading-8 text-gray-300 max-w-[450px] mx-auto transition-all duration-500">
//                   {section.desc}
//                 </p>

//                 <div
//                   className={`text-base md:text-lg leading-8 text-gray-400 max-w-[450px] mx-auto mt-4 transition-all duration-500 ease-out ${
//                     hoveredIndex === idx
//                       ? "opacity-100 translate-y-0"
//                       : "opacity-0 translate-y-5"
//                   }`}
//                 >
//                   {section.extra}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhatWeDo;

// ****************************************************************************

// "use client";
// import { useEffect, useState, useRef } from "react";

// const WhatWeDo = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   // ==== IMAGE HOVER LOGIC + DEFAULT IMAGE ====
//   useEffect(() => {
//     const bgOverlay = document.getElementById("bgOverlay");
//     const cards = document.querySelectorAll(".group");

//     // ⭐ DEFAULT BACKGROUND IMAGE (process-1)
//     bgOverlay.style.backgroundImage = `url(/images/home/process-1.jpg)`;

//     cards.forEach((card) => {
//       card.addEventListener("mouseenter", () => {
//         const hoverImage = card.getAttribute("data-image");
//         bgOverlay.style.backgroundImage = `url(${hoverImage})`;
//       });
//     });

//     return () => {
//       cards.forEach((card) => {
//         card.removeEventListener("mouseenter", () => {});
//       });
//     };
//   }, []);

//   const sections = [
//     {
//       title: "Branding",
//       desc: "Who are you when no one’s watching? That’s what we help you define.",
//       extra:
//         "We build unique brand identities that help people remember you. When your visuals and story stay consistent, you can increase your revenue by 23%.",
//       img: "/images/home/process-1.jpg",
//     },
//     {
//       title: "Filmmaking",
//       desc: "People forget ads. They remember stories.",
//       extra:
//         "A strong story builds a connection, and video is the best way to tell it. Our brand films and commercials boost awareness by 54%.",
//       img: "/images/home/process-2.jpg",
//     },
//     {
//       title: "Content Creation",
//       desc: "Scroll. Scroll. Skip. Stop. That “stop” moment? That’s us.",
//       extra:
//         "People scroll fast, we help stop the scroll with stunning visuals. Because brands with high-quality content with visuals get 650% more engagement than low quality ones.",
//       img: "/images/home/process-3.jpg",
//     },
//     {
//       title: "Marketing",
//       desc: "Marketing is not about being loud. It’s about being remembered.",
//       extra:
//         "We turn social pages into growing communities that drive real business. 78% of people are more likely to buy from brands they follow and feel connected to.",
//       img: "/images/home/process-4.jpg",
//     },
//     {
//       title: "Web Design",
//       desc: "Your website isn’t just a link. It’s your first impression.",
//       extra:
//         "We create websites that don’t just exist, they work. They guide, convert, and tell your story with clarity and style. 88% of users leave if the experience is poor.",
//       img: "/images/home/process-5.jpg",
//     },
//     {
//       title: "Creative Consultancy",
//       desc: "Feeling stuck? Let’s talk about strategy.",
//       extra:
//         "Confused about how to position your brand? We help you find clarity. We believe clear positioning can help brands grow 2x faster.",
//       img: "/images/home/process-1.jpg",
//     },
//   ];

//   return (
//     <div className=" bg-transparent text-white overflow-x-hidden relative mt-30">
//       {/* === CONTENT === */}
//       <div className="relative z-10 px-20">
//         {/* Centered Heading Section */}
//         <div className="flex h-[50vh]">
//           <div className="left w-[45%]  flex justify-start items-center pb-15 ">
//             <h1 className="text-9xl font-medium whitespace-nowrap ">
//               What We do
//             </h1>
//           </div>
//           <div className="center w-[30%] text-2xl font-normal  flex justify-center items-end ">
//             <p className="tracking-[5%] leading-[123%%] pb-15 text-justify">
//               Your challenges are our playground. Here’s how we can team up to
//               make things happen
//             </p>
//           </div>

//           <div className="right w-[25%] h-[50vh] leading-[123%] flex flex-col justify-between items-end ">
//             <img
//               src="/images/home/whatwedo-astro.png"
//               alt=""
//               className="w-[20rem] h-[20rem] object-contain pb-12 "
//             />

//             <p className="text-xl pb-3">(and we're pretty darn good at it)</p>
//           </div>
//         </div>

//         {/* Cards Grid */}
//         <div
//           className="grid grid-cols-3 grid-rows-2 w-full h-[70vh] relative z-10"
//           id="container"
//         >
//           {/* BG overlay */}
//           <div
//             id="bgOverlay"
//             className="absolute inset-0 bg-black bg-cover bg-center transition-all duration-500 z-0"
//           ></div>

//           {sections.map((section, idx) => (
//             <div
//               key={idx}
//               className="relative flex items-center justify-center overflow-hidden cursor-pointer border border-white/5 group z-10"
//               data-image={section.img}
//               onMouseEnter={() => setHoveredIndex(idx)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               {/* Gradient overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent transition-all duration-500 group-hover:from-[#001446]/80 group-hover:to-transparent"></div>

//               {/* Text content */}
//               <div
//                 className={`absolute inset-0 flex flex-col items-center justify-center text-center p-10 z-10 transition-all duration-500 ease-out ${
//                   hoveredIndex === idx ? "-translate-y-6" : "translate-y-0"
//                 }`}
//               >
//                 <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-white transition-all duration-500">
//                   {section.title}
//                 </h3>
//                 <p className="text-lg md:text-xl leading-8 text-gray-300 max-w-[450px] mx-auto transition-all duration-500">
//                   {section.desc}
//                 </p>

//                 <div
//                   className={`text-base md:text-lg leading-8 text-gray-400 max-w-[450px] mx-auto mt-4 transition-all duration-500 ease-out ${
//                     hoveredIndex === idx
//                       ? "opacity-100 translate-y-0"
//                       : "opacity-0 translate-y-5"
//                   }`}
//                 >
//                   {section.extra}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhatWeDo;

// ***********************************************************

"use client";
import { useEffect, useState, useRef } from "react";

const WhatWeDo = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // ==== IMAGE HOVER LOGIC + DEFAULT IMAGE ====
  useEffect(() => {
    const bgOverlay = document.getElementById("bgOverlay");
    const cards = document.querySelectorAll(".group");

    // ⭐ DEFAULT BACKGROUND IMAGE (process-1)
    bgOverlay.style.backgroundImage = `url(/images/home/process-1.jpg)`;

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        const hoverImage = card.getAttribute("data-image");
        bgOverlay.style.backgroundImage = `url(${hoverImage})`;
      });
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", () => {});
      });
    };
  }, []);

  const sections = [
    {
      title: "Branding",
      desc: "Who are you when no one’s watching? That’s what we help you define.",
      extra:
        "We build unique brand identities that help people remember you. When your visuals and story stay consistent, you can increase your revenue by 23%.",
      img: "/images/home/process-1.jpg",
    },
    {
      title: "Filmmaking",
      desc: "People forget ads. They remember stories.",
      extra:
        "A strong story builds a connection, and video is the best way to tell it. Our brand films and commercials boost awareness by 54%.",
      img: "/images/home/process-2.jpg",
    },
    {
      title: "Content Creation",
      desc: "Scroll. Scroll. Skip. Stop. That “stop” moment? That’s us.",
      extra:
        "People scroll fast, we help stop the scroll with stunning visuals. Because brands with high-quality content with visuals get 650% more engagement than low quality ones.",
      img: "/images/home/process-3.jpg",
    },
    {
      title: "Marketing",
      desc: "Marketing is not about being loud. It’s about being remembered.",
      extra:
        "We turn social pages into growing communities that drive real business. 78% of people are more likely to buy from brands they follow and feel connected to.",
      img: "/images/home/process-4.jpg",
    },
    {
      title: "Web Design",
      desc: "Your website isn’t just a link. It’s your first impression.",
      extra:
        "We create websites that don’t just exist, they work. They guide, convert, and tell your story with clarity and style. 88% of users leave if the experience is poor.",
      img: "/images/home/process-5.jpg",
    },
    {
      title: "Creative Consultancy",
      desc: "Feeling stuck? Let’s talk about strategy.",
      extra:
        "Confused about how to position your brand? We help you find clarity. We believe clear positioning can help brands grow 2x faster.",
      img: "/images/home/process-1.jpg",
    },
  ];

  return (
    <div className=" bg-transparent text-white overflow-x-hidden relative mt-30">
      {/* === CONTENT === */}
      <div className="relative z-10 px-20">
        {/* Centered Heading Section */}
        <div className="flex h-[50vh]">
          <div className="left w-[45%]  flex justify-start items-center pb-15 ">
            <h1 className="text-9xl max-[1440px]:text-8xl max-[1160px]:text-7xl max-[1056px]:text-6xl max-[864px]:text-5xl font-medium whitespace-nowrap ">
              What We do
            </h1>
          </div>
          <div className="center w-[30%] text-2xl max-[1440px]:text-xl max-[1152px]:text-lg max-[1008px]:text-base max-[944px]:text-sm max-[864px]:text-xs font-normal  flex justify-center items-end ">
            <p className="tracking-[5%] leading-[123%] pb-15 text-justify">
              Your challenges are our playground. Here's how we can team up to
              make things happen
            </p>
          </div>

          <div className="right w-[25%] h-[50vh] leading-[123%] flex flex-col justify-between items-end ">
            <img
              src="/images/home/whatwedo-astro.png"
              alt=""
              className="w-[20rem] h-[20rem] max-[1152px]:w-[18rem] max-[1152px]:h-[18rem] max-[1040px]:w-[16rem] max-[1040px]:h-[16rem] max-[944px]:w-[14rem] max-[944px]:h-[14rem] object-contain pb-12 "
            />

            <p className="text-xl max-[1440px]:text-lg max-[1285px]:text-base max-[1160px]:text-xs max-[912px]:text-[10px] pb-3">
              (and we're pretty darn good at it)
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-3 grid-rows-2 w-full h-[70vh] relative z-10"
          id="container"
        >
          {/* BG overlay */}
          <div
            id="bgOverlay"
            className="absolute inset-0 bg-black bg-cover bg-center transition-all duration-500 z-0"
          ></div>

          {sections.map((section, idx) => (
            <div
              key={idx}
              className="relative flex items-center justify-center overflow-hidden cursor-pointer border border-white/5 group z-10"
              data-image={section.img}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent transition-all duration-500 group-hover:from-[#001446]/80 group-hover:to-transparent"></div>

              {/* Text content */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center text-center p-10 z-10 transition-all duration-500 ease-out ${
                  hoveredIndex === idx ? "-translate-y-6" : "translate-y-0"
                }`}
              >
                <h3 className="max-[1920px]:text-4xl max-[1760px]:text-3xl max-[1440px]:text-2xl max-[1120px]:text-xl max-[768px]:text-lg font-semibold mb-4 text-white transition-all duration-500">
                  {section.title}
                </h3>
                <p className="max-[1920px]:text-xl max-[1760px]:text-lg max-[1440px]:text-base max-[1120px]:text-sm max-[768px]:text-xs leading-8 text-gray-300 max-w-[450px] mx-auto transition-all duration-500">
                  {section.desc}
                </p>

                <div
                  className={`max-[1920px]:text-lg max-[1760px]:text-base max-[1440px]:text-sm max-[1120px]:text-xs max-[768px]:text-[10px] leading-8 text-gray-400 max-w-[450px] mx-auto mt-4 transition-all duration-500 ease-out ${
                    hoveredIndex === idx
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                >
                  {section.extra}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
