import { cva } from "class-variance-authority";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

const waveClasses = cva("absolute inset-0 w-full h-9", {
  variants: {
    color: {
      yellow: "bg-[url(/images/wave/wave-yellow.svg)]",
      blue1: "bg-[url(/images/wave/wave-blue1.svg)]",
      blue8: "bg-[url(/images/wave/wave-blue8.svg)]",
      white: "bg-[url(/images/wave/wave-white.svg)]",
      neutral: "bg-[url(/images/wave/wave-neutral.svg)]",
    },
  },
});

const Wave: FC<{
  color: "yellow" | "blue8" | "blue1" | "white" | "neutral";
}> = ({ color }) => {
  return (
    <div
      className={twMerge(
        waveClasses({ color }),
        "absolute left-0 h-[9px] w-full top-0 translate-y-[-9px]"
      )}
    ></div>
  );
};

export default Wave;
