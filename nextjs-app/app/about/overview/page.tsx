import Breadcrumb from "@/components/common/Breadcrumb";
import MarqueeTitle from "@/components/common/MarqueeTitle";
import ProgramIntroduction from "@/components/pages/about/overview/ProgramIntroduction";
import MarqueeImage from "@/components/pages/about/overview/MarqueeImage";
import MonthlyMeetingRoles from "@/components/pages/about/overview/MonthlyMeetingRoles";
import RecruitmentTargets from "@/components/pages/about/overview/RecruitmentTargets";
import GroupsIntro from "@/components/pages/about/overview/GroupsIntro";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "計畫介紹",
};

export default async function OverviewPage() {
  return (
    <div>
      <Breadcrumb items={["HOME", "關於曼陀號", "計畫介紹"]} />
      <MarqueeTitle zhTitle="計畫介紹" enTitle="Overview" />
      <ProgramIntroduction />
      <MarqueeImage />
      <MonthlyMeetingRoles />
      <RecruitmentTargets />
      <GroupsIntro />
    </div>
  );
}
