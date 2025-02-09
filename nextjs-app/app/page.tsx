import { METADATA } from "@/constants/metadata";
import WhatWeDoHomepage from "@/components/pages/main/WhatWeDoHomepage";
import StayUpdated from "@/components/pages/main/StayUpdated";
import Partners from "@/components/pages/main/Partners";
import WhatWeBring from "@/components/pages/main/WhatWeBring";
import WhoWeAre from "@/components/pages/main/WhoWeAre";
import Testimonials from "@/components/pages/main/Testimonials";
import OurImpact from "@/components/pages/main/OurImpact";
import Banner from "@/components/pages/main/Banner";
import Routes from "@/constants/routes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: METADATA.projectName,
  alternates: {
    canonical: Routes.HOME,
  },
};

export default async function HomePage() {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 h-[80px] md:h-[88px] lg:h-[94px] bg-[#e6f4ff]" />
      <div>
        <Banner />
        <OurImpact />
        <WhatWeDoHomepage />
        <WhatWeBring />
        <WhoWeAre />
        <Testimonials />
        <Partners />
        <StayUpdated />
      </div>
    </>
  );
}
