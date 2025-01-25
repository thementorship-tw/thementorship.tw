"use client";

import { type FC, useState } from "react";
import { twMerge } from "tailwind-merge";

import { default as PlusIcon } from "@/public/images/plus-icon.svg";
import { default as MinusIcon } from "@/public/images/minus-icon.svg";
import { default as CompassIcon } from "@/public/images/compass.svg";

interface IAccordionProps {
  title: string;
  subtitle: string;
  subMenu: {
    href: string;
    title: string;
  }[];
  onMenuItemClick: (href: string) => void;
}

const Accordion: FC<IAccordionProps> = ({
  title,
  subtitle,
  subMenu,
  onMenuItemClick,
}) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleToggleAccordion = () => {
    setIsAccordionOpen((prev) => !prev);
  };

  return (
    <div className="px-7 border-b-[1px] border-neutral-8">
      <div onClick={handleToggleAccordion} className="flex gap-3 w-full py-5">
        <div className="flex-1">
          <div
            className={twMerge(
              isAccordionOpen ? "text-yellow-2" : "text-white",
              "flex items-center gap-3"
            )}
          >
            <p className="text-h4-title font-eb-garamond">{title}</p>
            <p className="text-body-md">{subtitle}</p>
          </div>
        </div>

        <div>
          {isAccordionOpen ? (
            <MinusIcon className="w-6 h-6 cursor-pointer text-white" />
          ) : (
            <PlusIcon className="w-6 h-6 cursor-pointer text-white" />
          )}
        </div>
      </div>

      <div
        className={twMerge(
          isAccordionOpen
            ? "grid-rows-[1fr] opacity-100 mb-2"
            : "grid-rows-[0fr] opacity-0",
          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out"
        )}
      >
        <div className="overflow-hidden">
          {subMenu.map(({ href, title }) => (
            <div
              className="flex gap-3 text-white py-4 cursor-pointer"
              onClick={() => {
                onMenuItemClick(href);
              }}
              key={title}
            >
              <CompassIcon className="w-6 h-6 " />
              <div className="text-body-md">{title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
