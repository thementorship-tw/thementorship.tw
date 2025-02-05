"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { shuffleArray } from "@/utils";

export const ANIMATION_DURATION = 6000;

interface ISloganContext {
  randomSlogans: string[];
}

const SloganContext = createContext<ISloganContext | null>(null);

const SloganProvider = ({
  children,
  slogans,
}: {
  children: ReactNode;
  slogans: string[];
}) => {
  const [randomSlogans, setRandomSlogans] = useState<string[]>([]);

  useEffect(() => {
    if (slogans.length > 0) {
      const updateRandomSlogans = () => {
        const countToShow = Math.ceil(slogans.length / 2);
        const selectedSlogans = shuffleArray(slogans).slice(0, countToShow);

        setRandomSlogans(selectedSlogans);
      };

      updateRandomSlogans();
      const interval = setInterval(
        updateRandomSlogans,
        ANIMATION_DURATION + 1000
      );

      return () => {
        clearInterval(interval);
      };
    }
  }, [slogans]);

  return (
    <SloganContext.Provider value={{ randomSlogans }}>
      {children}
    </SloganContext.Provider>
  );
};

const useSlogan = (): ISloganContext => {
  const context = useContext(SloganContext);

  if (!context) {
    throw new Error("useSlogan must be used within a SloganProvider");
  }

  return context;
};

export { SloganProvider, useSlogan };
