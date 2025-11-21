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
    <main className="w-full bg-transparent text-white">
      <Navbar />

      {/* SECTION 1 — Home intro */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        <HomeLanding />
      </section>

      {/* SECTION 2  */}
      <section className="min-h-screen flex items-center justify-center bg-black">
        <CreativeText startOffset={0.84} revealRange={0.2} holdDuration={0.1} />
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
