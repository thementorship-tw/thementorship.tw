import type { Metadata } from "next";
import { METADATA } from "@/constants/metadata";
import StayUpdated from "@/components/pages/main/StayUpdated";
import Partners from "@/components/pages/main/Partners";
import WhatWeBring from "@/components/pages/main/WhatWeBring";

export const metadata: Metadata = {
  title: `首頁 - ${METADATA.projectName}`,
};

export default async function HomePage() {
  return (
    <div className="py-[60px]">
      <div className="h-[100vh] bg-red-500"></div>
      <WhatWeBring />
      <Partners />
      <StayUpdated />
    </div>
  );
}
