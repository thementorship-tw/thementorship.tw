"use client";

import { type FC, useState } from "react";
import dynamic from "next/dynamic";
import { default as ListIcon } from "@/public/images/list.svg";

const MobileCollapseMenu = dynamic(() => import("./MobileCollapseMenu"), {
  ssr: false,
});

const HamburgerButton: FC = () => {
  const [showMobileCollapseMenu, setShowMobileCollapseMenu] = useState(false);

  const handleOpenMobileCollapseMenu = () => {
    setShowMobileCollapseMenu(true);
  };

  const handleCloseMobileCollapseMenu = () => {
    setShowMobileCollapseMenu(false);
  };

  return (
    <>
      <ListIcon
        className="h-8 w-8 cursor-pointer text-neutral-10 hover:text-yellow-6"
        onClick={handleOpenMobileCollapseMenu}
      />

      <MobileCollapseMenu
        show={showMobileCollapseMenu}
        onClose={handleCloseMobileCollapseMenu}
      />
    </>
  );
};

export default HamburgerButton;
