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
  <div className="flex flex-col items-stretch lg:flex-row">
    <div className="flex items-center justify-center rounded-t-3 bg-neutral-1 px-6 py-4 text-subtitle-md lg:rounded-none lg:rounded-l-3">
      按標籤搜索
    </div>
    <div className="flex grow flex-wrap gap-3 rounded-b-3 border border-neutral-1 bg-white px-6 py-4 lg:rounded-none lg:rounded-r-3">
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
          <span className="flex items-center space-x-2 rounded-2 px-3 py-2 hover:cursor-pointer peer-checked:bg-blue-1">
            <FilterAnchor />
            <p className="text-body-md">{option.name}</p>
          </span>
        </label>
      ))}
    </div>
  </div>
);

export default TagFilter;
