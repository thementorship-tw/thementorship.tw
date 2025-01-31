import { memo } from "react";
import Link from "next/link";

interface INavItemProps {
  href?: string;
  enTitle: string;
  zhTitle: string;
}

const NavItem = ({ href, enTitle, zhTitle }: INavItemProps) => {
  const content = (
    <>
      <h4 className="font-eb-garamond text-h4 font-normal">{enTitle}</h4>
      <p className="text-body-md">{zhTitle}</p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="flex flex-col items-center justify-center">
        {content}
      </Link>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">{content}</div>
  );
};

export default memo(NavItem);
