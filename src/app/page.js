import OurBeliefs from "@/components/Home/OurBeliefs/OurBeliefs";
import SocialWork from "@/components/Home/SocialWork/SocialWork";
import WhatWeDo from "@/components/Home/WhatWeDo/WhatWeDo";
import WhoWeAre from "@/components/Home/WhoWeAre/WhoWeAre";
import Work from "@/components/Home/Work/Work";

export default function Home() {
  return (
    <>
      <WhoWeAre />
      <WhatWeDo />
      <Work />
      {/* <OurBeliefs /> */}
      <SocialWork />
    </>
  );
}
