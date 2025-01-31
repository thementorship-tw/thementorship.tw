"use client";

import { FC, useEffect, useState, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { SloganProvider, useSlogan } from "./slogan-context";
import { default as PopupPointerImg } from "./assets/popup-pointer.svg";

interface ISloganContainerProps {
  children: ReactNode;
  slogans: string[];
}

const SloganContainer: FC<ISloganContainerProps> = ({ children, slogans }) => {
  return <SloganProvider slogans={slogans}>{children}</SloganProvider>;
};

interface ISloganItemProps {
  slogan: string;
  position?: "left" | "right";
  className?: string;
}

const SloganPopup: FC<ISloganItemProps> = ({
  slogan,
  position = "right",
  className,
}) => {
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
        "absolute top-0 opacity-0",
        position === "left" ? "left-0" : "right-0",
        isActive && "animate-fade-in-out",
        className
      )}
    >
      <p className="vertical-rl relative whitespace-pre-line rounded-5 bg-blue-8 p-5 text-body-md text-white motion-translate-y-loop-[5px]">
        {slogan}
        <PopupPointerImg
          className={twMerge(
            "absolute -bottom-[15px] left-1/2 -translate-x-1/2",
            position === "left" && "scale-x-[-1]"
          )}
        />
      </p>
    </div>
  );
};

export { SloganContainer, SloganPopup };
