import { METADATA } from "@/constants/metadata";
import WhatWeDoHomepage from "@/components/pages/main/WhatWeDoHomepage";
import StayUpdated from "@/components/pages/main/StayUpdated";
import Partners from "@/components/pages/main/Partners";
import WhatWeBring from "@/components/pages/main/WhatWeBring";
import WhoWeAre from "@/components/pages/main/WhoWeAre";
import Testimonial from "@/components/pages/main/Testimonial";
import OurImpact from "@/components/pages/main/OurImpact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `首頁 - ${METADATA.projectName}`,
};

export default async function HomePage() {
  return (
    <div>
      <OurImpact />
      <WhatWeDoHomepage />
      <WhatWeBring />
      <WhoWeAre />
      <Testimonial />
      <Partners />
      <StayUpdated />
    </div>
  );
}
