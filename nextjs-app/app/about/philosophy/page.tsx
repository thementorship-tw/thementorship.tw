import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import MarqueeTitle from "@/components/common/MarqueeTitle";

export const metadata: Metadata = {
  title: "曼陀號理念",
};

export default async function PhilosophyPage() {
  return (
    <div>
      <Breadcrumb items={["HOME", "關於曼陀號", "曼陀號理念"]} />
      <MarqueeTitle zhTitle="曼陀號理念" enTitle="Philosophy" />
    </div>
  );
}
