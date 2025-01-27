import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

const toggle = cva(
  "w-full py-4 text-center text-subtitle-md rounded-2 hover:cursor-pointer",
  {
    variants: {
      isActive: {
        true: "text-white bg-blue-8",
        false: "text-neutral-10",
      },
    },
  }
);

interface ITabToggle {
  label: string;
  onClick: (label: string) => void;
  isActive: boolean;
}

const TabToggle: FC<ITabToggle> = ({ label, onClick, isActive }) => {
  const handleClick = () => {
    onClick(label);
  };
  return (
    <li className={twMerge(toggle({ isActive }))} onClick={handleClick}>
      {label}
    </li>
  );
};

export default TabToggle;
