"use client";

import { useRef } from "react";
import Navbar from "@/components/Home/Navbar/Navbar";
import HomeLanding from "@/components/Solar/HomeLanding";
import CreativeText from "@/components/Solar/CreativeText";
// All Next Sections
import InfiniteCreativity from "@/components/Home/InfiniteCreativity/InfiniteCreativity";
import WhoWeAre from "@/components/Home/WhoWeAre/WhoWeAre";
import WhatWeDo from "@/components/Home/WhatWeDo/WhatWeDo";
import Work from "@/components/Home/Work/Work";
import Process from "@/components/Home/Process/Process";
import MakesUsDifferent from "@/components/Home/MakesUsDifferent/MakesUsDifferent";
import SocialWork from "@/components/Home/SocialWork/SocialWork";

export default function Home() {
  const rootRef = useRef(null);

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* SOLAR SYSTEM / HERO SECTION */}
      {/* <div
        ref={rootRef}
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          overflow: "visible",
        }}
      > */}
      <HomeLanding />
      {/* </div> */}

      {/* NEXT SECTIONS - Solar System ke Baad
      <div
        id="next-sections"
        style={{
          position: "relative",
          width: "100%",
          background: "#000",
          color: "#fff",
          fontFamily: "var(--font-inter), sans-serif",
          paddingTop: "10vh",
          zIndex: 20,
        }}
      > */}
      <CreativeText startOffset={0.8} />
      <InfiniteCreativity />
      <WhoWeAre />
      <WhatWeDo />
      <Work />
      <Process />
      <MakesUsDifferent />
      <SocialWork />
      {/* </div> */}
    </>
  );
}
