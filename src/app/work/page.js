



// // app/page.js
// 'use client';
// import { useState } from 'react';
// import EarthSection from '../../components/work/EarthSection';
// import MusicVideoSection from '../../components/work/MusicVideoSection';
// import VideoGallerySection from '../../components/work/VideoGallerySection';
// import WorkGallerySection from '../../components/work/WorkGallerSection';
// import Government from '../../components/work/Government';
// import VideoMasonryGallery from '../../components/work/VideoMasonryGallerly';
// import WorkNavbar from '../../components/work/WorkNavbar';
// import GymReelsSection from '../../components/work/GymReelSection';
// import FullScreenVideo from '../../components/work/FullScreenVideo';
// import BTSGallery from '../../components/work/BTSGallery';
// import Navbar from '../../components/Home/Navbar/Navbar'

// export default function Home() {
//   const [introComplete, setIntroComplete] = useState(false);

//   return (
//    <main className='bg-transparent w-full text-white relative'>
//     <div className="fixed top-0 left-0 w-full z-50">
//       <Navbar />
//     </div>
//     <div style={{ height: '100vh', overflowY: 'scroll', paddingTop: '80px' }}>
//       <EarthSection onComplete={() => setIntroComplete(true)} />

//       <div style={{ height: introComplete ? '1vh' : '0vh' }} /> {/* Spacer for scroll */}

//       {introComplete && (
//         <div style={{ position: 'relative' }}>
//           <WorkNavbar />
//            <FullScreenVideo />
//           <MusicVideoSection />
//           <VideoGallerySection />
//           <WorkGallerySection />
//         <Government />
       
//         <VideoMasonryGallery />
//         <GymReelsSection />
//         <BTSGallery />
        
//         {/* <VideoCarousel /> */}
//         </div>
//       )}
//     </div>
//    </main>
//   );
// }


// app/page.js
// 'use client';

// import { useState } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import EarthSection from '../../components/work/EarthSection';
// import WorkNavbar from '../../components/work/WorkNavbar';
// import FullScreenVideo from '../../components/work/FullScreenVideo';
// import MusicVideoSection from '../../components/work/MusicVideoSection';
// import VideoGallerySection from '../../components/work/VideoGallerySection';
// import WorkGallerySection from '../../components/work/WorkGallerSection';
// import Government from '../../components/work/Government';
// import VideoMasonryGallery from '../../components/work/VideoMasonryGallerly';
// import GymReelsSection from '../../components/work/GymReelSection';
// import BTSGallery from '../../components/work/BTSGallery';
// import Navbar from '../../components/Home/Navbar/Navbar';
// gsap.registerPlugin(ScrollTrigger);
// export default function Home() {
//   const [introComplete, setIntroComplete] = useState(false);

//   return (
//     <>
//       <div className="fixed top-0 left-0 w-full z-50">
//         <Navbar />
//       </div>

//       <main>
//         {/* Earth Intro */}
//         <EarthSection onComplete={() => setIntroComplete(true)} />

//         {/* Everything else appears after intro */}
//         {introComplete && (
//           <>
//             <WorkNavbar />
//             <FullScreenVideo />
//             <MusicVideoSection />
//             <VideoGallerySection />
//             <WorkGallerySection />
//             <Government />
//             <VideoMasonryGallery />
//             <GymReelsSection />
//             <BTSGallery />
//           </>
//         )}
//       </main>
//     </>
//   );
// }
'use client';

import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import EarthSection from '../../components/work/EarthSection';
import WorkNavbar from '../../components/work/WorkNavbar';
import FullScreenVideo from '../../components/work/FullScreenVideo';
import MusicVideoSection from '../../components/work/MusicVideoSection';
import VideoGallerySection from '../../components/work/VideoGallerySection';
import WorkGallerySection from '../../components/work/WorkGallerSection';
import Government from '../../components/work/Government';
import VideoMasonryGallery from '../../components/work/VideoMasonryGallerly';
import GymReelsSection from '../../components/work/GymReelSection';
import BTSGallery from '../../components/work/BTSGallery';
import Navbar from '../../components/Home/Navbar/Navbar';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

useEffect(() => {
  if (!introComplete) return;

  // === 1. Pin FullScreenVideo (already working) ===
  ScrollTrigger.create({
    trigger: "#fullscreen-video-section",
    start: "top top",
    end: "+=120%",              // Controls how long user scrolls while it's pinned
    pin: true,
    pinSpacing: false,          // Allows next section to slide up underneath
    anticipatePin: 1,
    // markers: true,
  });

  // Optional chair parallax
  gsap.to("#chair-parallax", {
    y: -200,
    scale: 1.08,
    ease: "none",
    scrollTrigger: {
      trigger: "#fullscreen-video-section",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });

  
  // Cleanup on unmount
  return () => {
    ScrollTrigger.getAll().forEach((st) => st.kill());
  };
}, [introComplete]);

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <main>
        {/* Earth Intro */}
        <EarthSection onComplete={() => setIntroComplete(true)} />

        {/* All content after intro */}
        {introComplete && (
          <>
            <WorkNavbar />

            {/* SECTION 1: PINNED – FullScreenVideo */}
            <section id="fullscreen-video-section" style={{ position: 'relative' }}>
              <FullScreenVideo />
            </section>

            {/* SECTION 2: REVEALS ON SCROLL – MusicVideoSection */}
            <section style={{ position: 'relative', minHeight: '100vh' }}>
              <MusicVideoSection />
            </section>

            {/* Remaining sections – normal flow */}
            <VideoGallerySection />
  <WorkGallerySection />
  <Government />
            <VideoMasonryGallery />
            <GymReelsSection />
            <BTSGallery />

           
          </>
        )}
      </main>
    </>
  );
}