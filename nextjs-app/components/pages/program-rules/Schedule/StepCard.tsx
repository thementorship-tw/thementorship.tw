import { FC } from "react";
import Image from "next/image";
import { IScheduleStep } from "@/types/schedule";

interface IStepCard extends IScheduleStep {
  hasArrow?: boolean;
}

const StepCard: FC<IStepCard> = ({ imageSrc, desc, hasArrow = true }) => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center gap-3">
        <Image src={imageSrc} alt={desc} width={56} height={56} />
        <div className="text-subtitle-lg whitespace-pre-line">{desc}</div>
      </div>
      {hasArrow && (
        <div className="my-auto">
          <Image
            src="/images/icon-arrow.png"
            alt={desc}
            width={16}
            height={16}
          />
        </div>
      )}
    </div>
  );
};

export default StepCard;
