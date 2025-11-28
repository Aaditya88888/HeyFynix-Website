// // // Example: sections/MusicVideoSection.jsx
// // export default function MusicVideoSection() {
// //   return (
// //     <div style={{
// //       height: '100vh',
// //       width: '100vw',
// //       backgroundImage: 'url(/images/work/background.png)',
// //       backgroundSize: 'cover',
// //       backgroundPosition: 'center',
// //       position: 'relative',
// //       display: 'flex',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       marginTop:'100px'
// //     }}>
// //       {/* Your astronaut text */}
      
// //        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8))' }} />
// //       <div style={{
// //         position: 'absolute',
// //         top: '50%',
// //         left: '50%',
// //         transform: 'translate(-50%, -50%)',
// //         textAlign: 'center',
// //         color: 'white',
      
       
// //         whiteSpace:'nowrap'
// //       }}>
// //         <div style={{
// //           display: 'flex',
// //           justifyContent: 'space-between',
// //           alignItems: 'center',
// //           width: '100%',
// //           maxWidth: '1200px'
// //         }}>
// //           <p style={{ fontSize: 'clamp(3.2rem, 5vw, 2rem)',fontWeight: 600, margin: 0, textAlign: 'left' }}>
// //           We Create
// //           </p>
         
// //         </div>
// //         <h1 style={{ fontSize: 'clamp(8rem, 12vw, 10rem)', fontWeight: 900, margin: '1rem 0', textShadow: '0 4px 40px rgba(0,0,0,0.9)' ,lineHeight:'0.6'}}>
// //         MUSIC VIDEOS
// //         </h1>
// //         <div style={{
// //           display: 'flex',
// //           justifyContent: 'flex-end',
// //           width: '100%',
// //           maxWidth: '1200px'
// //         }}>
// //           <p style={{ fontSize: 'clamp(2.2rem, 5vw, 2rem)', margin: 0, textAlign: 'right' }}>
// //           in sync with every beat
// //           </p>
         
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// export default function MusicVideoSection() {
//   const sectionRef = useRef(null);
//   const line1Ref = useRef(null);
//   const line3Ref = useRef(null);
//   const lettersRef = useRef([]);

//   useEffect(() => {
//   const observer = new IntersectionObserver(
//     ([entry]) => {
//       if (entry.isIntersecting) {
//         const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

//         // Line 1: "We Create" — smooth & visible
//         tl.to(line1Ref.current, {
//           y: 0,
//           opacity: 1,
//           duration: 1.4,
//         });

//         // "MUSIC VIDEOS" — letter by letter, cinematic & perfectly timed
//         tl.to(
//           lettersRef.current,
//           {
//             y: 0,
//             opacity: 1,
//             duration: 2,
//             ease: "power2.out",
//             stagger: 0.09, // ← perfect slow reveal
//           },
//           "-=1.2" // overlaps beautifully with Line 1
//         );

//         // Line 3: "in sync with every beat" — comes in last
//         tl.to(
//           line3Ref.current,
//           {
//             y: 0,
//             opacity: 1,
//             duration: 1.6,
//           },
//           "-=1.4"
//         );

//         observer.unobserve(entry.target);
//       }
//     },
//     {
//       threshold: 0.5,
//       rootMargin: "-10% 0px -15% 0px",
//     }
//   );

//   sectionRef.current && observer.observe(sectionRef.current);

//   return () => observer.disconnect();
// }, []);

//   const titleText = "MUSIC VIDEOS";

//   return (
//     <section
//       ref={sectionRef}
//       style={{
//         height: "100vh",
//         width: "100vw",
//         backgroundImage: "url(/images/work/background.png)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         position: "relative",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         marginTop: "-280px",
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.9))",
//         }}
//       />

//       <div
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           textAlign: "center",
//           color: "white",
//           width: "100%",
//           maxWidth: "1600px",
//           padding: "0 2rem",
//         }}
//       >
//         {/* Line 1: We Create */}
//         <div ref={line1Ref} style={{ opacity: 0, y: 70 }}>
//           <p
//             style={{
//               fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
//               fontWeight: 700,
//               margin: 0,
//               textAlign: "left",
//               letterSpacing: "-0.02em",
//               marginBottom:'-2rem',
//               marginLeft:'5rem'
//             }}
//           >
//             We Create
//           </p>
//         </div>

//         {/* Line 2: MUSIC VIDEOS – TIGHT SPACING */}
//         <div style={{ margin: "0.6rem 0 -0.4rem 0", lineHeight: "1" }}>
//           <h1
//             style={{
//               fontSize: "clamp(6.5rem, 12vw, 11rem)",
//               fontWeight: 900,
//               margin: 0,
//               lineHeight: "1",
//               letterSpacing: "-0.04em",
//               textShadow: "0 10px 60px rgba(0,0,0,0.9)",
//               marginBottom:'-2rem'
//             }}
//           >
//             {titleText.split("").map((letter, i) => (
//               <span
//                 key={i}
//                 ref={(el) => (lettersRef.current[i] = el)}
//                 style={{
//                   opacity: 0,
//                   y: 110,
//                   display: "inline-block",
//                 }}
//               >
//                 {letter === " " ? "\u00A0" : letter}
//               </span>
//             ))}
//           </h1>
//         </div>

//         {/* Line 3: in sync with every beat */}
//         <div ref={line3Ref} style={{ opacity: 0, y: 70 }}>
//           <p
//             style={{
//               fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
//               fontWeight: 600,
//               margin: "0.4rem 0 0 0",
//               textAlign: "right",
//               letterSpacing: "-0.02em",
//               marginRight:'5rem'
//             }}
//           >
//             in sync with every beat
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { Parallax } from "react-scroll-parallax";

const titleText = "MUSIC VIDEOS";

export default function MusicVideoSection() {
  return (
    <Parallax y={[-60, 60]} style={{ marginTop: "-90vh" }}>   {/* This is what creates the parallax */}
      <section
        style={{
          height: "100vh",
          width: "100vw",
          backgroundImage: "url(/images/work/background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // Remove backgroundAttachment: "fixed" → this kills react-scroll-parallax!
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // Remove marginTop: '-36rem' → that was pushing everything off-screen!
        }}
      >
        {/* Dark overlay */}
        {/* <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.9))",
          }}
        /> */}

        {/* TEXT — centered, no animation */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            width: "100%",
            maxWidth: "1600px",
            padding: "0 2rem",
            zIndex: 10,
          }}
        >
          <p
            style={{
              fontSize: "clamp(1.2rem, 4vw, 4.5rem)",
              fontWeight: 700,
              margin: 0,
              textAlign: "left",
              letterSpacing: "-0.02em",
              marginBottom: "-3rem",
              marginLeft: "7rem",
              marginTop:'5rem'
            }}
          >
            We Create
          </p>

          <h1
            style={{
              fontSize: "clamp(6.5rem, 12vw, 11rem)",
              fontWeight: 900,
              margin: "0.6rem 0 -0.4rem 0",
              lineHeight: "1",
              letterSpacing: "-0.04em",
              textShadow: "0 10px 60px rgba(0,0,0,0.9)",
              fontStyle:'italic',
              marginBottom:'-2rem'
            }}
          >
            {titleText.split("").map((letter, i) => (
              <span key={i} style={{ display: "inline-block" }}>
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>

          <p
            style={{
              fontSize: "clamp(0.4rem, 2vw, 4rem)",
              fontWeight: 600,
              margin: "0.4rem 0 0 0",
              textAlign: "right",
              letterSpacing: "-0.02em",
              marginRight: "5rem",
            }}
          >
            in sync with every beat
          </p>
        </div>
      </section>
    </Parallax>
  );
}