import { METADATA } from "@/constants/metadata";
import WhatWeDo from "@/components/pages/main/WhatWeDo";
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
      <WhatWeDo />
      <WhatWeBring />
      <WhoWeAre />
      <Testimonial />
      <Partners />
      <StayUpdated />
    </div>
  );
}
