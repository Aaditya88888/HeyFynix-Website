"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/Home/Navbar/Navbar";
import HomeLanding from "@/components/Solar/HomeLanding";
// import CreativeText from "@/components/Solar/CreativePage";
import CreativePage from "@/components/Solar/CreativePage";
import MyMainCode from "@/components/Solar/MyMainCode";
import WhatWeDo from "@/components/Home/WhatWeDo/WhatWeDo";
import InfiniteCreativity from "@/components/Home/InfiniteCreativity/InfiniteCreativity";
import Process from "@/components/Home/Process/Process";
import Work from "@/components/Home/Work/Work";
import MakesUsDifferent from "@/components/Home/MakesUsDifferent/MakesUsDifferent";
import Footer from "@/components/Home/Footer/Footer";

export default function Page() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <main className="w-full bg-transparent text-white">
      <Navbar />

      {/* Video Landing with Pinning */}
      <HomeLanding />
      <div style={{ height: "120vh" }}></div>

      <CreativePage />
      {/* <section
        id="section-2"
        className="relative min-h-screen bg-transparent flex items-center justify-center"
      >
        <h1 className="text-8xl font-black text-amber-400 drop-shadow-2xl">
          HELLO BROTHER
        </h1>
      </section> */}

      <section className="min-h-screen bg-black">
        <MyMainCode />
      </section>
      <div style={{ height: "30vh" }}></div>

      {/* Baaki sab sections normal flow mein */}
      <InfiniteCreativity />
      <WhatWeDo />
      <Work />
      <Process />
      <MakesUsDifferent />
      <Footer />
    </main>
  );
}
