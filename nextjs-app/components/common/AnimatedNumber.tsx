"use client";

import { useEffect, useState, FC } from "react";
import { twMerge } from "tailwind-merge";

interface AnimatedNumberProps {
  value: number;
  startValue?: number;
  duration?: number;
  className?: string;
}

const AnimatedNumber: FC<AnimatedNumberProps> = ({
  value,
  startValue = 0,
  duration = 2000,
  className = "",
}) => {
  const [current, setCurrent] = useState(startValue);

  useEffect(() => {
    let startTime: number;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        const easeOutValue = 1 - Math.pow(1 - progress, 4);
        setCurrent(
          Math.floor(startValue + (value - startValue) * easeOutValue)
        );
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCurrent(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [value, startValue, duration]);

  return <span className={twMerge(className)}>{current.toLocaleString()}</span>;
};

export default AnimatedNumber;
