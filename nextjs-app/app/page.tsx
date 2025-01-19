import { METADATA } from "@/constants/metadata";
import WhatWeDo from "@/components/pages/main/WhatWeDo";
import StayUpdated from "@/components/pages/main/StayUpdated";
import Partners from "@/components/pages/main/Partners";
import WhatWeBring from "@/components/pages/main/WhatWeBring";
import WhoWeAre from "@/components/pages/main/WhoWeAre";
import Testimonial from "@/components/pages/main/Testimonial";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `首頁 - ${METADATA.projectName}`,
};

export default async function HomePage() {
  return (
    <div>
      <div className="h-[100vh] bg-red-500"></div>
      <WhatWeDo />
      <WhatWeBring />
      <WhoWeAre />
      <Testimonial />
      <Partners />
      <StayUpdated />
    </div>
  );
}
