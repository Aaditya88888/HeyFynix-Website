import InitialText from "@/components/Home/InitialText/InitialText";
import OurBeliefs from "@/components/Home/OurBeliefs/OurBeliefs";
import SocialWork from "@/components/Home/SocialWork/SocialWork";
import WhatWeDo from "@/components/Home/WhatWeDo/WhatWeDo";
import WhoWeAre from "@/components/Home/WhoWeAre/WhoWeAre";
import Work from "@/components/Home/Work/Work";

export default function Home() {
  return (
    <>
      <InitialText />
      <WhoWeAre />
      <WhatWeDo />
      <Work />
      {/* <OurBeliefs /> */}
      <SocialWork />
    </>
  );
}
