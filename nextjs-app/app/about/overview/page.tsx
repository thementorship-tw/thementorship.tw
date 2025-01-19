import Breadcrumb from "@/components/common/Breadcrumb";
import MarqueeTitle from "@/components/common/MarqueeTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "計畫介紹",
};

export default async function OverviewPage() {
  return (
    <div>
      <Breadcrumb items={["HOME", "關於曼陀號", "計畫介紹"]} />
      <MarqueeTitle zhTitle="計畫介紹" enTitle="Overview" />
    </div>
  );
}
