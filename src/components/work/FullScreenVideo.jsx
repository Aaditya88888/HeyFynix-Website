// // // // app/video-section/page.js   (or any component file)
// //  import Image from 'next/image';

// // export default function FullScreenVideo() {
// //   return (
// //     <section style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden',marginTop:'100px' }}>
// //       {/* Full-screen background video */}
// //       <video
// //         autoPlay
// //         muted
// //         loop
// //         playsInline
// //         style={{
// //           position: 'absolute',
// //           top: '50%',
// //           left: '50%',
// //           width: '70%',
// //           height: '100%',
// //           objectFit: 'cover',
// //           transform: 'translate(-50%, -50%)',
// //           zIndex: 1,
// //         }}
// //       >
// //         {/* Replace with your own video file or URL */}
// //         <source src="/videos/video.mp4" type="video/mp4" />
// //         {/* <source src="/videos/your-background-video.webm" type="video/webm" /> */}
// //         Your browser does not support the video tag.
// //       </video>

// //       {/* Image stuck to the bottom center of the section */}
// //       <div
// //         style={{
// //           position: 'absolute',
// //           bottom: '-12px',       // adjust distance from bottom
// //           left: '50%',
// //           transform: 'translateX(-50%)',
// //           zIndex: 10,
// //           pointerEvents: 'none', // optional: let clicks pass through the image
// //         }}
// //       >
// //         <Image
// //           src="/images/work/chair.png"   // ← put your image in public/images/
// //           alt="Bottom overlay image"
// //           width={1800}   // adjust size as needed
// //           height={500}
// //           style={{ maxWidth: '100vw', height: 'auto'}}
// //         />
// //       </div>

// //       {/* Global styles for this page/component only */}
// //       <style jsx global>{`
// //         html,
// //         body,
// //         #__next {
// //           margin: 0;
// //           padding: 0;
// //           height: 100%;
// //           overflow: hidden;
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }





// // app/video-section/page.js (or any component)
// // import Image from 'next/image';

// // export default function FullScreenVideo() {
// //   return (
// //     <section
// //       style={{
// //         position: 'relative',
// //         width: '100vw',
// //         minHeight: '100vh',
// //         overflow: 'hidden',
// //          display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //         padding: '2rem 0'  // Add some padding

// //       }}
// //     >
// //      <div style={{ 
// //   position: 'relative',
// //   width: '100%',
// //   margin: '0 auto',
// //   maxWidth: '1159px',  // Match video width
// //   paddingTop: '2rem'   // Space from top
// // }}>
// //   <h1 style={{
// //     color: 'white',
// //     fontSize: '5rem',
// //     fontWeight: '900',
// //     textAlign: 'center',
// //     textShadow: '0 2px 10px rgba(0,0,0,0.5)',
// //     margin: '0 0 -0.5rem 0',  // Remove all margins except bottom
// //     padding: 0,
// //     lineHeight: 1.1
// //   }}>
// //     SVEEP ELECTION CAMPAIGN
// //   </h1>
// //   <p style={{
// //     color: 'white',
// //     fontSize: '1.4rem',
// //     fontWeight: '500',
// //     textAlign: 'center',
// //     textShadow: '0 2px 5px rgba(0,0,0,0.5)',
// //     margin: '0 0 0.5rem 0',  // Remove all margins except bottom
// //     padding: 0,
// //     marginRight:'-990px',
// //   }}>
// //     Cinema Film
// //   </p>
// // </div>

// // {/* Video container */}
// // <div style={{
// //   position: 'relative',
// //   width: '1159px',
// //   height: '518px',
// //   margin: '0 auto'
// // }}>
// //   <video
// //     muted
// //     loop
// //     playsInline
// //     poster="/videos/fullScreenPoster.png"
// //     onClick={() => window.open('/videos/video.mp4', '_blank')}
// //     style={{
// //       width: '100%',
// //       height: '100%',
// //       objectFit: 'cover',
// //       display: 'block'
// //     }}
// //   >
// //     <source src="/videos/video.mp4" type="video/mp4" />
// //     Your browser does not support the video tag.
// //   </video>
// // </div>

// //       {/* Image stuck to the bottom center */}
// //       <div
// //         style={{
// //           position: 'absolute',
// //           bottom: '-240px',           // tweak as needed
// //           left: '50%',
// //           transform: 'translateX(-50%)',
// //           zIndex: 10,
// //           pointerEvents: 'none',
// //         }}
// //       >
// //         <div style={{ position: 'relative', maxWidth: '100vw', height: '70vh' }}>
// //           <Image
// //             src="/images/work/chair.png"
// //             alt="Bottom overlay image"
// //             width={1800}
// //             height={700}
// //           style={{ maxWidth: '100vw', height: '70vh' }}
// //             priority // optional: load this important image early
// //           />
// //           <div
// //             style={{
// //               position: 'absolute',
// //               top: 65,
// //               left: 0,
// //               right: 0,
// //               bottom: -80,
// //               background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(0, 0, 89, 0.34))',
// //               pointerEvents: 'none',
// //             }}
// //           />
// //         </div>
// //       </div>

// //       {/* Ensure full height and no scroll on the page */}
// //       <style jsx global>{`
// //         html,
// //         body,
// //         #__next {
// //           margin: 0;
// //           padding: 0;
// //           height: 100%;
// //           overflow: hidden;
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }


// // app/video-section/page.js   ← Your file, unchanged layout
// 'use client';

// import Image from 'next/image';


// export default function FullScreenVideo() {
//   return (
//     <section
//       style={{
//         position: 'relative',
//         width: '100vw',
//         minHeight: '100vh',
//         overflow: 'hidden',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: '2rem 0',
//         marginTop:'-5rem'
//       }}
//     >
//       {/* Title & Subtitle - EXACTLY as you had */}
//       <div style={{ 
//         position: 'relative',
//         width: '100%',
//         margin: '0 auto',
//         maxWidth: '961px',
//         paddingTop: '-2rem',
//         whiteSpace:'nowrap'
//       }}>
//         <h1 style={{
//           color: 'white',
//           fontSize: '4.2rem',
//           fontWeight: '700',
//           textAlign: 'center',
//           textShadow: '0 2px 10px rgba(0,0,0,0.5)',
       
//           padding: 0,
//           lineHeight: 1.1
//         }}>
//           SVEEP ELECTION CAMPAIGN
//         </h1>
//         <p style={{
//           color: 'white',
//           fontSize: '1.2rem',
//           fontWeight: '500',
//           textAlign: 'center',
//           textShadow: '0 2px 5px rgba(0,0,0,0.5)',
//           margin: '0 0 0.5rem 0',
//           padding: 0,
//           marginRight: '-840px',
//         }}>
//           Cinema Film
//         </p>
//       </div>

//       {/* Video - EXACT size and position */}
//       <div style={{
//         position: 'relative',
//         width: '961px',
//         height: '430px',
//         margin: '0 auto'
//       }}>
//         <video
//           muted
//           loop
//           playsInline
//           autoPlay
//           poster="/videos/fullScreenPoster.png"
//           onClick={() => window.open('/videos/video.mp4', '_blank')}
//           style={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             display: 'block'
//           }}
//         >
//           <source src="/videos/video.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       {/* CHAIR WITH PARALLAX + SUBTLE SCALE ON SCROLL */}
     
//         <div
//           style={{
//             position: 'absolute',
//             bottom: '760px',
//             left: '50%',
//             transform: 'translateX(-50%)',
//             zIndex: 10,
//             pointerEvents: 'none',
//           }}
//         >
//           <div style={{ position: 'relative', maxWidth: '100vw', height: '50vh' }}>
//             <Image
//               src="/images/work/chair.png"
//               alt="Bottom overlay image"
//               width={1800}
//               height={500}
//               style={{ maxWidth: '100vw', height: '50vh' }}
//               priority
//             />
//             {/* Your gradient overlay - unchanged */}
//             <div
//               style={{
//                 position: 'absolute',
//                 top: 65,
//                 left: 0,
//                 right: 0,
//                 bottom: -80,
//                 background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(0, 0, 89, 0.34))',
//                 pointerEvents: 'none',
//               }}
//             />
//           </div>
//         </div>
    

//       {/* Force page height so user can scroll */}
//       <div style={{ height: '150vh' }} />

//       {/* Keep your global styles */}
//       <style jsx global>{`
//         html, body, #__next {
//           margin: 0;
//           padding: 0;
//           height: 100%;
//         }
//       `}</style>
//     </section>
//   );
// }


'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function FullScreenVideo() {
  const headingRef = useRef(null);
useEffect(() => {
  if (!headingRef.current) return;

  // Set initial state
  headingRef.current.style.visibility = 'hidden';

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        const text = entry.target.textContent;
        const chars = text.split('');

        // Replace text with spans for animation
        entry.target.innerHTML = chars
          .map(char => `<span style="display:inline-block; opacity:0;">${char === ' ' ? '&nbsp;' : char}</span>`)
          .join('');

        const spans = entry.target.querySelectorAll('span');

        // Set initial state
        gsap.set(spans, {
          opacity: 0,
          y: 120,
          rotationX: -60,
          filter: "blur(4px)",
          display: 'inline-block'
        });

        // Make visible and animate
        entry.target.style.visibility = 'visible';
        
        gsap.to(spans, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          filter: "blur(0px)",
          duration: 1.4,
          stagger: 0.04,
          ease: "back.out(1.7)",
          delay: 0.4
        });

        observer.unobserve(entry.target);
      }
    },
    { 
      threshold: 0.1,
      rootMargin: "0px 0px -200px 0px"  // Trigger 100px before element enters viewport
    }
  );

  observer.observe(headingRef.current);

  return () => observer.disconnect();
}, []);

  return (
    <section
      style={{
        position: 'relative',
        width: '100vw',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 0',
        marginTop: '-5rem',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          margin: '0 auto',
          maxWidth: '961px',
          paddingTop: '-2rem',
          whiteSpace: 'nowrap',
        }}
      >
        {/* THIS IS THE ONLY CHANGE — ref + no visibility hidden needed */}
        <h1
          ref={headingRef}
          style={{
            color: 'white',
            fontSize: '4.2rem',
            fontWeight: '700',
            textAlign: 'center',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            padding: 0,
            lineHeight: 1.1,
          }}
        >
          SVEEP ELECTION CAMPAIGN
        </h1>

        <p
          style={{
            color: 'white',
            fontSize: '1.2rem',
            fontWeight: '500',
            textAlign: 'center',
            textShadow: '0 2px 5px rgba(0,0,0,0.5)',
            margin: '0 0 0.5rem 0',
            padding: 0,
            marginRight: '-840px',
          }}
        >
          Cinema Film
        </p>
      </div>

      {/* Everything else — 100% unchanged */}
      <div style={{ position: 'relative', width: '961px', height: '430px', margin: '0 auto',marginBottom:'120px' }}>
        <video
          muted
          loop
          playsInline
          autoPlay
          poster="/videos/fullScreenPoster.png"
          onClick={() => window.open('/videos/video.mp4', '_blank')}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        >
          <source src="/videos/video.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom:'-350px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        <div style={{ position: 'relative', maxWidth: '100vw', height: '100vh',marginBottom:'-100px' }}>
          <Image
            src="/images/work/chair.png"
            alt="Bottom overlay image"
            width={1800}
            height={700}
            style={{ maxWidth: '100vw', height: '80vh' }}
            priority
          />
          <div
            style={{
              position: 'absolute',
              top: 65,
              left: 0,
              right: 0,
              bottom: -80,
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(0, 0, 89, 0.34))',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>


      <style jsx global>{`
        html, body, #__next { margin: 0; padding: 0; height: 100%; }
      `}</style>
    </section>
  );
}