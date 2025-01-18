import Breadcrumb from "@/components/common/Breadcrumb";
import MarqueeTitle from "@/components/common/MarqueeTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "團隊成員",
};

export default async function TeamPage() {
  return (
    <div>
      <Breadcrumb items={["HOME", "關於曼陀號", "團隊成員"]} />
      <MarqueeTitle zhTitle="團隊成員" enTitle="Team" />
    </div>
  );
}
