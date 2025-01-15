"use client";

import TagFilter from "@/components/common/TagFilter/TagFilter";
import { FILTER_OPTIONS_FOR_FAQ } from "@/constants/filter-options";

const ContentWithFilter = () => {
  const handleSelect = (selectedOption: string) => {
    console.log("Selected: ", selectedOption);
  };
  return (
    <div className="container space-y-10 px-5 md:px-10">
      <TagFilter
        filterOptions={FILTER_OPTIONS_FOR_FAQ}
        onSelect={handleSelect}
      />
      <div>{/** Add content here */}</div>
    </div>
  );
};

export default ContentWithFilter;
