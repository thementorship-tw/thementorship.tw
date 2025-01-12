import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import MarqueeTitle from "@/components/common/MarqueeTitle";

export const metadata: Metadata = {
  title: "活動辦法",
};

export default async function ProgramRulesPage() {
  return (
    <div>
      <Breadcrumb items={["HOME", "活動辦法"]} />
      <MarqueeTitle zhTitle="活動辦法" enTitle="The MentorShip Program" />
    </div>
  );
}
