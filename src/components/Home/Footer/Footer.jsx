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

"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const footer = footerRef.current;

    ScrollTrigger.create({
      trigger: footer,
      start: "bottom bottom", // when footer bottom touches viewport bottom
      onEnter: () => {
        router.push("/work"); // navigate to /work
      },
    });

    return () => {
      ScrollTrigger.killAll(); // cleanup
    };
  }, [router]);

  return (
    <div ref={footerRef} className="w-full h-full px-[4%] text-[#ffffff]">
      <div className="flex w-full h-[70vh]">
        {/* LEFT SECTION */}
        <div className="w-[15%] flex flex-col justify-center items-center py-5 text-xl">
          <a
            href="https://instagram.com/fake"
            target="_blank"
            className="hover:underline leading-[200%]"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com/fake"
            target="_blank"
            className="hover:underline leading-[200%]"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/fake"
            target="_blank"
            className="hover:underline leading-[200%]"
          >
            Twitter
          </a>
          <a
            href="mailto:fake@gmail.com"
            className="hover:underline leading-[200%]"
          >
            Email
          </a>
        </div>

        {/* CENTER */}
        <div
          className="center w-[70%] bg-center bg-contain bg-no-repeat flex justify-center items-center"
          style={{ backgroundImage: "url('/images/home/astro.png')" }}
        >
          <div className="flex flex-col items-center gap-4">
            <p className="text-3xl font-normal text-center leading-[200%]">
              Are your Big Ideas Ready to go Wild?
            </p>

            <h1 className="text-8xl font-semibold text-center underline">
              Let's Work <br /> Together
            </h1>
            <p className="text-xl font-normal text-center leading-[200%]">
              New Business: hey@heyfynix.com
            </p>
            <button className="text-6xl font-bold w-[40rem] h-[4.5rem] bg-white text-black rounded-[60px]">
              Continue to Scroll
            </button>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-[15%] flex flex-col justify-center items-center py-5 text-xl">
          <a href="#about" className="hover:underline leading-[200%]">
            About
          </a>
          <a href="#work" className="hover:underline leading-[200%]">
            Work
          </a>
          <a href="#services" className="hover:underline leading-[200%]">
            Services
          </a>
          <a href="#career" className="hover:underline leading-[200%]">
            Career
          </a>
          <a href="#contact" className="hover:underline leading-[200%]">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
