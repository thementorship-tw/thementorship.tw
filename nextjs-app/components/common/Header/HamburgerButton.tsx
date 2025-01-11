"use client";

import { default as ListIcon } from "@/public/images/list.svg";

export default function HamburgerButton() {
  return (
    <div>
      {/* TODO: Mobile Collapse Menu */}
      <ListIcon className="w-8 h-8 cursor-pointer text-neutral-10 hover:text-yellow-6" />
    </div>
  );
}
