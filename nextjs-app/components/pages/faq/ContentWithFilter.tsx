"use client";

import { useState, type FC } from "react";
import TagFilter from "@/components/common/TagFilter/TagFilter";
import FAQItem from "@/components/common/FAQItem";
import { FAQType, IFilterOption } from "@/types/filter-option";
import type { AllFAQItemsQueryResult } from "@/sanity.types";

type FilterOptionType = FAQType | "all";

interface IProps {
  filterOptions: IFilterOption[];
  faqItemTypeMap: Record<FAQType, AllFAQItemsQueryResult>;
}

const ContentWithFilter: FC<IProps> = ({ filterOptions, faqItemTypeMap }) => {
  const [selectedFilter, setSelectedFilter] = useState<FilterOptionType>("all");

  const filteredOptions = filterOptions.filter(({ key }) =>
    selectedFilter === "all" ? key !== "all" : key === selectedFilter
  );

  const handleSelect = (selectedOption: FilterOptionType) => {
    setSelectedFilter(selectedOption);
  };

  return (
    <div className="container space-y-10 px-5 md:px-10 xl:px-0 mb-[112px] md:mb-[120px]">
      <TagFilter
        filterOptions={filterOptions}
        selectedFilter={selectedFilter}
        onSelect={(selectedFilter) => {
          handleSelect(selectedFilter as FilterOptionType);
        }}
      />

      <div className="flex flex-col gap-10">
        {filteredOptions.map(({ key, name }) => {
          const faqList = faqItemTypeMap[key as FAQType];

          return (
            <div key={key}>
              <div className="mb-9 relative after:content-[''] after:absolute after:bottom-0 after:rounded-2 after:block after:w-[260px] after:h-[3px] after:bg-yellow-6">
                <p className="py-4 text-h3 text-blue-8 border-b-[1px] border-neutral-2">
                  {name}
                </p>
              </div>

              <div className="flex flex-col gap-5">
                {faqList?.map(({ question, answer }) => (
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
