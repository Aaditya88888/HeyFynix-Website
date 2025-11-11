"use client";

import { useEffect, useState } from "react";
import InfiniteCreativity from "@/components/Home/InfiniteCreativity/InfiniteCreativity";
import InitialText from "@/components/Home/InitialText/InitialText";
import MakesUsDifferent from "@/components/Home/MakesUsDifferent/MakesUsDifferent";
import Navbar from "@/components/Home/Navbar/Navbar";
import Process from "@/components/Home/Process/Process";
import SocialWork from "@/components/Home/SocialWork/SocialWork";
import WhatWeDo from "@/components/Home/WhatWeDo/WhatWeDo";
import WhoWeAre from "@/components/Home/WhoWeAre/WhoWeAre";
import Work from "@/components/Home/Work/Work";
// import HomeLanding from "@/components/Solar/HomeLanding";

// import Process from "@/components/Home/Process/Process";
// import SocialWork from "@/components/Home/SocialWork/SocialWork";
// import WhatWeDo from "@/components/Home/WhatWeDo/WhatWeDo";
// import WhoWeAre from "@/components/Home/WhoWeAre/WhoWeAre";
// import Work from "@/components/Home/Work/Work";
// import HomeLanding from "@/components/Solar/HomeLanding"

// export default function Home() {
//   const [showRestOfPage, setShowRestOfPage] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;

//       // Calculate the total height of HomeLanding scroll container
//       // Based on your code: 800vh for desktop, 1200vh for mobile
//       const isMobile = window.innerWidth <= 768;
//       const homeLandingHeight = windowHeight * (isMobile ? 12 : 8);

//       // Calculate progress (0 to 1)
//       const scrollProgress = Math.min(scrollY / homeLandingHeight, 1);

//       // Show rest of page when scroll progress reaches 95% or more
//       // This ensures the HomeLanding animations are mostly complete
//       if (scrollProgress >= 0.95 && !showRestOfPage) {
//         setShowRestOfPage(true);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Check initial state

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [showRestOfPage]);

//   return (
//     <>
//       <Navbar />
//       <HomeLanding />

//       {/* Only render other sections after HomeLanding scroll is complete */}
//       <div style={{
//         opacity: showRestOfPage ? 1 : 0,
//         transition: 'opacity 0.8s ease-in-out',
//         pointerEvents: showRestOfPage ? 'auto' : 'none'
//       }}>
//         <InitialText />
//         <InfiniteCreativity />
//         <WhoWeAre />
//         <WhatWeDo />
//         <Work />
//         <Process />
//         <MakesUsDifferent />
//         <SocialWork />
//       </div>
//     </>
//   );
// }

export default function Home() {
  return (
    <>
      <Navbar />
          <InitialText />
          <InfiniteCreativity />
          <WhoWeAre />
          <WhatWeDo />
          <Work />
          <Process />
          <MakesUsDifferent />
          <SocialWork />
    </>
  );
}
