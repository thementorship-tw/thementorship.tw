"use client";

import { FC, useEffect, useState, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { SloganProvider, useSlogan } from "./slogan-context";
import { default as PopupPointerImg } from "./assets/popup-pointer.svg";
import { ANIMATION_DURATION } from "./slogan-context";

interface ISloganContainerProps {
  children: ReactNode;
  slogans: string[];
}

const SloganContainer: FC<ISloganContainerProps> = ({ children, slogans }) => {
  return <SloganProvider slogans={slogans}>{children}</SloganProvider>;
};

interface ISloganItemProps {
  slogan: string;
  className?: string;
}

const SloganPopup: FC<ISloganItemProps> = ({ slogan, className }) => {
  const [isActive, setIsActive] = useState(false);
  const { randomSlogans } = useSlogan();

  useEffect(() => {
    if (Array.isArray(randomSlogans) && randomSlogans.includes(slogan)) {
      setIsActive(true);

      const timeoutId = setTimeout(() => {
        setIsActive(false);
      }, ANIMATION_DURATION);

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
      <p className="text-white text-body-md vertical-rl whitespace-pre-line bg-blue-8 p-5 rounded-5 relative motion-translate-y-loop-[5px]">
        {slogan}
        <PopupPointerImg className="absolute -bottom-[15px] left-1/2 -translate-x-1/2" />
      </p>
    </div>
  );
};

export { SloganContainer, SloganPopup };
