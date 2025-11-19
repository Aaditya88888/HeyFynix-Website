"use client";
import React from "react";
import Navbar from "@/components/Home/Navbar/Navbar";
import HomeLanding from "@/components/Solar/HomeLanding";
// import CreativeText from "@/components/Solar/CreativeText";
import MyMainCode from "@/components/Solar/MyMainCode";
import WhoWeAre from "@/components/Home/WhoWeAre/WhoWeAre";
import WhatWeDo from "@/components/Home/WhatWeDo/WhatWeDo";
import InfiniteCreativity from "@/components/Home/InfiniteCreativity/InfiniteCreativity";
import Process from "@/components/Home/Process/Process";

export default function Page() {
  return (
    <main className=" bg-black text-white">
      <Navbar />

      {/* SECTION 1 */}
      <section className="min-h-screen flex items-center justify-center bg-black">
        <HomeLanding />
      </section>

      {/* SECTION 2 (CreativeText Removed) */}
      {/*
      <section className="min-h-screen flex items-center justify-center bg-black">
        <CreativeText startOffset={0.87} />
      </section>
      */}

      {/* SOLAR SECTION */}
      <section className="solar-section min-h-screen flex items-center justify-center bg-black">
        <div className="solar-inner w-full max-w-6xl px-4">
          <MyMainCode />
        </div>
      </section>

      <div className="after-solar-gap" style={{ height: "5vh" }} />
      <InfiniteCreativity />
      <WhoWeAre />
      <WhatWeDo />
      <Process />
    </main>
  );
}
