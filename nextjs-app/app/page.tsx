import { METADATA } from "@/constants/metadata";
import WhatWeDoHomepage from "@/components/pages/main/WhatWeDoHomepage";
import StayUpdated from "@/components/pages/main/StayUpdated";
import Partners from "@/components/pages/main/Partners";
import WhatWeBring from "@/components/pages/main/WhatWeBring";
import WhoWeAre from "@/components/pages/main/WhoWeAre";
import Testimonial from "@/components/pages/main/Testimonial";
import OurImpact from "@/components/pages/main/OurImpact";
import Banner from "@/components/pages/main/Banner";
import Routes from "@/constants/routes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: METADATA.projectName,
  alternates: {
    canonical: Routes.HOME,
  },
  icons: {
    other: [
      {
        rel: "preload",
        url: "/images/index-banner/background-lg.png",
        fetchPriority: "high",
        media: "(min-width: 840px)",
      },
      {
        rel: "preload",
        url: "/images/index-banner/background-md.png",
        fetchPriority: "high",
        media: "(min-width: 600px) and (max-width: 839px)",
      },
      {
        rel: "preload",
        url: "/images/index-banner/background-sm.png",
        fetchPriority: "high",
        media: "(max-width: 599px)",
      },
      {
        rel: "preload",
        url: "/images/index-banner/boat.png",
        fetchPriority: "high",
        media: "(min-width: 840px)",
      },
    ],
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
        <Testimonial />
        <Partners />
        <StayUpdated />
      </div>
    </>
  );
}
