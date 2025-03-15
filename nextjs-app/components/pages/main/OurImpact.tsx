import Image from "next/image";
import { twMerge } from "tailwind-merge";
import AnimatedNumber from "@/components/common/AnimatedNumber";
import SectionTitle from "./SectionTitle";
import type { FC } from "react";

interface IImpactCardProps {
  title: string;
  value: number;
  unit: string;
  imageSrc: string;
  duration?: number;
  startValue?: number;
  className?: string;
}

const ImpactCard: FC<IImpactCardProps> = ({
  title,
  value,
  unit,
  imageSrc,
  duration,
  startValue,
  className,
}) => {
  return (
    <div
      className={twMerge(
        "rounded-3 border-[1px] border-yellow-6 bg-white p-7",
        className
      )}
    >
      <h3 className="text-h6 text-blue-8 mb-2">{title}</h3>
      <div className="flex justify-between items-end">
        <div className="text-yellow-6">
          <AnimatedNumber
            value={value}
            duration={duration}
            startValue={startValue}
            className="text-h1-title font-eb-garamond"
          />
          <span className="ml-3 text-h4">{unit}</span>
        </div>
        <Image
          src={imageSrc}
          alt={title}
          width={56}
          height={56}
          className="w-11 h-11"
        />
      </div>
    </div>
  );
};

const OurImpact: FC = () => {
  return (
    <section className="bg-blue-8 px-5 py-[72px] md:px-7 md:py-[120px] lg:pt-9">
      <div className="mx-auto container">
        <SectionTitle
          className="mb-11"
          title="我們的影響力"
          subTitle="Your Journey, Our Impact"
          variant="dark"
        />
        <div className="grid grid-cols-1 gap-4 md:grid-flow-row md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:grid-flow-row-dense">
          <ImpactCard
            title="計劃總時長"
            value={997}
            unit="天"
            imageSrc="/images/icon-ship.png"
            duration={1300}
            startValue={100}
            className="md:col-span-2 lg:col-span-1"
          />
          <ImpactCard
            title="報名總人數"
            value={2368}
            unit="人"
            imageSrc="/images/icon-letter.png"
            duration={1500}
            startValue={2000}
          />
          <ImpactCard
            title="活動參與總人次"
            value={2520}
            unit="人"
            imageSrc="/images/icon-sailor.png"
            duration={1200}
            startValue={1500}
          />
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
