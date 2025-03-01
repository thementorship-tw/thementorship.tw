"use client";

import { IFilterOption } from "@/types/filter-option";
import { default as FilterAnchor } from "@/public/images/filter-anchor.svg";

interface ITagFilterProps {
  filterOptions: IFilterOption[];
  selectedFilter: string;
  onSelect: (selectedOption: string) => void;
}

const TagFilter: React.FC<ITagFilterProps> = ({
  filterOptions,
  selectedFilter,
  onSelect,
}) => (
  <div className="flex flex-col lg:flex-row items-stretch">
    <div className="flex items-center justify-center py-4 px-6 bg-neutral-1 text-subtitle-md rounded-t-3 lg:rounded-none lg:rounded-l-3">
      按標籤搜索
    </div>
    <div className="flex flex-wrap grow gap-3 py-4 px-6 bg-white border border-neutral-1 rounded-b-3 lg:rounded-none lg:rounded-r-3">
      {filterOptions.map((option) => (
        <label key={option.key}>
          <input
            type="radio"
            name="radio"
            className="peer hidden"
            checked={selectedFilter === option.key}
            onChange={() => {
              onSelect(option.key);
            }}
          />
          <span className="flex items-center rounded-2 space-x-2 py-2 px-3 hover:cursor-pointer peer-checked:bg-blue-1">
            <FilterAnchor />
            <p className="text-body-md">{option.name}</p>
          </span>
        </label>
      ))}
    </div>
  </div>
);

export default TagFilter;
