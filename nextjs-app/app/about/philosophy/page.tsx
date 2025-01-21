import Breadcrumb from "@/components/common/Breadcrumb";
import MarqueeTitle from "@/components/common/MarqueeTitle";
import WhatWeDo from "@/components/pages/about/philosophy/WhatWeDo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "曼陀號理念",
};

export default async function PhilosophyPage() {
  return (
    <div>
      <Breadcrumb items={["HOME", "關於曼陀號", "曼陀號理念"]} />
      <MarqueeTitle zhTitle="曼陀號理念" enTitle="Philosophy" />
      <WhatWeDo />
    </div>
  );
}
