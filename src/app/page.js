"use client";

import { useRef } from "react";
import Navbar from "@/components/Home/Navbar/Navbar";
import HomeLanding from "@/components/Solar/HomeLanding";
import CreativeText from "@/components/Solar/CreativeText";
import InitialText from "@/components/Home/InitialText/InitialText";
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
      <Navbar />
      <HomeLanding />
      <CreativeText startOffset={0.8} />
    <InitialText/>
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
