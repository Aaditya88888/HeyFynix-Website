// app/page.jsx
"use client";

import Navbar from "@/components/Home/Navbar/Navbar";
import HomeLanding from "@/components/Solar/HomeLanding";
import CreativeText from "@/components/Solar/CreativeText";
// import MyMainCode from "@/components/Solar/MyMainCode";
import InfiniteCreativity from "@/components/Home/InfiniteCreativity/InfiniteCreativity";
import WhoWeAre from "@/components/Home/WhoWeAre/WhoWeAre";
import WhatWeDo from "@/components/Home/WhatWeDo/WhatWeDo";
import Work from "@/components/Home/Work/Work";
import Process from "@/components/Home/Process/Process";
import MakesUsDifferent from "@/components/Home/MakesUsDifferent/MakesUsDifferent";
import SocialWork from "@/components/Home/SocialWork/SocialWork";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen overflow-hidden">
        <HomeLanding />
      </section>
      {/* CREATIVE TEXT */}
      <CreativeText startOffset={0.87} />
      {/* OTHER SECTIONS */}
      <InfiniteCreativity />
      <WhoWeAre />
      <WhatWeDo />
      <Work />
      <Process />
      <MakesUsDifferent />
      <SocialWork />
      {/* SOLAR SYSTEM */}
      // <section className="solar-section">
      //   <div className="solar-inner">
      //     <MyMainCode />
      //   </div>
      // </section>
    </main>
  );
}
