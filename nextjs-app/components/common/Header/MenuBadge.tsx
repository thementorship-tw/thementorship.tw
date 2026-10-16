import type { FC } from "react";

interface IMenuBadgeProps {
  text: string;
  className?: string;
}

const MenuBadge: FC<IMenuBadgeProps> = ({ text, className = "" }) => {
  return (
    <span
      className={`inline-flex items-center rounded-pill bg-yellow-6 text-white text-body-sm leading-none px-2 py-1 whitespace-nowrap shrink-0 ${className}`}
    >
      {text}
    </span>
  );
};

export default MenuBadge;
