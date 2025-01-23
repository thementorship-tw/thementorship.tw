import Breadcrumb from "@/components/common/Breadcrumb";
import MarqueeTitle from "@/components/common/MarqueeTitle";
import WhatWeDoPhilosophy from "@/components/pages/about/philosophy/WhatWeDoPhilosophy";
import CorePhilosophy from "@/components/pages/about/philosophy/CorePhilosophy";
import ProgramIntroduction from "@/components/pages/about/philosophy/ProgramIntroduction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "曼陀號理念",
};

export default async function PhilosophyPage() {
  return (
    <div>
      <Breadcrumb items={["HOME", "關於曼陀號", "曼陀號理念"]} />
      <MarqueeTitle zhTitle="曼陀號理念" enTitle="Philosophy" />
      <WhatWeDoPhilosophy />
      <CorePhilosophy />
      <ProgramIntroduction />
    </div>
  );
}
