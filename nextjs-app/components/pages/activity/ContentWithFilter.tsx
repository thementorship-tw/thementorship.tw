"use client";
import { FC, useState } from "react";
import { IFilterOption } from "@/types/filter-option";
import { ActivityFilterOptionType, ActivityInfo } from "@/types/activity";
import { filterActivityByType } from "@/utils/activity";
import TagFilter from "@/components/common/TagFilter/TagFilter";
import ActivityCard from "@/components/pages/activity/ActivityCard";

interface IProps {
  filterOptions: IFilterOption[];
  activities: ActivityInfo[];
}

const ContentWithFilter: FC<IProps> = ({ filterOptions, activities }) => {
  const [selectedFilter, setSelectedFilter] =
    useState<ActivityFilterOptionType>("all");

  const filteredActivities = filterActivityByType(selectedFilter, activities);

  const handleSelect = (selectedOption: ActivityFilterOptionType) => {
    setSelectedFilter(selectedOption);
  };

  return (
    <div className="container space-y-10 px-5 md:px-10 xl:px-0 mb-[112px] md:mb-[120px]">
      <TagFilter
        filterOptions={filterOptions}
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
