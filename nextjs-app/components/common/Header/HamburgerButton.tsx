"use client";

import { type FC, useState } from "react";
import dynamic from "next/dynamic";
import { default as ListIcon } from "@/public/images/list.svg";

const MobileCollapseMenu = dynamic(() => import("./MobileCollapseMenu"), {
  ssr: false,
});

const HamburgerButton: FC = () => {
  const [shouldShowMobileMenu, setShouldShowMobileMenu] = useState(false);

  const handleOpenMobileCollapseMenu = () => {
    setShouldShowMobileMenu(true);
  };

  const handleCloseMobileCollapseMenu = () => {
    setShouldShowMobileMenu(false);
  };

  return (
    <>
      <ListIcon
        className="w-8 h-8 cursor-pointer text-neutral-10 hover:text-yellow-6"
        onClick={handleOpenMobileCollapseMenu}
      />

      <MobileCollapseMenu
        shouldShowMobileMenu={shouldShowMobileMenu}
        onClose={handleCloseMobileCollapseMenu}
      />
    </>
  );
};

export default HamburgerButton;
