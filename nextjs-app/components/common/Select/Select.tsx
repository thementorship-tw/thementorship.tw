"use client";

import { useId } from "react";

interface ISelectOption {
  name: string;
  value: string;
}

interface ISelectProps {
  label: string;
  options: ISelectOption[];
  selectedValue: string;
  onChange: (selectedValue: string) => void;
  name?: string;
  id?: string;
  className?: string;
}

export default function Select({
  label,
  options,
  selectedValue,
  onChange,
  name,
  id,
  className,
}: ISelectProps) {
  const generatedId = useId();
  const selectId = id ?? name ?? generatedId;

  return (
    <div className={className}>
      <label
        htmlFor={selectId}
        className="mb-2 block text-body-md text-neutral-10"
      >
        {label}
      </label>
      <select
        className="w-full rounded-2 border border-neutral-3 bg-white px-4 py-3 text-body-md text-neutral-10 focus:border-blue-1 focus:outline-none"
        id={selectId}
        name={name}
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
}
