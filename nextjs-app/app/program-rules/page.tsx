import Breadcrumb from "@/components/common/Breadcrumb";
import MarqueeTitle from "@/components/common/MarqueeTitle";
import Benefits from "@/components/pages/program-rules/Benefits";
import JoinUs from "@/components/pages/program-rules/JoinUs";
import GroupsIntro from "@/components/pages/program-rules/GroupsIntro";
import Captains from "@/components/pages/program-rules/Captains";
import PositiveFeedbacks from "@/components/pages/program-rules/PositiveFeedbacks";
import ProgramFees from "@/components/pages/program-rules/ProgramFees";
import FAQ from "@/components/pages/program-rules/FAQ";
import Reminders from "@/components/pages/program-rules/Reminders";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "活動辦法",
};

export default async function ProgramRulesPage() {
  return (
    <div>
      <Breadcrumb items={["HOME", "活動辦法"]} />
      <MarqueeTitle zhTitle="活動辦法" enTitle="The MentorShip Program" />
      <Benefits />
      <JoinUs />
      <GroupsIntro />
      <Captains />
      <ProgramFees />
      <PositiveFeedbacks />
      <FAQ />
      <Reminders />
    </div>
  );
}
