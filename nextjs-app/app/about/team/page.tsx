import Breadcrumb from "@/components/common/Breadcrumb";
import MarqueeTitle from "@/components/common/MarqueeTitle";
import ContentWithFilter from "@/components/pages/team/ContentWithFilter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "執行團隊",
};

export default async function TeamPage() {
  return (
    <div>
      <Breadcrumb items={["HOME", "關於曼陀號", "執行團隊"]} />
      <MarqueeTitle zhTitle="執行團隊" enTitle="Team" />
      <ContentWithFilter />
    </div>
  );
}
