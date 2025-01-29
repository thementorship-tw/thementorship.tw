"use client";

import { FC, useEffect, useState, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { SloganProvider, useSlogan } from "./slogan-context";
import { default as PopupPointerImg } from "./assets/popup-pointer.svg";

// Slogan 元件
interface SloganProps {
  children: ReactNode;
  slogans: string[];
}

const SloganContainer: FC<SloganProps> = ({ children, slogans }) => {
  return <SloganProvider slogans={slogans}>{children}</SloganProvider>;
};

// Slogan.Item 元件
interface SloganItemProps {
  slogan: string;
  className?: string;
}

const SloganPopup: FC<SloganItemProps> = ({ slogan, className }) => {
  const [isActive, setIsActive] = useState(false);
  const { randomSlogans } = useSlogan();

  useEffect(() => {
    if (Array.isArray(randomSlogans) && randomSlogans.includes(slogan)) {
      setIsActive(true);

      const timeoutId = setTimeout(() => {
        setIsActive(false);
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [randomSlogans, slogan]);

  return (
    <div
      className={twMerge(
        "absolute top-0 right-0 opacity-0",
        isActive && "animate-fade-in-out",
        className
      )}
    >
      <p className="text-white vertical-rl bg-blue-8 p-5 rounded-5 relative motion-translate-y-loop-[5%]">
        {slogan}
        <PopupPointerImg className="absolute -bottom-[15px] left-1/2 -translate-x-1/2" />
      </p>
    </div>
  );
};

export { SloganContainer, SloganPopup };
