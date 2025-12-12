// "use client";
// import React from "react";

// const Footer = () => {
//   return (
//     <div className="w-full h-full px-[4%] text-[#ffffff]">
//       <div className="flex w-full h-[70vh]">
//         {/* LEFT SECTION */}
//         <div className="w-[15%]  flex flex-col justify-center items-center py-5 text-xl">
//           <a
//             href="https://instagram.com/fake"
//             target="_blank"
//             className="hover:underline leading-[200%]"
//           >
//             Instagram
//           </a>
//           <a
//             href="https://linkedin.com/fake"
//             target="_blank"
//             className="hover:underline leading-[200%]"
//           >
//             LinkedIn
//           </a>
//           <a
//             href="https://twitter.com/fake"
//             target="_blank"
//             className="hover:underline leading-[200%]"
//           >
//             Twitter
//           </a>
//           <a
//             href="mailto:fake@gmail.com"
//             className="hover:underline leading-[200%]"
//           >
//             Email
//           </a>
//         </div>

//         <div
//           className="center w-[70%] bg-center bg-contain bg-no-repeat flex justify-center items-center"
//           style={{ backgroundImage: "url('/images/home/astro.png')" }}
//         >
//           <div className="flex flex-col items-center gap-4">
//             <p className="text-3xl font-normal text-center leading-[200%]">
//               Are your Big Ideas Ready to go Wild?
//             </p>

//             <h1 className="text-8xl font-semibold text-center underline">
//               Let's Work <hr /> Together
//             </h1>
//             <p className="text-xl font-normal text-center leading-[200%]">
//               New Business: hey@heyfynix.com
//             </p>
//             <button className="text-6xl font-bold w-[40rem] h-[4.5rem] bg-white text-black rounded-[60px]">
//               Continue to Scroll
//             </button>
//           </div>
//         </div>

//         <div className="w-[15%] flex flex-col justify-center items-center py-5 text-xl">
//           <a href="#about" className="hover:underline leading-[200%]">
//             About
//           </a>
//           <a href="#work" className="hover:underline leading-[200%]">
//             Work
//           </a>
//           <a href="#services" className="hover:underline leading-[200%]">
//             Services
//           </a>
//           <a href="#career" className="hover:underline leading-[200%]">
//             Career
//           </a>
//           <a href="#contact" className="hover:underline leading-[200%]">
//             Contact
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

// ***********************************************************************

// "use client";
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useRouter } from "next/navigation";

// gsap.registerPlugin(ScrollTrigger);

// const Footer = () => {
//   const footerRef = useRef(null);
//   const router = useRouter();

//   useEffect(() => {
//     const footer = footerRef.current;

//     ScrollTrigger.create({
//       trigger: footer,
//       start: "bottom bottom", // when footer bottom touches viewport bottom
//       onEnter: () => {
//         router.push("/work"); // navigate to /work
//       },
//     });

//     return () => {
//       ScrollTrigger.killAll(); // cleanup
//     };
//   }, [router]);

//   return (
//     <div ref={footerRef} className="w-full h-full px-[4%] text-[#ffffff]">
//       <div className="flex w-full h-[70vh]">
//         {/* LEFT SECTION */}
//         <div className="w-[15%] flex flex-col justify-center items-center py-5 text-xl">
//           <a
//             href="https://instagram.com/fake"
//             target="_blank"
//             className="hover:underline leading-[200%]"
//           >
//             Instagram
//           </a>
//           <a
//             href="https://linkedin.com/fake"
//             target="_blank"
//             className="hover:underline leading-[200%]"
//           >
//             LinkedIn
//           </a>
//           <a
//             href="https://twitter.com/fake"
//             target="_blank"
//             className="hover:underline leading-[200%]"
//           >
//             Twitter
//           </a>
//           <a
//             href="mailto:fake@gmail.com"
//             className="hover:underline leading-[200%]"
//           >
//             Email
//           </a>
//         </div>

//         {/* CENTER */}
//         <div
//           className="center w-[70%] bg-center bg-contain bg-no-repeat flex justify-center items-center"
//           style={{ backgroundImage: "url('/images/home/astro.png')" }}
//         >
//           <div className="flex flex-col items-center gap-4">
//             <p className="text-3xl font-normal text-center leading-[200%]">
//               Are your Big Ideas Ready to go Wild?
//             </p>

//             <h1 className="text-8xl font-semibold text-center underline">
//               Let's Work <br /> Together
//             </h1>
//             <p className="text-xl font-normal text-center leading-[200%]">
//               New Business: hey@heyfynix.com
//             </p>
//             <button className="text-6xl font-bold w-[40rem] h-[4.5rem] bg-white text-black rounded-[60px]">
//               Continue to Scroll
//             </button>
//           </div>
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="w-[15%] flex flex-col justify-center items-center py-5 text-xl">
//           <a href="#about" className="hover:underline leading-[200%]">
//             About
//           </a>
//           <a href="#work" className="hover:underline leading-[200%]">
//             Work
//           </a>
//           <a href="#services" className="hover:underline leading-[200%]">
//             Services
//           </a>
//           <a href="#career" className="hover:underline leading-[200%]">
//             Career
//           </a>
//           <a href="#contact" className="hover:underline leading-[200%]">
//             Contact
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

// *******************************************************************************************

// "use client";
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useRouter } from "next/navigation";

// gsap.registerPlugin(ScrollTrigger);

// const Footer = () => {
//   const footerRef = useRef(null);
//   const router = useRouter();

//   useEffect(() => {
//     const footer = footerRef.current;

//     ScrollTrigger.create({
//       trigger: footer,
//       start: "bottom bottom", // when footer bottom touches viewport bottom
//       onEnter: () => {
//         router.push("/work"); // navigate to /work
//       },
//     });

//     return () => {
//       ScrollTrigger.killAll(); // cleanup
//     };
//   }, [router]);

//   return (
//     <div ref={footerRef} className="w-full h-full px-[4%] text-[#ffffff]">
//       <div className="flex w-full h-[70vh]">
//         {/* LEFT SECTION */}
//         <div className="w-[15%] flex flex-col justify-center items-start py-5 text-xl">
//           <a
//             href="https://instagram.com/fake"
//             target="_blank"
//             className="hover:underline leading-[200%]"
//           >
//             Instagram
//           </a>
//           <a
//             href="https://linkedin.com/fake"
//             target="_blank"
//             className="hover:underline leading-[200%]"
//           >
//             LinkedIn
//           </a>
//           <a
//             href="https://twitter.com/fake"
//             target="_blank"
//             className="hover:underline leading-[200%]"
//           >
//             Twitter
//           </a>
//           <a
//             href="mailto:fake@gmail.com"
//             className="hover:underline leading-[200%]"
//           >
//             Email
//           </a>
//         </div>

//         {/* CENTER */}
//         <div
//           className="center w-[70%] bg-center bg-contain bg-no-repeat flex justify-center items-center"
//           style={{ backgroundImage: "url('/images/home/astro.png')" }}
//         >
//           <div className="flex flex-col items-center gap-4">
//             <p className="text-3xl font-normal text-center leading-[200%]">
//               Are your Big Ideas Ready to go Wild?
//             </p>

//             <h1 className="text-8xl font-semibold text-center underline">
//               Let's Work <br /> Together
//             </h1>
//             <p className="text-xl font-normal text-center leading-[200%]">
//               New Business: hey@heyfynix.com
//             </p>
//             <button className="text-5xl font-bold w-[32rem] h-[4.5rem] bg-white text-black rounded-[3.75rem]">
//               Continue to Scroll
//             </button>
//           </div>
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="w-[15%] flex flex-col justify-center items-end py-5 text-xl">
//           <a href="#about" className="hover:underline leading-[200%]">
//             About
//           </a>
//           <a href="#work" className="hover:underline leading-[200%]">
//             Work
//           </a>
//           <a href="#services" className="hover:underline leading-[200%]">
//             Services
//           </a>
//           <a href="#career" className="hover:underline leading-[200%]">
//             Career
//           </a>
//           <a href="#contact" className="hover:underline leading-[200%]">
//             Contact
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

// ***************************************************************************

// "use client";
// import React from "react";

// const Footer = () => {
//   return (
//     <div className="w-full h-full px-[4%] text-[#ffffff]">
//       <div className="flex w-full h-[70vh]">
//         {/* LEFT SECTION */}
//         <div className="w-[15%] flex flex-col justify-center items-start py-5 text-xl">
//           <a
//             href="https://instagram.com/fake"
//             target="_blank"
//             className="hover:underline leading-[200%]"
//           >
//             Instagram
//           </a>
//           <a
//             href="https://linkedin.com/fake"
//             target="_blank"
//             className="hover:underline leading-[200%]"
//           >
//             LinkedIn
//           </a>
//           <a
//             href="https://twitter.com/fake"
//             target="_blank"
//             className="hover:underline leading-[200%]"
//           >
//             Twitter
//           </a>
//           <a
//             href="mailto:fake@gmail.com"
//             className="hover:underline leading-[200%]"
//           >
//             Email
//           </a>
//         </div>

//         <div
//           className="center w-[70%] bg-center bg-contain bg-no-repeat flex justify-center items-center"
//           style={{ backgroundImage: "url('/images/home/astro.png')" }}
//         >
//           <div className="flex flex-col items-center gap-4">
//             <p className="text-3xl font-normal text-center leading-[200%]">
//               Are your Big Ideas Ready to go Wild?
//             </p>

//             <h1 className="text-8xl font-semibold text-center underline">
//               Let's Work <hr /> Together
//             </h1>
//             <p className="text-xl font-normal text-center leading-[200%]">
//               New Business: hey@heyfynix.com
//             </p>
//             <button className="text-5xl font-bold w-[32rem] h-[4.5rem] bg-white text-black rounded-[3.75rem]">
//               Continue to Scroll
//             </button>
//           </div>
//         </div>

//         <div className="w-[15%] flex flex-col justify-center items-end py-5 text-xl">
//           <a href="#about" className="hover:underline leading-[200%]">
//             About
//           </a>
//           <a href="#work" className="hover:underline leading-[200%]">
//             Work
//           </a>
//           <a href="#services" className="hover:underline leading-[200%]">
//             Services
//           </a>
//           <a href="#career" className="hover:underline leading-[200%]">
//             Career
//           </a>
//           <a href="#contact" className="hover:underline leading-[200%]">
//             Contact
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

// ************************************************************************************

// "use client";
// import { useEffect, useRef } from "react";

// export default function LusionEffect() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     let w = (canvas.width = window.innerWidth);
//     let h = (canvas.height = window.innerHeight * 0.45);
//     let particles = [];
//     let mouseX = -9999;
//     let mouseY = -9999;

//     const PARTICLES = 70;
//     const RADIUS = 160;

//     window.addEventListener("resize", () => {
//       w = canvas.width = window.innerWidth;
//       h = canvas.height = window.innerHeight * 0.45;
//     });

//     window.addEventListener("mousemove", (e) => {
//       const rect = canvas.getBoundingClientRect();
//       const mouseInCanvasY = e.clientY - rect.top;

//       if (mouseInCanvasY > 0 && mouseInCanvasY < h) {
//         mouseX = e.clientX;
//         mouseY = mouseInCanvasY;
//       } else {
//         mouseX = -9999;
//         mouseY = -9999;
//       }
//     });

//     const colors = [
//       "#FF3B5C",
//       "#00D1FF",
//       "#8B5CFF",
//       "#FFD600",
//       "#00FFA3",
//       "#FF6B6B",
//       "#45B7D1",
//     ];

//     const shapes = ["triangle", "star"];

//     class Particle {
//       constructor() {
//         this.reset();
//       }
//       reset() {
//         this.x = Math.random() * w;
//         this.y = h + 40;
//         this.size = Math.random() * 20 + 10;
//         this.vx = Math.random() * 2 - 1;
//         this.vy = Math.random() * 1.4 + 0.8;
//         this.color = colors[Math.floor(Math.random() * colors.length)];
//         this.shape = shapes[Math.floor(Math.random() * shapes.length)];
//         this.rot = Math.random() * Math.PI * 2;
//         this.rotSpeed = (Math.random() - 0.5) * 0.1;
//       }

//       update() {
//         this.x += this.vx;
//         this.y -= this.vy;
//         this.rot += this.rotSpeed;

//         const dx = this.x - mouseX;
//         const dy = this.y - mouseY;
//         const dist = Math.hypot(dx, dy);

//         if (dist < RADIUS) {
//           const force = (RADIUS - dist) / RADIUS;
//           const angle = Math.atan2(dy, dx);
//           const push = force * 9;
//           this.x += Math.cos(angle) * push;
//           this.y += Math.sin(angle) * push;
//         }

//         if (this.y < -50 || this.x < -50 || this.x > w + 50) this.reset();
//       }

//       draw() {
//         ctx.save();
//         ctx.translate(this.x, this.y);
//         ctx.rotate(this.rot);
//         ctx.fillStyle = this.color;
//         ctx.strokeStyle = this.color;

//         switch (this.shape) {
//           case "triangle":
//             ctx.beginPath();
//             ctx.moveTo(0, -this.size);
//             ctx.lineTo(-this.size * 0.9, this.size * 0.8);
//             ctx.lineTo(this.size * 0.9, this.size * 0.8);
//             ctx.closePath();
//             ctx.fill();
//             break;

//           case "star":
//             let rot = (Math.PI / 2) * 3;
//             let x = 0,
//               y = 0;
//             const step = Math.PI / 5;
//             ctx.beginPath();
//             ctx.moveTo(0, -this.size);
//             for (let i = 0; i < 5; i++) {
//               x = Math.cos(rot) * this.size;
//               y = Math.sin(rot) * this.size;
//               ctx.lineTo(x, y);
//               rot += step;
//               x = Math.cos(rot) * (this.size / 2.3);
//               y = Math.sin(rot) * (this.size / 2.3);
//               ctx.lineTo(x, y);
//               rot += step;
//             }
//             ctx.closePath();
//             ctx.fill();
//             break;
//         }
//         ctx.restore();
//       }
//     }

//     for (let i = 0; i < PARTICLES; i++) particles.push(new Particle());

//     function animate() {
//       ctx.clearRect(0, 0, w, h);
//       particles.forEach((p) => {
//         p.update();
//         p.draw();
//       });
//       requestAnimationFrame(animate);
//     }
//     animate();
//   }, []);

//   return (
//     <>
//       <div className="w-full h-[55vh] flex relative z-10 bg-black px-[4%]">
//         {/* LEFT SECTION */}
//         <div className="w-1/4 h-full flex relative ">
//           <div className="absolute w-full h-full  flex flex-col justify-center items-start gap-4  ">
//             <a className="text-white text-xl hover:underline" href="#">
//               Instagram
//             </a>
//             <a className="text-white text-xl hover:underline" href="#">
//               LinkedIn
//             </a>
//             <a className="text-white text-xl hover:underline" href="#">
//               Twitter
//             </a>
//             <a
//               className="text-white text-xl hover:underline"
//               href="mailto:yourmail@gmail.com"
//             >
//               Email
//             </a>
//           </div>
//         </div>

//         {/* CENTER IMAGE */}
//         <div className="w-1/2 h-full flex justify-center items-center relative ">
//           <img
//             src="/images/home/astro.png"
//             className="w-full h-full object-contain rounded-lg"
//             alt="Center"
//           />
//           <div className="absolute w-full h-full mt-50 flex flex-col justify-end items-center text-white text-8xl font-bold text-center ">
//             <span>Let's Work</span>
//             <span>Together</span>
//           </div>
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="w-1/4 h-full flex relative ">
//           <div className="absolute w-full h-full  flex flex-col justify-center items-end gap-4 text-right ">
//             <a className="text-white text-xl hover:underline" href="#">
//               About
//             </a>
//             <a className="text-white text-xl hover:underline" href="#">
//               Work
//             </a>
//             <a className="text-white text-xl hover:underline" href="#">
//               Service
//             </a>
//             <a className="text-white text-xl hover:underline" href="#">
//               Career
//             </a>
//             <a className="text-white text-xl hover:underline" href="#">
//               Contact
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* CANVAS FIXED ON BOTTOM */}
//       <canvas
//         ref={canvasRef}
//         className="absolute w-full h-[45vh] pointer-events-none z-0 bg-black"
//       ></canvas>
//     </>
//   );
// }

//********************************************************************************* */

// "use client";
// import { useEffect, useRef } from "react";

// export default function LusionEffect() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     let w = (canvas.width = window.innerWidth);
//     let h = (canvas.height = window.innerHeight * 0.45);
//     let particles = [];
//     let mouseX = -9999;
//     let mouseY = -9999;

//     const PARTICLES = 200;
//     const RADIUS = 150;

//     window.addEventListener("resize", () => {
//       w = canvas.width = window.innerWidth;
//       h = canvas.height = window.innerHeight * 0.45;
//     });

//     window.addEventListener("mousemove", (e) => {
//       const rect = canvas.getBoundingClientRect();
//       const mouseInCanvasY = e.clientY - rect.top;

//       if (mouseInCanvasY > 0 && mouseInCanvasY < h) {
//         mouseX = e.clientX;
//         mouseY = mouseInCanvasY;
//       } else {
//         mouseX = -9999;
//         mouseY = -9999;
//       }
//     });

//     const colors = [
//       "#FF3B5C",
//       "#00D1FF",
//       "#8B5CFF",
//       "#FFD600",
//       "#00FFA3",
//       "#FF6B6B",
//       "#45B7D1",
//     ];

//     const shapes = ["triangle", "star"];

//     class Particle {
//       constructor() {
//         this.reset();
//       }
//       reset() {
//         this.x = Math.random() * w;
//         this.y = h + 40;
//         this.size = Math.random() * 12 + 10;
//         this.vx = Math.random() * 2 - 1;
//         this.vy = Math.random() * 1.4 + 0.8;
//         this.color = colors[Math.floor(Math.random() * colors.length)];
//         this.shape = shapes[Math.floor(Math.random() * shapes.length)];
//         this.rot = Math.random() * Math.PI * 2;
//         this.rotSpeed = (Math.random() - 0.5) * 0.1;
//       }

//       update() {
//         this.x += this.vx;
//         this.y -= this.vy;
//         this.rot += this.rotSpeed;

//         const dx = this.x - mouseX;
//         const dy = this.y - mouseY;
//         const dist = Math.hypot(dx, dy);

//         if (dist < RADIUS) {
//           const force = (RADIUS - dist) / RADIUS;
//           const angle = Math.atan2(dy, dx);
//           const push = force * 20;
//           this.x += Math.cos(angle) * push;
//           this.y += Math.sin(angle) * push;
//         }

//         if (this.y < -50 || this.x < -50 || this.x > w + 50) this.reset();
//       }

//       draw() {
//         ctx.save();
//         ctx.translate(this.x, this.y);
//         ctx.rotate(this.rot);
//         ctx.fillStyle = this.color;

//         switch (this.shape) {
//           case "triangle":
//             ctx.beginPath();
//             ctx.moveTo(0, -this.size);
//             ctx.lineTo(-this.size * 0.9, this.size * 0.8);
//             ctx.lineTo(this.size * 0.9, this.size * 0.8);
//             ctx.closePath();
//             ctx.fill();
//             break;

//           case "star":
//             let rot = (Math.PI / 2) * 3;
//             let x = 0,
//               y = 0;
//             const step = Math.PI / 5;
//             ctx.beginPath();
//             ctx.moveTo(0, -this.size);
//             for (let i = 0; i < 5; i++) {
//               x = Math.cos(rot) * this.size;
//               y = Math.sin(rot) * this.size;
//               ctx.lineTo(x, y);
//               rot += step;
//               x = Math.cos(rot) * (this.size / 2.3);
//               y = Math.sin(rot) * (this.size / 2.3);
//               ctx.lineTo(x, y);
//               rot += step;
//             }
//             ctx.closePath();
//             ctx.fill();
//             break;
//         }
//         ctx.restore();
//       }
//     }

//     for (let i = 0; i < PARTICLES; i++) particles.push(new Particle());

//     function animate() {
//       ctx.clearRect(0, 0, w, h);
//       particles.forEach((p) => {
//         p.update();
//         p.draw();
//       });
//       requestAnimationFrame(animate);
//     }
//     animate();
//   }, []);

//   return (
//     <>
//       {/* WRAPPER TO AVOID GAP — 100vh TOTAL */}
//       <div className="relative w-full h-[100vh] bg-black">
//         {/* UPPER BLOCK (55vh) */}
//         <div className="w-full h-[55vh] flex relative z-10 px-[4%]">
//           {/* LEFT LINKS */}
//           <div className="w-1/4 h-full flex relative">
//             <div className="absolute w-full h-full flex flex-col justify-center items-start gap-4">
//               <a className="text-white text-xl hover:underline" href="#">
//                 Instagram
//               </a>
//               <a className="text-white text-xl hover:underline" href="#">
//                 LinkedIn
//               </a>
//               <a className="text-white text-xl hover:underline" href="#">
//                 Twitter
//               </a>
//               <a
//                 className="text-white text-xl hover:underline"
//                 href="mailto:yourmail@gmail.com"
//               >
//                 Email
//               </a>
//             </div>
//           </div>

//           {/* CENTER IMAGE */}
//           <div className="w-1/2 h-full flex justify-center items-center relative">
//             <img
//               src="/images/home/astro.png"
//               className="w-full h-full object-contain rounded-lg"
//               alt="Center"
//             />
//             <div className="absolute w-full h-full flex flex-col justify-end items-center text-white text-8xl font-bold text-center pb-6">
//               <span>Let's Work</span>
//               <span>Together</span>
//             </div>
//           </div>

//           {/* RIGHT LINKS */}
//           <div className="w-1/4 h-full flex relative">
//             <div className="absolute w-full h-full flex flex-col justify-center items-end gap-4 text-right">
//               <a className="text-white text-xl hover:underline" href="#">
//                 About
//               </a>
//               <a className="text-white text-xl hover:underline" href="#">
//                 Work
//               </a>
//               <a className="text-white text-xl hover:underline" href="#">
//                 Service
//               </a>
//               <a className="text-white text-xl hover:underline" href="#">
//                 Career
//               </a>
//               <a className="text-white text-xl hover:underline" href="#">
//                 Contact
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* CANVAS FIXED AT BOTTOM */}
//         <canvas
//           ref={canvasRef}
//           className="absolute bottom-0 left-0 w-full h-[45vh] pointer-events-none z-0 bg-black"
//         ></canvas>
//       </div>
//     </>
//   );
// }

// ***********************************************************

// "use client";
// import { useEffect, useRef } from "react";

// export default function LusionEffect() {
//   const canvasRef = useRef(null);
//   const rafRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     let dpr = window.devicePixelRatio || 1;
//     let w = (canvas.width = Math.floor(window.innerWidth * dpr));
//     let h = (canvas.height = Math.floor(window.innerHeight * 0.45 * dpr));
//     canvas.style.width = `${window.innerWidth}px`;
//     canvas.style.height = `${window.innerHeight * 0.45}px`;
//     ctx.scale(dpr, dpr);

//     let mouseX = -9999;
//     let mouseY = -9999;
//     let mouseActive = false;

//     const PARTICLES = 200;
//     const RADIUS = 12; // visual radius in CSS px
//     const PHYS_RADIUS = RADIUS; // physics radius (same)
//     const MASS = 1;
//     const GRAVITY = 0.6; // px/frame^2
//     const FRICTION_GROUND = 0.85;
//     const AIR_FRICTION = 0.998;
//     const RESTITUTION = 0.2; // bounce factor (inelastic)
//     const SLEEP_VEL = 0.08; // threshold to mark sleeping
//     const CELL_SIZE = PHYS_RADIUS * 2.5; // spatial grid cell size
//     const MAX_PUSH = 28; // mouse push impulse magnitude
//     const TIME_STEP = 1; // integration multiplier

//     // Resize handler
//     function resize() {
//       dpr = window.devicePixelRatio || 1;
//       w = canvas.width = Math.floor(window.innerWidth * dpr);
//       h = canvas.height = Math.floor(window.innerHeight * 0.45 * dpr);
//       canvas.style.width = `${window.innerWidth}px`;
//       canvas.style.height = `${window.innerHeight * 0.45}px`;
//       ctx.setTransform(1, 0, 0, 1, 0, 0);
//       ctx.scale(dpr, dpr);
//     }
//     window.addEventListener("resize", resize);

//     // Mouse tracking
//     function onMove(e) {
//       const rect = canvas.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;
//       mouseX = x;
//       mouseY = y;
//       mouseActive = true;
//     }
//     function onLeave() {
//       mouseX = -9999;
//       mouseY = -9999;
//       mouseActive = false;
//     }
//     window.addEventListener("mousemove", onMove);
//     window.addEventListener("pointerleave", onLeave);

//     // Particle class
//     class Particle {
//       constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.r = PHYS_RADIUS;
//         this.vx = (Math.random() - 0.5) * 2; // slight horizontal jitter
//         this.vy = Math.random() * 2; // small initial
//         this.mass = MASS;
//         this.shape = Math.random() > 0.5 ? "triangle" : "star";
//         this.color = "#ffffff";
//         this.rot = Math.random() * Math.PI * 2;
//         this.rotSpeed = 0;
//         this.sleep = false;
//         this.restCount = 0; // frames of low motion
//       }

//       applyPhysics() {
//         if (this.sleep) return;

//         // gravity
//         this.vy += GRAVITY * TIME_STEP;

//         // air friction
//         this.vx *= AIR_FRICTION;
//         this.vy *= AIR_FRICTION;

//         // integrate
//         this.x += this.vx * TIME_STEP;
//         this.y += this.vy * TIME_STEP;

//         // floor collision
//         const floorY = canvas.clientHeight || window.innerHeight * 0.45;
//         if (this.y + this.r > floorY) {
//           this.y = floorY - this.r;
//           // bounce (inelastic) + friction
//           if (Math.abs(this.vy) > 0.5) {
//             this.vy = -this.vy * RESTITUTION;
//           } else {
//             this.vy = 0;
//           }
//           this.vx *= FRICTION_GROUND;
//         }

//         // horizontal walls
//         if (this.x - this.r < 0) {
//           this.x = this.r;
//           this.vx = Math.abs(this.vx) * RESTITUTION;
//         } else if (
//           this.x + this.r >
//           (canvas.clientWidth || window.innerWidth)
//         ) {
//           this.x = (canvas.clientWidth || window.innerWidth) - this.r;
//           this.vx = -Math.abs(this.vx) * RESTITUTION;
//         }

//         // sleeping detection (resting on floor and low speed)
//         const speed = Math.hypot(this.vx, this.vy);
//         const onFloor =
//           Math.abs(
//             this.y + this.r - (canvas.clientHeight || window.innerHeight * 0.45)
//           ) < 0.5;
//         if (speed < SLEEP_VEL && onFloor) {
//           this.restCount++;
//           if (this.restCount > 8) {
//             this.sleep = true;
//             this.vx = 0;
//             this.vy = 0;
//           }
//         } else {
//           this.restCount = 0;
//         }
//       }

//       draw(ctx) {
//         ctx.save();
//         ctx.translate(this.x, this.y);
//         ctx.rotate(this.rot);
//         ctx.fillStyle = this.color;

//         // Draw circle fallback for performance if wanted:
//         // ctx.beginPath(); ctx.arc(0, 0, this.r, 0, Math.PI*2); ctx.fill();

//         if (this.shape === "triangle") {
//           const s = this.r;
//           ctx.beginPath();
//           ctx.moveTo(0, -s);
//           ctx.lineTo(-s * 0.9, s * 0.8);
//           ctx.lineTo(s * 0.9, s * 0.8);
//           ctx.closePath();
//           ctx.fill();
//         } else {
//           // star
//           let rot = (Math.PI / 2) * 3;
//           const size = this.r;
//           const step = Math.PI / 5;
//           ctx.beginPath();
//           ctx.moveTo(0, -size);
//           for (let i = 0; i < 5; i++) {
//             ctx.lineTo(Math.cos(rot) * size, Math.sin(rot) * size);
//             rot += step;
//             ctx.lineTo(
//               Math.cos(rot) * (size / 2.3),
//               Math.sin(rot) * (size / 2.3)
//             );
//             rot += step;
//           }
//           ctx.closePath();
//           ctx.fill();
//         }

//         ctx.restore();
//       }
//     }

//     // Create particles above the canvas so they fall and stack
//     const particles = [];
//     for (let i = 0; i < PARTICLES; i++) {
//       // spread horizontally above the canvas
//       const startX = Math.random() * (canvas.clientWidth || window.innerWidth);
//       const startY =
//         -Math.random() * (canvas.clientHeight || window.innerHeight * 0.45) -
//         Math.random() * 40 -
//         10;
//       particles.push(new Particle(startX, startY));
//     }

//     // Spatial hash grid for collision broadphase
//     function buildGrid(items, cellSize) {
//       const grid = new Map();
//       for (let i = 0; i < items.length; i++) {
//         const p = items[i];
//         const gx = Math.floor(p.x / cellSize);
//         const gy = Math.floor(p.y / cellSize);
//         const key = `${gx},${gy}`;
//         if (!grid.has(key)) grid.set(key, []);
//         grid.get(key).push(p);
//       }
//       return grid;
//     }

//     function neighborsFromGrid(grid, gx, gy) {
//       const neigh = [];
//       for (let i = gx - 1; i <= gx + 1; i++) {
//         for (let j = gy - 1; j <= gy + 1; j++) {
//           const key = `${i},${j}`;
//           if (grid.has(key)) neigh.push(...grid.get(key));
//         }
//       }
//       return neigh;
//     }

//     // Narrow-phase collision resolution (circle-circle)
//     function resolveCircleCollision(a, b) {
//       const dx = b.x - a.x;
//       const dy = b.y - a.y;
//       const dist = Math.hypot(dx, dy) || 0.0001;
//       const minDist = a.r + b.r;
//       if (dist < minDist) {
//         // push them apart proportionally to masses
//         const overlap = minDist - dist;
//         const nx = dx / dist;
//         const ny = dy / dist;

//         // separate
//         const totalMass = a.mass + b.mass;
//         const pushA = overlap * (b.mass / totalMass);
//         const pushB = overlap * (a.mass / totalMass);
//         a.x -= nx * pushA;
//         a.y -= ny * pushA;
//         b.x += nx * pushB;
//         b.y += ny * pushB;

//         // relative velocity along normal
//         const rvx = b.vx - a.vx;
//         const rvy = b.vy - a.vy;
//         const relVelAlongNormal = rvx * nx + rvy * ny;

//         // only apply impulse if they are moving towards each other
//         if (relVelAlongNormal < 0) {
//           const e = Math.min(RESTITUTION, RESTITUTION);
//           const j = (-(1 + e) * relVelAlongNormal) / (1 / a.mass + 1 / b.mass);
//           const impulseX = nx * j;
//           const impulseY = ny * j;
//           a.vx -= impulseX / a.mass;
//           a.vy -= impulseY / a.mass;
//           b.vx += impulseX / b.mass;
//           b.vy += impulseY / b.mass;
//         }

//         // small damping to simulate friction on contact
//         a.vx *= 0.999;
//         a.vy *= 0.999;
//         b.vx *= 0.999;
//         b.vy *= 0.999;

//         // wake up if sleeping
//         if (a.sleep) a.sleep = false;
//         if (b.sleep) b.sleep = false;
//       }
//     }

//     // Mouse push: apply impulse if near and awake or asleep (wake)
//     function applyMousePush() {
//       if (!mouseActive) return;
//       const pushRadius = 300;
//       for (let i = 0; i < particles.length; i++) {
//         const p = particles[i];
//         const dx = p.x - mouseX;
//         const dy = p.y - mouseY;
//         const dist = Math.hypot(dx, dy);
//         if (dist < pushRadius) {
//           const force = (1 - dist / pushRadius) * MAX_PUSH;
//           const ang = Math.atan2(dy, dx);
//           p.vx += Math.cos(ang) * force * 0.06;
//           p.vy += Math.sin(ang) * force * 0.06;
//           p.sleep = false; // wake
//         }
//       }
//     }

//     // Animation loop
//     function animate() {
//       ctx.clearRect(
//         0,
//         0,
//         canvas.clientWidth || window.innerWidth,
//         canvas.clientHeight || window.innerHeight * 0.45
//       );

//       // 1) Build spatial grid
//       const grid = new Map();
//       for (let i = 0; i < particles.length; i++) {
//         const p = particles[i];
//         const gx = Math.floor(p.x / CELL_SIZE);
//         const gy = Math.floor(p.y / CELL_SIZE);
//         const key = `${gx},${gy}`;
//         if (!grid.has(key)) grid.set(key, []);
//         grid.get(key).push(p);
//       }

//       // 2) Broadphase -> narrowphase collisions
//       for (let i = 0; i < particles.length; i++) {
//         const a = particles[i];
//         const gx = Math.floor(a.x / CELL_SIZE);
//         const gy = Math.floor(a.y / CELL_SIZE);
//         const neighbors = neighborsFromGrid(grid, gx, gy);
//         for (let j = 0; j < neighbors.length; j++) {
//           const b = neighbors[j];
//           if (a === b) continue;
//           resolveCircleCollision(a, b);
//         }
//       }

//       // 3) Apply mouse push (wake + impulse)
//       applyMousePush();

//       // 4) Integrate physics & draw
//       for (let i = 0; i < particles.length; i++) {
//         const p = particles[i];
//         p.applyPhysics();
//         p.draw(ctx);
//       }

//       rafRef.current = requestAnimationFrame(animate);
//     }

//     // Kick things off
//     animate();

//     // Cleanup
//     return () => {
//       window.removeEventListener("resize", resize);
//       window.removeEventListener("mousemove", onMove);
//       window.removeEventListener("pointerleave", onLeave);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, []);

//   return (
//     <>
//       <div className="relative w-full h-[100vh] bg-black">
//         <div className="w-full h-[55vh] flex relative z-10 px-[4%]">
//           {/* Left Links */}
//           <div className="w-1/4 h-full flex relative">
//             <div className="absolute w-full h-full flex flex-col justify-center items-start gap-4">
//               <a className="text-white text-xl hover:underline" href="#">
//                 Instagram
//               </a>
//               <a className="text-white text-xl hover:underline" href="#">
//                 LinkedIn
//               </a>
//               <a className="text-white text-xl hover:underline" href="#">
//                 Twitter
//               </a>
//               <a
//                 className="text-white text-xl hover:underline"
//                 href="mailto:yourmail@gmail.com"
//               >
//                 Email
//               </a>
//             </div>
//           </div>

//           {/* Center Image + Text */}
//           <div className="w-1/2 h-full flex justify-center items-center relative">
//             <img
//               src="/images/home/astro.png"
//               className="w-full h-full object-contain rounded-lg"
//               alt="Center"
//             />
//             <div className="absolute w-full h-full flex flex-col justify-end items-center text-white text-8xl font-bold text-center pb-6">
//               <span>Let's Work</span>
//               <span>Together</span>
//             </div>
//           </div>

//           {/* Right Links */}
//           <div className="w-1/4 h-full flex relative">
//             <div className="absolute w-full h-full flex flex-col justify-center items-end gap-4 text-right">
//               <a className="text-white text-xl hover:underline" href="#">
//                 About
//               </a>
//               <a className="text-white text-xl hover:underline" href="#">
//                 Work
//               </a>
//               <a className="text-white text-xl hover:underline" href="#">
//                 Service
//               </a>
//               <a className="text-white text-xl hover:underline" href="#">
//                 Career
//               </a>
//               <a className="text-white text-xl hover:underline" href="#">
//                 Contact
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Blue Canvas */}
//         <canvas
//           ref={canvasRef}
//           className="absolute bottom-0 left-0 w-full h-[45vh] pointer-events-none z-0 bg-blue-500"
//         ></canvas>
//       </div>
//     </>
//   );
// }

// *********************************************************************************

"use client";
import { useEffect, useRef } from "react";

export default function LusionEffect() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let dpr = window.devicePixelRatio || 1;
    let w = (canvas.width = Math.floor(window.innerWidth * dpr));
    // let h = (canvas.height = Math.floor(window.innerHeight * 0.45 * dpr));
    let h = (canvas.height = Math.floor(window.innerHeight * dpr));
    canvas.style.width = `${window.innerWidth}px`;
    // canvas.style.height = `${window.innerHeight * 0.45}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.scale(dpr, dpr);

    let mouseX = -9999;
    let mouseY = -9999;
    let mouseActive = false;

    const PARTICLES = 150;
    const RADIUS = 20; // visual radius in CSS px
    const PHYS_RADIUS = RADIUS; // physics radius (same)
    const MASS = 1;
    const GRAVITY = 2; // px/frame^2
    const FRICTION_GROUND = 0.85;
    const AIR_FRICTION = 0.998;
    const RESTITUTION = 0.2; // bounce factor (inelastic)
    const SLEEP_VEL = 0.08; // threshold to mark sleeping
    const CELL_SIZE = PHYS_RADIUS * 2.5; // spatial grid cell size
    const MAX_PUSH = 50; // mouse push impulse magnitude
    const TIME_STEP = 1; // integration multiplier

    // Resize handler
    function resize() {
      dpr = window.devicePixelRatio || 1;
      w = canvas.width = Math.floor(window.innerWidth * dpr);
      h = canvas.height = Math.floor(window.innerHeight * 0.45 * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight * 0.45}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }
    window.addEventListener("resize", resize);

    // Mouse tracking
    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX = x;
      mouseY = y;
      mouseActive = true;
    }
    function onLeave() {
      mouseX = -9999;
      mouseY = -9999;
      mouseActive = false;
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("pointerleave", onLeave);

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = PHYS_RADIUS;
        this.vx = (Math.random() - 0.5) * 2; // slight horizontal jitter
        this.vy = Math.random() * 2; // small initial
        this.mass = MASS;
        this.shape = Math.random() > 0.5 ? "triangle" : "star";
        this.color = "#ffffff";
        this.rot = Math.random() * Math.PI * 2;
        this.rotSpeed = 0;
        this.sleep = false;
        this.restCount = 0; // frames of low motion
      }

      applyPhysics() {
        if (this.sleep) return;

        // gravity
        this.vy += GRAVITY * TIME_STEP;

        // air friction
        this.vx *= AIR_FRICTION;
        this.vy *= AIR_FRICTION;

        // integrate
        this.x += this.vx * TIME_STEP;
        this.y += this.vy * TIME_STEP;

        // floor collision
        const floorY = canvas.clientHeight || window.innerHeight * 0.45;
        if (this.y + this.r > floorY) {
          this.y = floorY - this.r;
          // bounce (inelastic) + friction
          if (Math.abs(this.vy) > 0.5) {
            this.vy = -this.vy * RESTITUTION;
          } else {
            this.vy = 0;
          }
          this.vx *= FRICTION_GROUND;
        }

        // horizontal walls
        if (this.x - this.r < 0) {
          this.x = this.r;
          this.vx = Math.abs(this.vx) * RESTITUTION;
        } else if (
          this.x + this.r >
          (canvas.clientWidth || window.innerWidth)
        ) {
          this.x = (canvas.clientWidth || window.innerWidth) - this.r;
          this.vx = -Math.abs(this.vx) * RESTITUTION;
        }

        // sleeping detection (resting on floor and low speed)
        const speed = Math.hypot(this.vx, this.vy);
        const onFloor =
          Math.abs(
            this.y + this.r - (canvas.clientHeight || window.innerHeight * 0.45)
          ) < 0.5;
        if (speed < SLEEP_VEL && onFloor) {
          this.restCount++;
          if (this.restCount > 8) {
            this.sleep = true;
            this.vx = 0;
            this.vy = 0;
          }
        } else {
          this.restCount = 0;
        }
      }

      draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rot);
        ctx.fillStyle = this.color;

        // Draw circle fallback for performance if wanted:
        // ctx.beginPath(); ctx.arc(0, 0, this.r, 0, Math.PI*2); ctx.fill();

        if (this.shape === "triangle") {
          const s = this.r;
          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.lineTo(-s * 0.9, s * 0.8);
          ctx.lineTo(s * 0.9, s * 0.8);
          ctx.closePath();
          ctx.fill();
        } else {
          // star
          let rot = (Math.PI / 2) * 3;
          const size = this.r;
          const step = Math.PI / 5;
          ctx.beginPath();
          ctx.moveTo(0, -size);
          for (let i = 0; i < 5; i++) {
            ctx.lineTo(Math.cos(rot) * size, Math.sin(rot) * size);
            rot += step;
            ctx.lineTo(
              Math.cos(rot) * (size / 2.3),
              Math.sin(rot) * (size / 2.3)
            );
            rot += step;
          }
          ctx.closePath();
          ctx.fill();
        }

        ctx.restore();
      }
    }

    // Create particles above the canvas so they fall and stack
    const particles = [];
    for (let i = 0; i < PARTICLES; i++) {
      // spread horizontally above the canvas
      const startX = Math.random() * (canvas.clientWidth || window.innerWidth);
      const startY =
        -Math.random() * (canvas.clientHeight || window.innerHeight * 0.45) -
        Math.random() * 40 -
        10;
      particles.push(new Particle(startX, startY));
    }

    // Spatial hash grid for collision broadphase
    function buildGrid(items, cellSize) {
      const grid = new Map();
      for (let i = 0; i < items.length; i++) {
        const p = items[i];
        const gx = Math.floor(p.x / cellSize);
        const gy = Math.floor(p.y / cellSize);
        const key = `${gx},${gy}`;
        if (!grid.has(key)) grid.set(key, []);
        grid.get(key).push(p);
      }
      return grid;
    }

    function neighborsFromGrid(grid, gx, gy) {
      const neigh = [];
      for (let i = gx - 1; i <= gx + 1; i++) {
        for (let j = gy - 1; j <= gy + 1; j++) {
          const key = `${i},${j}`;
          if (grid.has(key)) neigh.push(...grid.get(key));
        }
      }
      return neigh;
    }

    // Narrow-phase collision resolution (circle-circle)
    function resolveCircleCollision(a, b) {
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.hypot(dx, dy) || 0.0001;
      const minDist = a.r + b.r + 10;
      if (dist < minDist) {
        // push them apart proportionally to masses
        const overlap = minDist - dist;
        const nx = dx / dist;
        const ny = dy / dist;

        // separate
        const totalMass = a.mass + b.mass;
        const pushA = overlap * (b.mass / totalMass);
        const pushB = overlap * (a.mass / totalMass);
        a.x -= nx * pushA;
        a.y -= ny * pushA;
        b.x += nx * pushB;
        b.y += ny * pushB;

        // relative velocity along normal
        const rvx = b.vx - a.vx;
        const rvy = b.vy - a.vy;
        const relVelAlongNormal = rvx * nx + rvy * ny;

        // only apply impulse if they are moving towards each other
        if (relVelAlongNormal < 0) {
          const e = Math.min(RESTITUTION, RESTITUTION);
          const j = (-(1 + e) * relVelAlongNormal) / (1 / a.mass + 1 / b.mass);
          const impulseX = nx * j;
          const impulseY = ny * j;
          a.vx -= impulseX / a.mass;
          a.vy -= impulseY / a.mass;
          b.vx += impulseX / b.mass;
          b.vy += impulseY / b.mass;
        }

        // small damping to simulate friction on contact
        a.vx *= 0.999;
        a.vy *= 0.999;
        b.vx *= 0.999;
        b.vy *= 0.999;

        // wake up if sleeping
        if (a.sleep) a.sleep = false;
        if (b.sleep) b.sleep = false;
      }
    }

    // Mouse push: apply impulse if near and awake or asleep (wake)
    function applyMousePush() {
      if (!mouseActive) return;
      const pushRadius = 1200;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.hypot(dx, dy);
        if (dist < pushRadius) {
          const force = (1 - dist / pushRadius) * MAX_PUSH;
          const ang = Math.atan2(dy, dx);
          p.vx += Math.cos(ang) * force * 0.06;
          p.vy += Math.sin(ang) * force * 0.06;
          p.sleep = false; // wake
        }
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(
        0,
        0,
        canvas.clientWidth || window.innerWidth,
        canvas.clientHeight || window.innerHeight * 0.45
      );

      // 1) Build spatial grid
      const grid = new Map();
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const gx = Math.floor(p.x / CELL_SIZE);
        const gy = Math.floor(p.y / CELL_SIZE);
        const key = `${gx},${gy}`;
        if (!grid.has(key)) grid.set(key, []);
        grid.get(key).push(p);
      }

      // 2) Broadphase -> narrowphase collisions
      // for (let i = 0; i < particles.length; i++) {
      //   const a = particles[i];
      //   const gx = Math.floor(a.x / CELL_SIZE);
      //   const gy = Math.floor(a.y / CELL_SIZE);
      //   const neighbors = neighborsFromGrid(grid, gx, gy);
      //   for (let j = 0; j < neighbors.length; j++) {
      //     const b = neighbors[j];
      //     if (a === b) continue;
      //     resolveCircleCollision(a, b);
      //   }
      // }

      // --- SOLVER ITERATIONS TO REDUCE OVERLAP ---
      const SOLVER_STEPS = 8; // try 3–6 for tighter stacking
      for (let s = 0; s < SOLVER_STEPS; s++) {
        const grid = buildGrid(particles, CELL_SIZE);

        for (let i = 0; i < particles.length; i++) {
          const a = particles[i];
          const gx = Math.floor(a.x / CELL_SIZE);
          const gy = Math.floor(a.y / CELL_SIZE);
          const neighbors = neighborsFromGrid(grid, gx, gy);

          for (let j = 0; j < neighbors.length; j++) {
            const b = neighbors[j];
            if (a === b) continue;
            resolveCircleCollision(a, b);
          }
        }
      }

      // 3) Apply mouse push (wake + impulse)
      applyMousePush();

      // 4) Integrate physics & draw
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.applyPhysics();
        p.draw(ctx);
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    // Kick things off
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div className="relative w-full h-[100vh] bg-black">
        <div className="w-full h-[55vh] flex relative z-10 px-[4%]">
          {/* Left Links */}
          <div className="w-1/4 h-full flex relative">
            <div className="absolute w-full h-full flex flex-col justify-center items-start gap-4">
              <a className="text-white text-xl hover:underline" href="#">
                Instagram
              </a>
              <a className="text-white text-xl hover:underline" href="#">
                LinkedIn
              </a>
              <a className="text-white text-xl hover:underline" href="#">
                Twitter
              </a>
              <a
                className="text-white text-xl hover:underline"
                href="mailto:yourmail@gmail.com"
              >
                Email
              </a>
            </div>
          </div>

          {/* Center Image + Text */}
          <div className="w-1/2 h-full flex justify-center items-center relative">
            <img
              src="/images/home/astro.png"
              className="w-full h-full object-contain rounded-lg"
              alt="Center"
            />
            <div className="absolute w-full h-full flex flex-col justify-end items-center text-white text-8xl font-bold text-center pb-6">
              <span>Let's Work</span>
              <span>Together</span>
            </div>
          </div>

          {/* Right Links */}
          <div className="w-1/4 h-full flex relative">
            <div className="absolute w-full h-full flex flex-col justify-center items-end gap-4 text-right">
              <a className="text-white text-xl hover:underline" href="#">
                About
              </a>
              <a className="text-white text-xl hover:underline" href="#">
                Work
              </a>
              <a className="text-white text-xl hover:underline" href="#">
                Service
              </a>
              <a className="text-white text-xl hover:underline" href="#">
                Career
              </a>
              <a className="text-white text-xl hover:underline" href="#">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Blue Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute bottom-0 left-0 w-full h-[45vh] pointer-events-none z-0 bg-black"
        ></canvas>
      </div>
    </>
  );
}
