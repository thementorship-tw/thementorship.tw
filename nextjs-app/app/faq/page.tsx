import groupBy from "lodash/groupBy";
import sortBy from "lodash/sortBy";
import Breadcrumb from "@/components/common/Breadcrumb";
import MarqueeTitle from "@/components/common/MarqueeTitle";
import ContentWithFilter from "@/components/pages/faq/ContentWithFilter";
import Routes from "@/constants/routes";
import { allFAQCategoriesQuery, allFAQItemsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { IFilterOption } from "@/types/filter-option";
import {
  AllFAQCategoriesQueryResult,
  AllFAQItemsQueryResult,
} from "@/sanity.types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "常見問題",
  alternates: {
    canonical: Routes.FAQ,
  },
};

export const revalidate = 0;

export default async function FAQPage() {
  const faqCategories = await client.fetch<AllFAQCategoriesQueryResult>(
    allFAQCategoriesQuery
  );

  const faqItems = await client.fetch<AllFAQItemsQueryResult>(allFAQItemsQuery);

  const filterOptions: IFilterOption[] = [{ key: "all", name: "全部" }].concat(
    faqCategories.map(({ key, value }) => ({
      key,
      name: value,
    }))
  );

  const groupedFaqItemsByType = groupBy(faqItems, "type");
  const faqItemTypeMap = Object.keys(groupedFaqItemsByType).reduce(
    (acc, key) => {
      acc[key] = sortBy(groupedFaqItemsByType[key], "order");
      return acc;
    },
    {} as Record<string, typeof faqItems>
  );

  return (
    <div>
      <Breadcrumb items={["HOME", "常見問題"]} />
      <MarqueeTitle zhTitle="常見問題" enTitle="FAQ" />
      <ContentWithFilter
        filterOptions={filterOptions}
        faqItemTypeMap={faqItemTypeMap}
      />
    </div>
  );
}
