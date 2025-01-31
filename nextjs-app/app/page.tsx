import { METADATA } from "@/constants/metadata";
import WhatWeDoHomepage from "@/components/pages/main/WhatWeDoHomepage";
import StayUpdated from "@/components/pages/main/StayUpdated";
import Partners from "@/components/pages/main/Partners";
import WhatWeBring from "@/components/pages/main/WhatWeBring";
import WhoWeAre from "@/components/pages/main/WhoWeAre";
import Testimonial from "@/components/pages/main/Testimonial";
import OurImpact from "@/components/pages/main/OurImpact";
import Banner from "@/components/pages/main/Banner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `首頁 - ${METADATA.projectName}`,
};

export default async function HomePage() {
  return (
    <>
      <div className="absolute left-0 right-0 top-0 h-[80px] bg-[#e6f4ff] md:h-[88px] lg:h-[94px]" />
      <div>
        <Banner />
        <OurImpact />
        <WhatWeDoHomepage />
        <WhatWeBring />
        <WhoWeAre />
        <Testimonial />
        <Partners />
        <StayUpdated />
      </div>
    </>
  );
}
