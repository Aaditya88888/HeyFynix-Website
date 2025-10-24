import InitialText from "@/components/Home/InitialText/InitialText";
import MakesUsDifferent from "@/components/Home/MakesUsDifferent/MakesUsDifferent";
import MobileBottomNavbar from "@/components/Home/Navbar/MobileBottomNavbar";
import Navbar from "@/components/Home/Navbar/Navbar";
import OurBeliefs from "@/components/Home/OurBeliefs/OurBeliefs";
import Process from "@/components/Home/Process/Process";
import SocialWork from "@/components/Home/SocialWork/SocialWork";
import WhatWeDo from "@/components/Home/WhatWeDo/WhatWeDo";
import WhoWeAre from "@/components/Home/WhoWeAre/WhoWeAre";
import Work from "@/components/Home/Work/Work";

export default function Home() {
  return (
    <>
      <Navbar />
      <InitialText />
      <WhoWeAre />
      <WhatWeDo />
      <Work />
      <Process />
      <MakesUsDifferent />
      {/* <OurBeliefs /> */}
      <SocialWork />
    </>
  );
}
