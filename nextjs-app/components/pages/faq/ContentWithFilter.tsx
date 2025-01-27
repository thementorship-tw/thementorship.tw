"use client";

import { useState } from "react";
import TagFilter from "@/components/common/TagFilter/TagFilter";
import FAQItem from "@/components/common/FAQItem";
import { FAQ_FILTER_OPTIONS, FAQ } from "@/constants/pages/faq";
import { FAQType } from "@/types/filter-option";
type FilterOptionType = FAQType | "all";

const ContentWithFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterOptionType>("all");

  const filteredOptions = FAQ_FILTER_OPTIONS.filter(({ key }) =>
    selectedFilter === "all" ? key !== "all" : key === selectedFilter
  );

  const handleSelect = (selectedOption: FilterOptionType) => {
    setSelectedFilter(selectedOption);
  };

  return (
    <div className="container space-y-10 px-5 md:px-10 xl:px-0 mb-[112px] md:mb-[120px]">
      <TagFilter
        filterOptions={FAQ_FILTER_OPTIONS}
        selectedFilter={selectedFilter}
        onSelect={(selectedFilter) => {
          handleSelect(selectedFilter as FilterOptionType);
        }}
      />

      <div className="flex flex-col gap-10">
        {filteredOptions.map(({ key, name }) => {
          const faqList = FAQ[key as FAQType];

          return (
            <div key={key}>
              <div className="mb-9 relative after:content-[''] after:absolute after:bottom-0 after:rounded-2 after:block after:w-[260px] after:h-[3px] after:bg-yellow-6">
                <p className="py-4 text-h3 text-blue-8 border-b-[1px] border-neutral-2">
                  {name}
                </p>
              </div>

              <div className="flex flex-col gap-5">
                {faqList.map(({ question, answer }) => (
                  <FAQItem key={question} question={question} answer={answer} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContentWithFilter;
