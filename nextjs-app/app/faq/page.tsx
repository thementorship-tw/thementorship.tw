import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import MarqueeTitle from "@/components/common/MarqueeTitle";

export const metadata: Metadata = {
  title: "常見問題",
};

export default async function FAQPage() {
  return (
    <div>
      <Breadcrumb items={["HOME", "常見問題"]} />
      <MarqueeTitle zhTitle="常見問題" enTitle="FAQ" />
    </div>
  );
}
