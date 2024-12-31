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
      <h4 className="text-h4 font-eb-garamond font-normal">{enTitle}</h4>
      <p className="text-body-md">{zhTitle}</p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="flex flex-col justify-center items-center">
        {content}
      </Link>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">{content}</div>
  );
};

export default memo(NavItem);
