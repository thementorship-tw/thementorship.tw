"use client";

import { useState } from "react";
import TagFilter from "@/components/common/TagFilter/TagFilter";
import ProfileCard from "@/components/common/ProfileCard";
import {
  EXECUTION_GROUP,
  EXECUTION_GROUP_FILTER_OPTIONS,
} from "@/constants/pages/team";
import { ExecutionGroupType } from "@/types/filter-option";

type FilterOptionType = ExecutionGroupType | "all";

const ContentWithFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterOptionType>("all");

  const filteredOptions = EXECUTION_GROUP_FILTER_OPTIONS.filter(({ key }) =>
    selectedFilter === "all" ? key !== "all" : key === selectedFilter
  );

  const handleSelect = (selectedOption: FilterOptionType) => {
    setSelectedFilter(selectedOption);
  };

  return (
    <div className="container mb-[112px] space-y-10 px-5 md:mb-[120px] md:px-10 xl:px-0">
      <TagFilter
        filterOptions={EXECUTION_GROUP_FILTER_OPTIONS}
        selectedFilter={selectedFilter}
        onSelect={(selectedFilter) => {
          handleSelect(selectedFilter as FilterOptionType);
        }}
      />

      {filteredOptions.map(({ key, name: groupName }) => {
        const profileList = EXECUTION_GROUP[key as ExecutionGroupType];

        return (
          <div key={key}>
            <div className="relative mb-9 after:absolute after:bottom-0 after:block after:h-[3px] after:w-[260px] after:rounded-2 after:bg-yellow-6 after:content-['']">
              <p className="border-b-[1px] border-neutral-2 py-4 text-h3 text-blue-8">
                {groupName}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              {profileList.map(
                ({
                  team,
                  name,
                  title,
                  subTitle,
                  quote,
                  imageUrl,
                  hashTags,
                }) => (
                  <ProfileCard
                    key={name}
                    team={team}
                    name={name}
                    title={title}
                    subTitle={subTitle}
                    quote={quote}
                    imageUrl={imageUrl}
                    hashTags={hashTags}
                  />
                )
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentWithFilter;
