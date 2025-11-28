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

"use client";
import { useEffect, useRef } from "react";

export default function LusionEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight * 0.45);
    let particles = [];
    let mouseX = -9999;
    let mouseY = -9999;

    const PARTICLES = 70;
    const RADIUS = 160;

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight * 0.45;
    });

    window.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseInCanvasY = e.clientY - rect.top;

      if (mouseInCanvasY > 0 && mouseInCanvasY < h) {
        mouseX = e.clientX;
        mouseY = mouseInCanvasY;
      } else {
        mouseX = -9999;
        mouseY = -9999;
      }
    });

    const colors = [
      "#FF3B5C",
      "#00D1FF",
      "#8B5CFF",
      "#FFD600",
      "#00FFA3",
      "#FF6B6B",
      "#45B7D1",
    ];

    const shapes = ["triangle", "star"];

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * w;
        this.y = h + 40;
        this.size = Math.random() * 20 + 10;
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * 1.4 + 0.8;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.shape = shapes[Math.floor(Math.random() * shapes.length)];
        this.rot = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.1;
      }

      update() {
        this.x += this.vx;
        this.y -= this.vy;
        this.rot += this.rotSpeed;

        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const dist = Math.hypot(dx, dy);

        if (dist < RADIUS) {
          const force = (RADIUS - dist) / RADIUS;
          const angle = Math.atan2(dy, dx);
          const push = force * 9;
          this.x += Math.cos(angle) * push;
          this.y += Math.sin(angle) * push;
        }

        if (this.y < -50 || this.x < -50 || this.x > w + 50) this.reset();
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rot);
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;

        switch (this.shape) {
          case "triangle":
            ctx.beginPath();
            ctx.moveTo(0, -this.size);
            ctx.lineTo(-this.size * 0.9, this.size * 0.8);
            ctx.lineTo(this.size * 0.9, this.size * 0.8);
            ctx.closePath();
            ctx.fill();
            break;

          case "star":
            let rot = (Math.PI / 2) * 3;
            let x = 0,
              y = 0;
            const step = Math.PI / 5;
            ctx.beginPath();
            ctx.moveTo(0, -this.size);
            for (let i = 0; i < 5; i++) {
              x = Math.cos(rot) * this.size;
              y = Math.sin(rot) * this.size;
              ctx.lineTo(x, y);
              rot += step;
              x = Math.cos(rot) * (this.size / 2.3);
              y = Math.sin(rot) * (this.size / 2.3);
              ctx.lineTo(x, y);
              rot += step;
            }
            ctx.closePath();
            ctx.fill();
            break;
        }
        ctx.restore();
      }
    }

    for (let i = 0; i < PARTICLES; i++) particles.push(new Particle());

    function animate() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <>
      <div className="w-full h-[55vh] flex relative z-10 bg-black px-[4%]">
        {/* LEFT SECTION */}
        <div className="w-1/4 h-full flex relative ">
          <div className="absolute w-full h-full  flex flex-col justify-center items-start gap-4  ">
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

        {/* CENTER IMAGE */}
        <div className="w-1/2 h-full flex justify-center items-center relative ">
          <img
            src="/images/home/astro.png"
            className="w-full h-full object-contain rounded-lg"
            alt="Center"
          />
          <div className="absolute w-full h-full mt-50 flex flex-col justify-end items-center text-white text-8xl font-bold text-center ">
            <span>Let's Work</span>
            <span>Together</span>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-1/4 h-full flex relative ">
          <div className="absolute w-full h-full  flex flex-col justify-center items-end gap-4 text-right ">
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

      {/* CANVAS FIXED ON BOTTOM */}
      <canvas
        ref={canvasRef}
        className="absolute w-full h-[45vh] pointer-events-none z-0 bg-black"
      ></canvas>
    </>
  );
}
