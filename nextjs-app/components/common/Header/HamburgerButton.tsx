"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { default as ListIcon } from "@/public/images/list.svg";

import MobileCollapseMenu from "./MobileCollapseMenu";

export default function HamburgerButton() {
  const [showMobileCollapseMenu, setShowMobileCollapseMenu] = useState(false);

  const handleOpenMobileCollapseMenu = () => {
    setShowMobileCollapseMenu(true);
  };

  const handleCloseMobileCollapseMenu = () => {
    setShowMobileCollapseMenu(false);
  };

  // Prevent scrolling when mobile collapse menu is open
  useEffect(() => {
    if (showMobileCollapseMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showMobileCollapseMenu]);

  return (
    <>
      <ListIcon
        className="w-8 h-8 cursor-pointer text-neutral-10 hover:text-yellow-6"
        onClick={handleOpenMobileCollapseMenu}
      />

      {createPortal(
        <MobileCollapseMenu
          show={showMobileCollapseMenu}
          onClose={handleCloseMobileCollapseMenu}
        />,
        document.body
      )}
    </>
  );
}
