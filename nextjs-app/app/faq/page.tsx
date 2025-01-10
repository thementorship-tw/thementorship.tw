import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";

export const metadata: Metadata = {
  title: "常見問題",
};

export default async function FAQPage() {
  return (
    <div>
      <Breadcrumb items={["HOME", "常見問題"]} />
    </div>
  );
}
