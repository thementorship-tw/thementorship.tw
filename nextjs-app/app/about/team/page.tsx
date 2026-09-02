import { Suspense } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import MarqueeTitle from "@/components/common/MarqueeTitle";
import ContentWithFilter from "@/components/pages/team/ContentWithFilter";
import Routes from "@/constants/routes";
import { sanityFetch } from "@/sanity/lib/live";
import { staffQuery } from "@/sanity/lib/queries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "執行團隊｜關於曼陀號",
  alternates: {
    canonical: Routes.ABOUT.TEAM,
  },
};

export default async function TeamPage() {
  const { data: staffList } = await sanityFetch({ query: staffQuery });

  return (
    <div>
      <Breadcrumb items={["HOME", "關於曼陀號", "執行團隊"]} />
      <MarqueeTitle zhTitle="執行團隊" enTitle="Team" />
      <Suspense>
        <ContentWithFilter initialStaffList={staffList} />
      </Suspense>
    </div>
  );
}
