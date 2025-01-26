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
    <div className="container space-y-10 px-5 md:px-10 xl:px-0 mb-[112px] md:mb-[120px]">
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
            <div className="mb-9 relative after:content-[''] after:absolute after:bottom-0 after:rounded-2 after:block after:w-[260px] after:h-[3px] after:bg-yellow-6">
              <p className="py-4 text-h3 text-blue-8 border-b-[1px] border-neutral-2">
                {groupName}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
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
