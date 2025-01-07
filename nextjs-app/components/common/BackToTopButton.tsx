"use client";

import Image from "next/image";

export default function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="cursor-pointer transition-transform duration-300 hover:scale-110"
    >
      <Image
        src="/images/back-to-top.png"
        alt="back-to-top"
        width={56}
        height={80}
      />
    </button>
  );
}
