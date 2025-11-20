"use client";
import React from "react";
import Navbar from "@/components/Home/Navbar/Navbar";
import HomeLanding from "@/components/Solar/HomeLanding";
import CreativeText from "@/components/Solar/CreativeText";
import MyMainCode from "@/components/Solar/MyMainCode";
import WhatWeDo from "@/components/Home/WhatWeDo/WhatWeDo";
import InfiniteCreativity from "@/components/Home/InfiniteCreativity/InfiniteCreativity";
import Process from "@/components/Home/Process/Process";
import Work from "@/components/Home/Work/Work";

export default function Page() {
  return (
    <main className="w-full bg-black text-white">
      <Navbar />

      {/* SECTION 1 — Home intro */}
      <section className="min-h-screen flex items-center justify-center bg-black">
        <HomeLanding />
      </section>

      {/* SECTION 2  */}
      <section className="min-h-screen flex items-center justify-center bg-black">
        <CreativeText
          startOffset={1.55} 
          revealRange={0.15} 
          holdDuration={0.07} 
        />
      </section>

      {/* SECTION 3 — Solar Canvas */}
      <section className="min-h-screen bg-black">
        <MyMainCode />
      </section>

      {/* GAP */}
      <div style={{ height: "10vh" }} />

      {/* SECTION 4 */}
      <InfiniteCreativity />
      <Work />
      <WhatWeDo />
      <Process />
    </main>
  );
}
