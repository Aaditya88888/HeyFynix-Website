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
import MakesUsDifferent from "@/components/Home/MakesUsDifferent/MakesUsDifferent";
import Footer from "@/components/Home/Footer/Footer";

export default function Page() {
  return (
    <main className="w-full bg-transparent text-white">
      <Navbar />

      {/* SECTION 1 — Landing with fake long scroll */}
      <section className="relative bg-black overflow-hidden">
        {/* Yeh wrapper daal diya */}
        <HomeLanding />
      </section>
      {/* CreativeText ab landing ke andar hai → perfect sync */}
      <section className="flex items-center justify-center">
        <CreativeText
          startOffset={0.72}
          revealRange={0.22}
          holdDuration={0.11}
        />
      </section>

      <section className="min-h-screen bg-black">
        <MyMainCode />
      </section>

      {/* Baaki sab sections normal flow mein */}
      <InfiniteCreativity />
      <WhatWeDo />
      <Work />
      {/* <Process /> */}
      <MakesUsDifferent />
       <Footer />
    </main>
  );
}
