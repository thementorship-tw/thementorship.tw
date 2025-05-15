"use client";
import { useState } from "react";
import { ACTIVITY_FILTER_OPTIONS } from "@/constants/pages/activity";
import { ActivityFilterOptionType } from "@/types/activity";
import { filterActivityByType } from "@/utils/activity";
import TagFilter from "@/components/common/TagFilter/TagFilter";
import ActivityCard from "@/components/pages/activity/ActivityCard";
import { mockActivities } from "./mockData";

const ContentWithFilter = () => {
  const [selectedFilter, setSelectedFilter] =
    useState<ActivityFilterOptionType>("all");

  const handleSelect = (selectedOption: ActivityFilterOptionType) => {
    setSelectedFilter(selectedOption);
  };

  const filteredActivities = filterActivityByType(
    selectedFilter,
    mockActivities
  );

  return (
    <div className="container space-y-10 px-5 md:px-10 xl:px-0 mb-[112px] md:mb-[120px]">
      <TagFilter
        filterOptions={ACTIVITY_FILTER_OPTIONS}
        selectedFilter={selectedFilter}
        onSelect={(selectedFilter) => {
          handleSelect(selectedFilter as ActivityFilterOptionType);
        }}
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredActivities.map((activity, index) => (
          <ActivityCard key={index} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default ContentWithFilter;
