// "use client";

// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

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
//     <div className="overflow-x-hidden bg-black m-0">
//       <div className="image-container flex justify-center items-center gap-5 h-screen overflow-hidden relative">
//         <img
//           className="left flex-shrink-0 w-[30vw] h-[40vh] -translate-x-[100vw] opacity-0 rounded-lg object-cover"
//           src="https://images.pexels.com/photos/34154499/pexels-photo-34154499.jpeg"
//           alt="Image 1"
//         />
//         <div className="center flex-shrink-0 w-[90vw] h-[90vh] opacity-100 rounded-lg relative">
//           <img
//             className="w-full h-full rounded-lg object-cover"
//             src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg"
//             alt="Image 2"
//           />
//           {/* Text overlay on center image */}
//           <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-lg">
//               Stuff We’re Super Proud Of
//             </h2>
//             <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
//               We’re proud of the problems we’ve solved and the stories we’ve
//               told. From bold branding to immersive films for established
//               brands, our portfolio reflects our commitment to excellence.
//               Here's a peek at what we’ve been up to:
//             </p>
//           </div>
//         </div>
//         <img
//           className="right flex-shrink-0 w-[30vw] h-[40vh] translate-x-[100vw] opacity-0 rounded-lg object-cover"
//           src="https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg"
//           alt="Image 3"
//         />
//       </div>
//     </div>
//   );
// };

// export default Work;

"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Work = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const duration = 1000; // scroll distance for animation

    // Pin the container
    ScrollTrigger.create({
      trigger: ".image-container",
      start: "top top",
      end: `+=${duration}`,
      pin: true,
      scrub: true,
    });

    // Animate center image
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

    // Animate left image
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

    // Animate right image
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
  }, []);

  return (
    <div className="overflow-x-hidden bg-black m-0">
      <div className="image-container flex justify-center items-center gap-5 h-screen overflow-hidden relative">
        <img
          className="left flex-shrink-0 w-[30vw] h-[40vh] -translate-x-[100vw] opacity-0 rounded-lg object-cover"
          src="https://images.pexels.com/photos/34154499/pexels-photo-34154499.jpeg"
          alt="Image 1"
        />
        <div className="center flex-shrink-0 w-[90vw] h-[90vh] opacity-100 rounded-lg relative">
          <img
            className="w-full h-full rounded-lg object-cover"
            src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg"
            alt="Image 2"
          />
          {/* Text overlay on center image */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg">
            <h2 className="text-[3vw] sm:text-[2.5vw] md:text-[2vw] font-bold text-white mb-2 sm:mb-3 md:mb-4 max-w-[80%] sm:max-w-[70%]">
              Stuff We’re Super Proud Of
            </h2>
            <p className="text-[1.5vw] sm:text-[1.2vw] md:text-[1vw] text-gray-200 max-w-[80%] sm:max-w-[70%] leading-relaxed">
              We’re proud of the problems we’ve solved and the stories we’ve
              told. From bold branding to immersive films for established
              brands, our portfolio reflects our commitment to excellence.
              Here's a peek at what we’ve been up to:
            </p>
          </div>
        </div>
        <img
          className="right flex-shrink-0 w-[30vw] h-[40vh] translate-x-[100vw] opacity-0 rounded-lg object-cover"
          src="https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg"
          alt="Image 3"
        />
      </div>
    </div>
  );
};

export default Work;
