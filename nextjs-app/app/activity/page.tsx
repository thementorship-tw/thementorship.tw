import { client } from "@/sanity/lib/client";
import {
  AllActivitiesQueryResult,
  AllActivityCategoriesQueryResult,
} from "@/sanity.types";
import {
  allActivitiesQuery,
  allActivityCategoriesQuery,
} from "@/sanity/lib/queries";
import Breadcrumb from "@/components/common/Breadcrumb";
import MarqueeTitle from "@/components/common/MarqueeTitle";
import ContentWithFilter from "@/components/pages/activity/ContentWithFilter";
import Routes from "@/constants/routes";
import { IFilterOption } from "@/types/filter-option";
import { ActivityInfo } from "@/types/activity";
import { toActivitiesUI } from "@/utils/activity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "活動內容",
  alternates: {
    canonical: Routes.ACTIVITY,
  },
};

export default async function ActivityPage() {
  const activityCategoriesFromApi =
    await client.fetch<AllActivityCategoriesQueryResult>(
      allActivityCategoriesQuery
    );

  const activitiesFromApi =
    await client.fetch<AllActivitiesQueryResult>(allActivitiesQuery);

  const filterOptions: IFilterOption[] = [{ key: "all", name: "全部" }].concat(
    activityCategoriesFromApi.map(({ key, value }) => ({
      key,
      name: value,
    }))
  );

  const activities: ActivityInfo[] = toActivitiesUI(activitiesFromApi);

  return (
    <div>
      <Breadcrumb items={["HOME", "活動內容"]} />
      <MarqueeTitle zhTitle="活動內容" enTitle="Activity" />
      <ContentWithFilter
        filterOptions={filterOptions}
        activities={activities}
      />
    </div>
  );
}
