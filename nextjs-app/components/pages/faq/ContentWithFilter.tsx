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
    <div className="container mb-[112px] space-y-10 px-5 md:mb-[120px] md:px-10 xl:px-0">
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
              <div className="relative mb-9 after:absolute after:bottom-0 after:block after:h-[3px] after:w-[260px] after:rounded-2 after:bg-yellow-6 after:content-['']">
                <p className="border-b-[1px] border-neutral-2 py-4 text-h3 text-blue-8">
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
