"use client";

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";

const DEADLINE = new Date("Mar 16, 2025 23:59:59").getTime();

const TimeBlock: FC<{ time: string; unit: string }> = ({ time, unit }) => {
  return (
    <>
      <div className="relative p-3 size-[72px] text-h1 text-white">
        <Image
          src="/images/index-banner/time-block-yellow.png"
          alt="time-block"
          fill
          sizes="auto"
          className="absolute w-full h-full object-cover -z-10"
        />
        {time}
      </div>
      <div className="text-yellow-6 text-subtitle-md">{unit}</div>
    </>
  );
};

const CountdownTimer = () => {
  const [time, setTime] = useState<{
    days: string;
    hours: string;
    minutes: string;
  }>({
    days: "00",
    hours: "00",
    minutes: "00",
  });

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = (): void => {
    intervalRef.current = setInterval(() => {
      const now = new Date().getTime();
      const diff: number = DEADLINE - now;

      if (diff <= 0) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setTime({ days: "00", hours: "00", minutes: "00" });
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);

      setTime({
        days: String(Math.floor(totalSeconds / 86400)).padStart(2, "0"),
        hours: String(Math.floor((totalSeconds % 86400) / 3600)).padStart(
          2,
          "0"
        ),
        minutes: String(Math.floor((totalSeconds % 3600) / 60)).padStart(
          2,
          "0"
        ),
      });
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="w-fit flex flex-col items-center lg:items-start gap-y-2">
      <div className="text-subtitle-md text-neutral-10">
        好評延長！第七屆報名最後倒數
      </div>
      <ul className="flex items-center gap-x-2 text-center">
        <li>
          <TimeBlock time={time.days} unit="Days" />
        </li>
        <li className="text-blue-8 text-h4-title">:</li>
        <li>
          <TimeBlock time={time.hours} unit="Hours" />
        </li>
        <li className="text-blue-8 text-h4-title">:</li>
        <li>
          <TimeBlock time={time.minutes} unit="Minutes" />
        </li>
      </ul>
    </div>
  );
};

export default CountdownTimer;
