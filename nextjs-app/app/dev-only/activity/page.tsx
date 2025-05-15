import Breadcrumb from "@/components/common/Breadcrumb";
import MarqueeTitle from "@/components/common/MarqueeTitle";
import ContentWithFilter from "@/components/pages/activity/ContentWithFilter";
import Routes from "@/constants/routes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "活動內容",
  alternates: {
    canonical: Routes.ACTIVITY,
  },
};

export default async function ActivityPage() {
  return (
    <div>
      <Breadcrumb items={["HOME", "活動內容"]} />
      <MarqueeTitle zhTitle="活動內容" enTitle="Activity" />
      <ContentWithFilter />
    </div>
  );
}
