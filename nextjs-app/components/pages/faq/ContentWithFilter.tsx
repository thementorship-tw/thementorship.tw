"use client";

import { useState } from "react";
import TagFilter from "@/components/common/TagFilter/TagFilter";
import { FAQ_FILTER_OPTIONS } from "@/constants/faq-page";

const ContentWithFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleSelect = (selectedOption: string) => {
    setSelectedFilter(selectedOption);
    console.log("Selected: ", selectedOption);
  };

  return (
    <div className="container space-y-10 px-5 md:px-10">
      <TagFilter
        filterOptions={FAQ_FILTER_OPTIONS}
        selectedFilter={selectedFilter}
        onSelect={handleSelect}
      />
      <div>{/** Add content here */}</div>
    </div>
  );
};

export default ContentWithFilter;
